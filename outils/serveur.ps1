# Mini serveur web local pour tester Eureka (aucune installation requise).
# Lance par "Lancer Eureka.bat". Fermer la fenetre pour arreter le serveur.
param([int]$Port = 8080)

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path.TrimEnd('\') + '\'

# Cherche un port libre a partir de $Port.
$listener = $null
for ($p = $Port; $p -lt $Port + 20; $p++) {
    try {
        $l = New-Object System.Net.HttpListener
        $l.Prefixes.Add("http://localhost:$p/")
        $l.Start()
        $listener = $l
        $Port = $p
        break
    } catch { }
}
if (-not $listener) { Write-Host "Impossible de demarrer le serveur (ports occupes)." -ForegroundColor Red; exit 1 }

$mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.js' = 'application/javascript; charset=utf-8'
    '.css' = 'text/css; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.webmanifest' = 'application/manifest+json; charset=utf-8'
    '.svg' = 'image/svg+xml'
    '.png' = 'image/png'
    '.jpg' = 'image/jpeg'
    '.ico' = 'image/x-icon'
    '.md' = 'text/plain; charset=utf-8'
}

$url = "http://localhost:$Port/"
Write-Host ""
Write-Host "  Eureka tourne sur $url" -ForegroundColor Green
Write-Host "  Fermez cette fenetre (ou Ctrl+C) pour arreter."
Write-Host ""
if ($env:CULTUREG_NO_BROWSER -ne '1') { Start-Process $url }

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $res = $ctx.Response
        try {
            $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
            if ($rel -eq '' -or $rel.EndsWith('/')) { $rel += 'index.html' }
            $file = [IO.Path]::GetFullPath((Join-Path $root $rel))
            if ($file.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $file -PathType Leaf)) {
                $bytes = [IO.File]::ReadAllBytes($file)
                $ext = [IO.Path]::GetExtension($file).ToLower()
                $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
                $res.Headers.Add('Cache-Control', 'no-cache')
                $res.ContentLength64 = $bytes.Length
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $res.StatusCode = 404
            }
        } catch {
            $res.StatusCode = 500
        } finally {
            $res.Close()
        }
    }
} finally {
    $listener.Stop()
}

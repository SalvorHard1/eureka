@echo off
chcp 65001 >nul
title Eureka
cd /d "%~dp0"
echo Demarrage de Eureka...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0outils\serveur.ps1" -Port 8080
if errorlevel 1 pause

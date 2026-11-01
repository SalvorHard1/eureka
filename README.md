# Eurêka 💡

**Transformer le temps d’écran en apprentissage rapide et ludique.**

Eurêka est une application web (installable sur téléphone) pour enrichir sa culture générale grâce à des micro-leçons de 1, 2 ou 5 minutes, suivies d’un quiz.

## Fonctionnalités

- **Micro-learning** : 100 leçons courtes et 301 questions réparties dans 26 thématiques (histoire, sciences, art, cinéma, vocabulaire, fun facts, sports, politique, français, voyage, psychologie, éducation, géographie, littérature, musique, philosophie, économie, astronomie, corps humain, mythologie, technologie, gastronomie, nature et animaux, écologie, jeux vidéo, architecture).
- **Approfondir** : 66 leçons proposent une section « Pour aller plus loin ».
- **Quiz** après chaque leçon, avec l’explication de chaque réponse.
- **Révision espacée** (système de Leitner) : les questions reviennent après 1, 3, 7, 14, 30 puis 60 jours ; une erreur renvoie la question au début.
- **Motivation** : objectif quotidien, série de jours (streak), widgets sur l’accueil, XP, niveaux et 19 badges.
- **Installable sur l’écran d’accueil** (Android, iPhone, ordinateur) : bouton « Installer » sur l’accueil et dans le profil. Sur Android, la fenêtre d’installation du navigateur s’ouvre directement ; sur iPhone, l’app guide pas à pas (Partager → Sur l’écran d’accueil). Fonctionne **hors ligne** une fois publiée en HTTPS.

- **Progression sauvegardée sur l’appareil** : barre de progression globale (accueil), par thème (page du thème et profil) et dans chaque leçon. Une leçon interrompue reprend à la même carte, même après avoir fermé l’app. Les boutons « 1 · 2 · 5 min » et la leçon du jour ne proposent jamais une leçon déjà terminée tant qu’il en reste de nouvelles.

La progression est enregistrée dans le navigateur (`localStorage`), sans compte ni serveur. Elle est propre à chaque appareil et à chaque navigateur. Sur iPhone, Safari peut effacer les données d’un site non visité pendant plusieurs semaines : installer l’app sur l’écran d’accueil évite ce problème.

## Lancer en local (Windows)

Double-cliquer sur **`Lancer Eureka.bat`** : un petit serveur local démarre et l’application s’ouvre dans le navigateur. Fermer la fenêtre noire pour l’arrêter.

Aucune installation n’est nécessaire (le serveur utilise PowerShell, inclus dans Windows).

## Publier sur GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `eureka`).
2. Dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Première version d’Eurêka"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/eureka.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. L’application sera disponible à l’adresse `https://<votre-compte>.github.io/eureka/`. Sur téléphone, utiliser « Ajouter à l’écran d’accueil » pour l’installer.

## Ajouter du contenu

Le contenu de base se trouve dans [`js/content.js`](js/content.js). Les ajouts sont dans des fichiers séparés qui utilisent `addLessons`, `addDeep` et `addTheme` (voir la fin de `content.js`). Pour ajouter une leçon, copier un bloc existant dans le thème voulu :

```js
{
  id: 'theme-sujet', title: 'Titre de la leçon', min: 2, // 1, 2 ou 5 minutes
  cards: [
    ['Titre de la carte', 'Texte, avec du **gras** et de l’*italique*.']
  ],
  deep: ['Paragraphe facultatif « Pour aller plus loin ».'],
  quiz: [
    { q: 'Question ?', c: ['Bonne réponse', 'Leurre 1', 'Leurre 2', 'Leurre 3'], e: 'Explication.' }
  ]
}
```

La bonne réponse est toujours la **première** de la liste : l’ordre est mélangé à l’affichage. Chaque `id` doit être unique (il sert à mémoriser la progression).

Après une mise à jour publiée, changer la valeur `CACHE` dans [`sw.js`](sw.js) pour que les utilisateurs reçoivent la nouvelle version.

## Structure

```
index.html              Page de l’application
css/style.css           Styles (thème clair et sombre)
js/content.js           Thématiques, leçons et quiz de base
js/content-deep.js      Approfondissements ajoutés aux leçons de base
js/content-lessons-*.js Nouvelles leçons des thèmes existants
js/content-themes.js    Nouveaux thèmes
js/app.js               Logique : navigation, quiz, révision, XP, badges
sw.js                   Fonctionnement hors ligne
manifest.webmanifest    Installation sur l’écran d’accueil
icons/icon.svg          Icône (coins arrondis, pour l’en-tête et l’onglet)
icons/icon-full.svg     Icône carrée pleine (source des PNG)
icons/*.png             Icônes pour iPhone (180 px) et Android (192 et 512 px)
Lancer Eureka.bat       Lancement local sous Windows
outils/serveur.ps1      Mini serveur local utilisé par le .bat
```

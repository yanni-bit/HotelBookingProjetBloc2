# HotelBookingProjetBloc2
Projet fil rouge Ilaria : Projet #3 - Application Web de Réservation en Ligne

Ce projet répond au cahier des charges du bloc Front-End et Back-End de la formation Développeur Web Full Stack.  
Il vise à concevoir une application web de réservation de services, incluant un calendrier interactif, des formulaires de réservation et des pages de présentation des services.

Chaque partie possède un fichier README.md spécifique pour détailler son installation et son fonctionnement.

---

## Fonctionnalités attendues

- Affichage des services : création de templates pour présenter les services (ou chambres) avec leur description, leur prix et leurs images.  
- Calendrier interactif : mise en place d’un calendrier permettant de sélectionner les dates et heures de réservation.  
- Formulaires de réservation : intégration de formulaires complets pour que les utilisateurs puissent effectuer leurs réservations en ligne.  
- Responsivité : utilisation de media queries afin d’adapter l’affichage à toutes les tailles d’écran (mobile, tablette, desktop).  
- Accessibilité : respect des normes WCAG et intégration des rôles ARIA pour assurer une navigation accessible à tous.  
- Communication frontend / backend : connexion entre l’interface utilisateur et l’API interne Node.js (sans framework) pour la gestion des données et des réservations.

## [Voir la structure du projet](documentations/architecture.md?plain=1)

---

# Ensemble des langages, outils et services utilisés dans mon projet

## Backend
- **Node.js (sans framework)** : utilisation des modules natifs `http`, `fs` et `url`  
- **JSON local** pour la gestion des données (rooms et bookings)

---

## Frontend
- **HTML, CSS et JavaScript (vanilla)**  
- **Bootstrap 5 (CSS uniquement)** pour la mise en page et le responsive design  
- **Aucune bibliothèque ou framework JS externe**

---

## Structure du projet

```
HotelBookingProjetBloc2/                ← dossier racine du projet
├── frontend/                           ← partie visible du site (interface utilisateur)
│   ├── index.html                      ← page d’accueil (liste des chambres)
│   ├── room.html                       ← page de détail pour une chambre
│   ├── booking.html                    ← page du formulaire de réservation
│   ├── css/                            ← dossier des styles
│   │   ├── style.css                   ← feuille principale de style
│   │   └── responsive.css              ← styles pour l’adaptation mobile / tablette
│   ├── js/                             ← scripts JavaScript du front-end
│   │   ├── main.js                     ← chargement et affichage dynamique des chambres
│   │   ├── booking.js                  ← gestion du formulaire et validation de réservation
│   │   ├── api.js                      ← fonctions pour communiquer avec le backend (fetch)
│   │   └── utils.js                    ← fonctions utilitaires (formatage, vérifications, etc.)
│   ├── assets/                         ← ressources graphiques
│   │   ├── images/                     ← images des chambres et visuels du site
│   │   └── icons/                      ← icônes et petits pictogrammes
│   └── README.md                       ← documentation spécifique à la partie frontend
│
├── backend/                            ← partie serveur (logique et données)
│   ├── server.js                       ← serveur Node.js sans framework (http natif)
│   ├── data/                           ← stockage local des données
│   │   ├── rooms.json                  ← données des chambres (nom, prix, description, images)
│   │   └── bookings.json               ← réservations enregistrées (nom, dates, etc.)
│   ├── modules/                        ← modules métiers pour séparer la logique
│   │   ├── router.js                   ← gestion manuelle des routes HTTP (API)
│   │   ├── rooms.js                    ← fonctions liées aux chambres (lecture / ajout)
│   │   └── bookings.js                 ← fonctions liées aux réservations (création / lecture)
│   └── README.md                       ← documentation spécifique à la partie backend
│
├── scripts/                            ← scripts utilitaires
│   └── seed.js                         ← initialisation des fichiers JSON avec des données de base
│
├── docs/                               ← cahier des charges, maquettes, diagrammes
│
├── documentations/                     ← documentation technique (installation, architecture, API)
│
└── README.md                           ← documentation principale du projet
```

---

## Dossiers de documentation

- **docs/** : cahier des charges, maquettes, diagrammes  
- **documentations/** : documentation technique (installation, architecture, endpoints API, notes backend et frontend)

---

## Outils utilisés

- Visual Studio Code  
- Git et GitHub  
- Node.js et npm  
- Navigateur Chrome / Firefox (console et outils développeur)

---

# Objectif

Ce projet s’inscrit dans le cadre de ma formation de Développeur Web Full Stack.  
Il sera présenté en fin de parcours dans le cadre de l’évaluation finale pour la certification.  
Il me permet de :
- comprendre la structure d’un projet full stack sans framework,  
- pratiquer les modules natifs de Node.js,  
- construire une interface client légère avec JavaScript pur et Bootstrap CSS,  
- appliquer les exigences du cahier des charges officiel (responsivité, accessibilité, formulaires, calendrier),  
- organiser un dépôt GitHub de manière professionnelle.

---

## Auteur

Yannick  
Formation Développeur Web Full Stack  
Projet en cours de développement (début de projet le 08/10/2025)

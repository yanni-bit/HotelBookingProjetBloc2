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
hotel-booking/
├── frontend/
│   ├── index.html             ← page d’accueil (liste des chambres)
│   ├── room.html              ← détails d’une chambre
│   ├── booking.html           ← formulaire de réservation
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js            ← chargement / affichage des chambres
│   │   ├── booking.js         ← gestion du formulaire
│   │   ├── api.js             ← requêtes fetch vers backend
│   │   └── utils.js           ← fonctions génériques
│   └── assets/
│       ├── images/
│       └── icons/
│
├── backend/
│   ├── server.js              ← serveur Node.js pur
│   ├── data/
│   │   ├── rooms.json         ← données chambres
│   │   └── bookings.json      ← réservations enregistrées
│   └── modules/
│       ├── router.js          ← gestion des routes HTTP
│       ├── rooms.js           ← logique métier chambres
│       └── bookings.js        ← logique métier réservations
│
├── scripts/
│   └── seed.js                ← script pour initialiser les fichiers JSON
│
└── README.md
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

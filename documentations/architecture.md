hotel-booking/                          ← dossier racine du projet
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

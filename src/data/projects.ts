import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "market-go",
    title: "Market Go",
    slug: "market-go",
    shortDescription: {
      fr: "Plateforme mobile de livraison de courses au Bénin avec négociation libre du prix par le client et tracking GPS en direct.",
      en: "Mobile grocery delivery platform in Benin featuring customer-chosen pricing and real-time live map courier tracking."
    },
    description: {
      fr: "Market Go est une application mobile innovante pensée pour transformer le commerce local et la livraison de courses au Bénin. Le client commande ses articles en définissant lui-même le prix qu'il souhaite payer. Les livreurs partenaires acceptent les courses, s'approvisionnent dans le marché de leur choix et livrent au domicile avec un suivi GPS en temps réel sur une carte interactive.",
      en: "Market Go is an innovative mobile application designed to empower local commerce and grocery delivery in Benin. Customers order goods by specifying their own desired price. Partner couriers accept the order, purchase products in any local open market, and deliver to the client with live interactive map tracking from market to doorstep."
    },
    problemStatement: {
      fr: "Faciliter l'approvisionnement dans les marchés locaux tout en offrant une flexibilité tarifaire unique aux acheteurs et une opportunité de revenus directs aux livreurs.",
      en: "Facilitating access to local markets while offering unique pricing flexibility to customers and direct income opportunities to couriers."
    },
    category: ["software", "personal"],
    type: "personnel",
    technologies: ["Mobile App", "Geolocation / Map Tracking", "JavaScript", "Real-time State"],
    role: {
      fr: "Créatrice du projet et développeuse : conception du flux utilisateur, système d'enchère/proposition de prix et suivi de géolocalisation.",
      en: "Project creator and developer: designing user flows, pricing proposal mechanics, and live geolocation courier tracking."
    },
    features: {
      fr: [
        "Commande personnalisée où le client fixe lui-même son prix d'achat",
        "Espace livreur avec acceptation des courses et orientation vers les marchés",
        "Suivi cartographique en direct de la position du livreur (du marché au domicile)",
        "Notification des étapes clés de la livraison"
      ],
      en: [
        "Custom order flow where customers select their own purchase price",
        "Courier dashboard to accept deliveries and navigate local markets",
        "Live interactive map tracking courier location from market to destination",
        "Real-time notifications at each delivery milestone"
      ]
    },
    challenges: {
      fr: "Synchroniser en temps réel la géolocalisation du livreur sur la carte tout en assurant une fluidité maximale sur les réseaux mobiles locaux.",
      en: "Synchronizing real-time courier geolocation on interactive maps while ensuring high responsiveness across local mobile networks."
    },
    status: "in-progress",
    image: "/projects/marketgo.webp",
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: "discovery-ia",
    title: "Discovery 2026 | IA au service des entreprises",
    slug: "discovery-ia",
    shortDescription: {
      fr: "Projet d'innovation Epitech créant des solutions concrètes basées sur l'intelligence artificielle pour répondre aux besoins d'entreprises.",
      en: "Epitech innovation initiative creating practical AI-powered solutions to solve enterprise business challenges."
    },
    description: {
      fr: "Réalisé au sein d'Epitech Bénin dans le cadre du programme Discovery 2026, ce projet consistait à explorer et développer des solutions innovantes exploitant l'intelligence artificielle pour résoudre des problématiques opérationnelles et décisionnelles en entreprise.",
      en: "Conducted at Epitech Benin as part of the Discovery 2026 program, this initiative focused on researching and building innovative solutions leveraging artificial intelligence to solve operational and decision-making enterprise challenges."
    },
    problemStatement: {
      fr: "Démontrer la valeur ajoutée de modèles d'intelligence artificielle appliqués aux flux de travail réels d'entreprises partenaires.",
      en: "Demonstrating the practical value of artificial intelligence models applied to real workflows for partner organizations."
    },
    category: ["ai-data", "academic"],
    type: "académique",
    technologies: ["Python", "Pandas", "Intelligence Artificielle", "Data Modeling"],
    role: {
      fr: "Membre de l'équipe projet : analyse des besoins métiers, exploration des données et structuration de la solution IA.",
      en: "Project team member: analyzing enterprise requirements, exploring data sets, and structuring the AI solution."
    },
    features: {
      fr: [
        "Analyse exploratoire et préparation des données avec Pandas",
        "Implémentation de modèles d'IA orientés optimisation de processus",
        "Restitution et démonstration des résultats aux parties prenantes"
      ],
      en: [
        "Exploratory data analysis and pipeline preparation using Pandas",
        "Implementation of process optimization AI models",
        "Presentation and demonstration of technical outcomes to stakeholders"
      ]
    },
    challenges: {
      fr: "Adapter des concepts théoriques d'IA à des cas d'usage professionnels tangibles avec des données hétérogènes.",
      en: "Translating theoretical AI concepts into tangible enterprise use-cases with heterogeneous data."
    },
    status: "completed",
    image: "/projects/discovery.webp",
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: "yolita",
    title: "YOLITA — E-commerce Yaourt Naturel",
    slug: "yolita",
    shortDescription: {
      fr: "Site e-commerce et vitrine commerciale pour une marque de yaourt naturel artisanal (« C'est Yolita »).",
      en: "E-commerce store and digital showcase for an artisanal natural yogurt brand ('C'est Yolita')."
    },
    description: {
      fr: "YOLITA est une solution e-commerce et un projet entrepreneurial né autour de la marque de yaourt naturel artisanal préparé par ma mère. J'ai conçu et développé ce site web pour allier valorisation de marque, catalogue produit interactif, expérience d'achat et organisation des commandes.",
      en: "YOLITA is an e-commerce platform and entrepreneurial venture built around the artisanal natural yogurt brand created by my mother. I designed and developed this website to combine brand storytelling, interactive product catalog, shopping experience, and order management."
    },
    problemStatement: {
      fr: "Passer d'une gestion manuelle informelle à un outil centralisé permettant de présenter l'offre aux clients, de valoriser l'identité de marque et de structurer le suivi des commandes au détail et en gros.",
      en: "Transitioning from informal manual tracking to a centralized tool showcasing products to customers, highlighting brand identity, and structuring retail and wholesale orders."
    },
    category: ["web", "personal"],
    type: "personnel",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    role: {
      fr: "Conception complète, UI/UX, développement frontend de l'espace vitrine et de l'interface d'administration.",
      en: "Full design, UI/UX, frontend development of the showcase visitor space and administration interface."
    },
    features: {
      fr: [
        "Vitrine de présentation de la marque et de l'identité « C'est Yolita »",
        "Espace visiteur interactif et catalogue des formats disponibles",
        "Interface d'administration pour la gestion des produits",
        "Organisation des ventes au détail et en gros",
        "Structure préparée pour l'intégration future du panier, reçus et paiements en ligne"
      ],
      en: [
        "Brand showcase highlighting the 'C'est Yolita' identity",
        "Interactive visitor area and product catalog with formats",
        "Administration dashboard for product management",
        "Organization of retail and wholesale sales",
        "Foundation ready for future cart, receipts and payment workflows"
      ]
    },
    challenges: {
      fr: "Concevoir une interface claire adaptée aussi bien aux acheteurs particuliers qu'aux commandes volumineuses en gros, tout en posant des fondations solides pour les futurs modules de paiement.",
      en: "Designing an intuitive interface suitable for both retail customers and large wholesale orders, while laying solid groundwork for future payment modules."
    },
    status: "in-progress",
    image: "/projects/yolita.webp",
    githubUrl: null,
    liveUrl: "https://yolita.vercel.app/",
    featured: true
  },
  {
    id: "r-type",
    title: "R-TYPE (Tek 3 Epitech)",
    slug: "r-type",
    shortDescription: {
      fr: "Recréation du jeu vidéo d'arcade culte R-Type en C++ avec architecture réseau et logique de gameplay avancée.",
      en: "Recreation of the arcade shoot'em up classic R-Type in C++ featuring networked architecture and gameplay logic."
    },
    description: {
      fr: "Projet d'envergure réalisé en équipe dans le cadre de ma 3e année (Tek 3) à Epitech Bénin. L'objectif est d'implémenter un moteur de jeu multijoueur performant respectant les standards de l'industrie logicielle.",
      en: "Major team project carried out as part of my 3rd year (Tek 3) at Epitech Benin. The goal is to build a high-performance multiplayer game engine adhering to modern software industry standards."
    },
    problemStatement: {
      fr: "Concevoir une boucle de jeu fluide et synchronisée entre plusieurs joueurs, avec gestion précise des entités en temps réel et détection fiable des collisions.",
      en: "Designing a synchronized, fluid game loop across multiple players with real-time entity lifecycle and accurate collision detection."
    },
    category: ["software", "academic"],
    type: "académique",
    technologies: ["C++", "CMake", "Game Engine Logic", "Git"],
    role: {
      fr: "Développement des mécaniques de gameplay, algorithmes d'apparition des entités (spawns), gestion des collisions et interactions dynamiques.",
      en: "Developing core gameplay mechanics, entity spawn algorithms, collision detection routines, and dynamic interactions."
    },
    features: {
      fr: [
        "Logique de déplacement et interactions de jeu fluides",
        "Gestionnaire d'apparition dynamique des ennemis et vagues (spawns)",
        "Système de boîtes de collision pour les projectiles et entités",
        "Coordination de l'architecture avec l'équipe de développement"
      ],
      en: [
        "Smooth player navigation and interactive mechanics",
        "Dynamic wave and enemy spawn manager",
        "Bounding box collision system for projectiles and entities",
        "Architectural coordination within the development team"
      ]
    },
    challenges: {
      fr: "Assurer la précision des collisions et la cohérence de l'état du jeu tout en collaborant efficacement au sein d'un dépôt d'équipe partagé.",
      en: "Ensuring precision in collision handling and consistent game state while coordinating seamlessly within a shared team repository."
    },
    status: "in-progress",
    image: "/projects/rtype.webp",
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: "nocibe-prototype",
    title: "Stagiaire Développeur Web — Nocibe BENIN",
    slug: "nocibe-prototype",
    shortDescription: {
      fr: "Stage de 2 mois (Oct. - Déc. 2025) : prototypage web, intégration réseau et configuration de postes informatiques.",
      en: "2-month internship (Oct. - Dec. 2025): web prototyping, network setup, and workstation deployments."
    },
    description: {
      fr: "Stage de deux mois effectué chez Nocibe BENIN (Cotonou). Au sein de l'équipe informatique, j'ai travaillé sur un prototype de site web d'entreprise, la découverte et l'utilisation de nouveaux langages de programmation, la configuration d'appareils pour l'accès Internet, l'installation de nouveaux postes de travail et l'équipement technique de salles de réunion.",
      en: "Two-month internship completed at Nocibe BENIN in Cotonou. Within the IT team, I developed a corporate web prototype, explored new programming languages, configured network access on client devices, set up new workstations, and prepared technical meeting room installations."
    },
    problemStatement: {
      fr: "Contribuer à la fois aux besoins de communication numérique et au support informatique opérationnel d'un acteur industriel majeur au Bénin.",
      en: "Contributing simultaneously to digital communication prototyping and day-to-day IT infrastructure needs for a major industrial player in Benin."
    },
    category: ["web"],
    type: "professionnel",
    technologies: ["HTML5", "CSS3", "JavaScript", "Network & Hardware Setup"],
    role: {
      fr: "Stagiaire développeuse web & support : intégration du prototype web, configuration réseau et préparation d'équipements informatiques.",
      en: "Web developer & IT support intern: frontend prototyping, network configuration, and computer hardware provisioning."
    },
    features: {
      fr: [
        "Prototypage de l'interface du site web d'entreprise",
        "Configuration d'appareils pour l'accès sécurisé à Internet",
        "Installation et configuration complète de nouveaux postes de travail",
        "Préparation et câblage technique d'une salle de réunion"
      ],
      en: [
        "Corporate website UI prototyping",
        "Configuring devices for secure internet access",
        "Complete installation and provisioning of new computer workstations",
        "Technical setup and cabling for conference rooms"
      ]
    },
    challenges: {
      fr: "S'adapter rapidement aux exigences du milieu industriel et gérer des tâches à la fois logicielles et d'infrastructure avec rigueur.",
      en: "Adapting quickly to industrial enterprise standards and reliably handling both software and infrastructure assignments."
    },
    status: "completed",
    image: "/projects/nocibe.webp",
    githubUrl: null,
    liveUrl: null,
    featured: true
  }
];

import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "yolita",
    title: "YOLITA",
    slug: "yolita",
    shortDescription: {
      fr: "Plateforme numérique et commerciale pour une marque de yaourt naturel artisanal (« C'est Yolita »).",
      en: "Digital showcase and sales management platform for an artisanal natural yogurt brand ('C'est Yolita')."
    },
    description: {
      fr: "YOLITA est un projet entrepreneurial et numérique né autour de la marque de yaourt naturel artisanal préparé par ma mère. J'ai conçu cette solution pour allier valorisation de marque, expérience client fluide et organisation rigoureuse des ventes.",
      en: "YOLITA is an entrepreneurial and digital project built around the natural artisanal yogurt brand created by my mother. I designed this solution to combine brand elevation, seamless customer experience, and structured sales management."
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
    githubUrl: null, // Axelle fournira l'URL du dépôt GitHub
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
    githubUrl: null, // Axelle transmettra le lien vers le dépôt d'équipe
    liveUrl: null,
    featured: true
  },
  {
    id: "nocibe-prototype",
    title: "Prototype Web NOCIBE",
    slug: "nocibe-prototype",
    shortDescription: {
      fr: "Conception d'un prototype de site web d'entreprise réalisé au cours d'un stage de 2 mois à la Nouvelle Cimenterie du Bénin.",
      en: "Corporate website prototype created during a 2-month internship at Nouvelle Cimenterie du Bénin (NOCIBE)."
    },
    description: {
      fr: "Pendant un stage de deux mois au sein de NOCIBE (Nouvelle Cimenterie du Bénin), j'ai travaillé sur la conception d'un prototype de site web pour l'entreprise, qui ne disposait pas encore de sa propre présence en ligne à l'époque.",
      en: "During a two-month internship at NOCIBE (Nouvelle Cimenterie du Bénin), I contributed to the design of a corporate web prototype for the company, which did not yet have an official dedicated website at the time."
    },
    problemStatement: {
      fr: "Étudier l'image institutionnelle de l'entreprise et prototyper une interface moderne présentant ses activités industrielles, ses valeurs et ses points de contact.",
      en: "Studying the company's industrial identity and prototyping a modern interface presenting its activities, values, and contact channels."
    },
    category: ["web"],
    type: "professionnel",
    technologies: ["HTML5", "CSS3", "JavaScript", "React (exploration)"],
    role: {
      fr: "Stagiaire développeuse web : prototypage des maquettes d'écrans, intégration initiale en HTML/CSS/JS puis exploration d'une version réactive avec React.",
      en: "Web developer intern: prototyping UI layouts, initial integration in HTML/CSS/JS, followed by exploration of a reactive React approach."
    },
    features: {
      fr: [
        "Page d'accueil institutionnelle avec présentation industrielle",
        "Sections de mise en avant des produits et des valeurs d'entreprise",
        "Formulaire de prise de contact et repères géographiques",
        "Approche responsive adaptée aux différents formats d'écrans"
      ],
      en: [
        "Corporate homepage with industrial activity overview",
        "Product spotlight and organizational values sections",
        "Contact form layout and regional location indicators",
        "Responsive layout adapted to multiple screen formats"
      ]
    },
    challenges: {
      fr: "Découvrir la rigueur d'un environnement industriel tout en respectant scrupuleusement la confidentialité des informations internes de l'entreprise.",
      en: "Adapting to the rigor of an industrial setting while strictly upholding the confidentiality of proprietary internal data."
    },
    status: "prototype",
    image: "/projects/nocibe.webp",
    githubUrl: null, // Lien sous réserve d'autorisation de partage
    liveUrl: null,
    featured: true
  }
];

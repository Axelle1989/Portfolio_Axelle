import { TimelineItem } from '../types';

export const timelineData: TimelineItem[] = [
  {
    id: "epitech-tek3",
    period: {
      fr: "En cours (Tek 3)",
      en: "Ongoing (Tek 3)"
    },
    title: {
      fr: "3e Année — Cycle Supérieur d'Informatique",
      en: "3rd Year — Computer Science Program"
    },
    organization: "Epitech Bénin",
    location: "Cotonou, Bénin",
    type: "education",
    description: {
      fr: "Approfondissement de l'architecture logicielle, développement de systèmes complexes en équipe et exploration des architectures réseau.",
      en: "Deepening software architecture, developing complex systems collaboratively in teams, and exploring networked architectures."
    },
    highlights: {
      fr: [
        "Réalisation du projet de jeu vidéo multijoueur R-TYPE en C++",
        "Pratique approfondie du travail collaboratif sous Git et méthodologies agiles",
        "Initiation continue et exploration des modèles d'IA et de l'analyse de données"
      ],
      en: [
        "Development of the R-TYPE multiplayer video game project in C++",
        "Advanced collaborative workflow with Git and agile methodologies",
        "Active exploration of AI models and data analysis pipelines"
      ]
    }
  },
  {
    id: "nocibe-internship",
    period: {
      fr: "Stage de ~2 mois",
      en: "~2 Months Internship"
    },
    title: {
      fr: "Stagiaire Développeuse Web — Prototypage",
      en: "Web Developer Intern — Prototyping"
    },
    organization: "NOCIBE (Nouvelle Cimenterie du Bénin)",
    location: "Bénin",
    type: "experience",
    description: {
      fr: "Immersion professionnelle au sein d'un acteur industriel majeur au Bénin avec pour mission l'étude et la conception d'un prototype de site web.",
      en: "Professional immersion within a major industrial company in Benin, focused on researching and developing a web presence prototype."
    },
    highlights: {
      fr: [
        "Prototypage de l'interface en HTML5, CSS3 et JavaScript moderne",
        "Exploration de composants réutilisables sous React",
        "Sensibilisation aux exigences de communication institutionnelle et à la confidentialité d'entreprise"
      ],
      en: [
        "UI prototyping with modern HTML5, CSS3, and JavaScript",
        "Exploration of reusable components using React",
        "Awareness of institutional communication requirements and strict corporate confidentiality"
      ]
    }
  },
  {
    id: "yolita-project",
    period: {
      fr: "Projet Personnel & Entrepreneuriat",
      en: "Personal & Entrepreneurial Project"
    },
    title: {
      fr: "Conception & Développement de YOLITA",
      en: "Design & Development of YOLITA"
    },
    organization: "Projet Indépendant (« C'est Yolita »)",
    location: "Cotonou, Bénin",
    type: "personal",
    description: {
      fr: "Développement d'une plateforme web pour valoriser l'activité de production de yaourt naturel artisanal portée par ma mère et structurer ses canaux de vente.",
      en: "Development of a web platform to showcase the artisanal natural yogurt brand started by my mother and organize sales channels."
    },
    highlights: {
      fr: [
        "Création d'une identité visuelle digitale attrayante et accessible",
        "Déploiement continu d'un prototype fonctionnel en ligne sur Vercel",
        "Modélisation des fonctionnalités futures de commande et de gestion"
      ],
      en: [
        "Creation of an appealing and accessible digital brand identity",
        "Continuous deployment of a live functional prototype on Vercel",
        "Architecting future order workflows and back-office management"
      ]
    }
  },
  {
    id: "epitech-fundamentals",
    period: {
      fr: "Tek 1 & Tek 2",
      en: "Tek 1 & Tek 2"
    },
    title: {
      fr: "Fondamentaux de l'Informatique & Pratique Intensive",
      en: "Computer Science Fundamentals & Intensive Practice"
    },
    organization: "Epitech Bénin",
    location: "Cotonou, Bénin",
    type: "education",
    description: {
      fr: "Acquisition des bases de la programmation impérative, de l'algorithmie et de la rigueur en environnement Unix/Linux selon la pédagogie par projets Epitech.",
      en: "Mastering fundamental imperative programming, algorithms, and Unix/Linux discipline through Epitech's project-based pedagogy."
    },
    highlights: {
      fr: [
        "Pratique intensive du langage C (gestion de la mémoire, pointeurs, structures de données)",
        "Développement de l'autonomie, de la recherche documentaire et de la résolution de bugs",
        "Culture de l'entraide et apprentissage par les pairs (peer-learning)"
      ],
      en: [
        "Intensive C programming (pointers, dynamic memory allocation, data structures)",
        "Fostering strong autonomy, self-directed research, and rigorous debugging",
        "Strong culture of peer-learning and collaborative problem-solving"
      ]
    }
  }
];

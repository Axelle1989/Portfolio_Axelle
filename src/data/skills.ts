import { Skill } from '../types';

export const skillsData: Skill[] = [
  // 1. Développement web
  {
    name: "HTML5 & CSS3",
    status: "acquired",
    category: "web",
    note: {
      fr: "Intégration responsive, sémantique moderne et flexbox/grid",
      en: "Responsive layout, modern semantics, flexbox & grid"
    }
  },
  {
    name: "JavaScript (ES6+)",
    status: "acquired",
    category: "web",
    note: {
      fr: "DOM, programmation asynchrone, manipulation de données",
      en: "DOM manipulation, asynchronous JS, data handling"
    }
  },
  {
    name: "React",
    status: "acquired",
    category: "web",
    note: {
      fr: "Composants, hooks d'état, interfaces modulaires",
      en: "Component architecture, state hooks, modular UIs"
    }
  },
  {
    name: "Tailwind CSS",
    status: "acquired",
    category: "web",
    note: {
      fr: "Stylisation utilitaire rapide, interfaces adaptatives",
      en: "Utility-first styling, rapid responsive interfaces"
    }
  },

  // 2. Programmation et développement logiciel
  {
    name: "C & C++",
    status: "acquired",
    category: "software",
    note: {
      fr: "Pratique intensive au cursus Epitech (algorithmique, gestion mémoire, projet R-TYPE)",
      en: "Intensive training at Epitech (algorithms, memory management, R-TYPE project)"
    }
  },
  {
    name: "Python",
    status: "acquired",
    category: "software",
    note: {
      fr: "Scripts, logique de traitement et découverte scientifique",
      en: "Scripting, algorithmic logic and scientific exploration"
    }
  },
  {
    name: "Logique logicielle & Gameplay",
    status: "acquired",
    category: "software",
    note: {
      fr: "Gestion des boucles de jeu, collisions, apparitions (spawns)",
      en: "Game loops, collision detection, entity spawns"
    }
  },

  // 3. Data et intelligence artificielle
  {
    name: "Pandas",
    status: "learning",
    category: "ai-data",
    note: {
      fr: "Manipulation de séries et DataFrames, nettoyage de données (en cours d'approfondissement)",
      en: "Series and DataFrames manipulation, data cleaning (actively deepening)"
    }
  },
  {
    name: "Scikit-learn",
    status: "learning",
    category: "ai-data",
    note: {
      fr: "Initiation aux modèles d'apprentissage automatique supervisé et non supervisé",
      en: "Introduction to supervised and unsupervised machine learning models"
    }
  },
  {
    name: "Exploration IA & Données",
    status: "learning",
    category: "ai-data",
    note: {
      fr: "Compréhension des flux de données et intégration de modèles",
      en: "Understanding data pipelines and model integration"
    }
  },

  // 4. Outils de développement et collaboration
  {
    name: "Git",
    status: "acquired",
    category: "tools",
    note: {
      fr: "Gestion de versions, commits structurés, branches de travail",
      en: "Version control, structured commits, feature branching"
    }
  },
  {
    name: "GitHub",
    status: "acquired",
    category: "tools",
    note: {
      fr: "Dépôts distants, pull requests, revues de code et collaboration",
      en: "Remote repos, pull requests, code reviews, collaboration"
    }
  },
  {
    name: "Linux (Environnement Unix)",
    status: "acquired",
    category: "tools",
    note: {
      fr: "Terminal, commandes bash, environnement natif de travail Epitech",
      en: "Command line, bash scripting, native Epitech environment"
    }
  },

  // 5. Compétences transversales
  {
    name: "Travail en équipe & Peer-learning",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Collaboration sur des projets complexes, communication et partage",
      en: "Collaborating on complex projects, clear communication, peer learning"
    }
  },
  {
    name: "Apprentissage par projet",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Autonomie face à un cahier des charges, recherche et itération",
      en: "Autonomy with specifications, research, iterative problem solving"
    }
  },
  {
    name: "Prototypage & Sens produit",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Transformation d'un besoin terrain réel en solution numérique concrète",
      en: "Translating real-world business needs into concrete digital prototypes"
    }
  },
  {
    name: "Rigueur & Curiosité technique",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Volonté constante de comprendre le fonctionnement sous-jacent du code",
      en: "Continuous drive to understand underlying systems and mechanisms"
    }
  }
];

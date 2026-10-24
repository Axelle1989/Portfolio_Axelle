import { Skill } from '../types';

export const skillsData: Skill[] = [
  // 1. Développement web
  {
    name: "HTML5 & CSS3",
    status: "acquired",
    category: "web",
    note: {
      fr: "Intégration responsive, structuration sémantique et flexbox/grid",
      en: "Responsive layout, semantic markup, flexbox & grid"
    }
  },
  {
    name: "JavaScript (ES6+)",
    status: "acquired",
    category: "web",
    note: {
      fr: "DOM, logique asynchrone, manipulation de données dynamiques",
      en: "DOM manipulation, asynchronous JS, dynamic data handling"
    }
  },
  {
    name: "Tailwind CSS",
    status: "acquired",
    category: "web",
    note: {
      fr: "Stylisation utilitaire moderne, interfaces responsives et rapides",
      en: "Modern utility-first styling, responsive high-performance interfaces"
    }
  },
  {
    name: "React",
    status: "acquired",
    category: "web",
    note: {
      fr: "Composants réutilisables, hooks d'état, interfaces réactives (YOLITA, prototypes)",
      en: "Reusable components, state hooks, reactive interfaces (YOLITA, prototypes)"
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
      fr: "Scripts, analyse de données, logique logicielle et automatisation",
      en: "Scripting, data analysis, software logic and automation"
    }
  },
  {
    name: "CSFML",
    status: "acquired",
    category: "software",
    note: {
      fr: "Bibliothèque multimédia C pour le rendu graphique 2D, fenêtrage et gestion audio",
      en: "C multimedia library for 2D graphics rendering, windowing and audio"
    }
  },
  {
    name: "Haskell",
    status: "acquired",
    category: "software",
    note: {
      fr: "Programmation fonctionnelle pure, récursivité avancée et typage statique fort",
      en: "Pure functional programming, advanced recursion and strong static typing"
    }
  },

  // 3. Data et intelligence artificielle
  {
    name: "Pandas",
    status: "acquired",
    category: "ai-data",
    note: {
      fr: "Manipulation de séries et DataFrames, nettoyage et préparation de jeux de données",
      en: "Series & DataFrames manipulation, data cleaning and preparation pipelines"
    }
  },
  {
    name: "IA au service des entreprises",
    status: "acquired",
    category: "ai-data",
    note: {
      fr: "Expérience pratique lors du projet Discovery 2026 Epitech (solutions innovantes pour entreprises)",
      en: "Hands-on experience during the Epitech Discovery 2026 project (AI corporate solutions)"
    }
  },
  {
    name: "Scikit-learn & Machine Learning",
    status: "learning",
    category: "ai-data",
    note: {
      fr: "Approfondissement des modèles prédictifs et de la classification de données",
      en: "Deepening knowledge of predictive modeling and data classification"
    }
  },

  // 4. Outils de développement et collaboration
  {
    name: "Git & GitHub",
    status: "acquired",
    category: "tools",
    note: {
      fr: "Gestion de versions, commits conventionnels, branches et travail collaboratif",
      en: "Version control, conventional commits, feature branches, team collaboration"
    }
  },
  {
    name: "Linux / Ubuntu",
    status: "acquired",
    category: "tools",
    note: {
      fr: "Système de travail quotidien, commandes shell, administration basique et scripts",
      en: "Daily workstation OS, shell commands, basic system admin and scripting"
    }
  },

  // 5. Compétences transversales (Atouts du CV)
  {
    name: "Esprit créatif",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Conception d'idées originales (Market Go, ateliers créatifs Digital Ninja)",
      en: "Original ideation (Market Go, Digital Ninja creative workshops)"
    }
  },
  {
    name: "Esprit d'équipe & Collaboration",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Travail en équipe sur R-TYPE et encadrement d'ateliers chez Digital Ninja",
      en: "Team collaboration on R-TYPE and workshop mentoring at Digital Ninja"
    }
  },
  {
    name: "Esprit de responsabilité & Rigueur",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Organisation, ponctualité et engagement sur les livrables techniques et humains",
      en: "Organization, reliability and thorough commitment to technical deliverables"
    }
  },
  {
    name: "Autonomie & Résolution de problèmes",
    status: "acquired",
    category: "transversal",
    note: {
      fr: "Capacité à chercher la solution par soi-même et transformer un besoin en prototype",
      en: "Ability to self-direct research and turn requirements into working prototypes"
    }
  }
];

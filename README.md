# Portfolio Professionnel — Axelle Kafui HOSSOU

Portfolio moderne, interactif, responsive et bilingue (Français / Anglais) conçu pour présenter le profil d'**Axelle Kafui HOSSOU**, étudiante en 3e année (Tek 3) à **Epitech Bénin**, développeuse en formation et créatrice de solutions numériques.

---

## 🚀 Fonctionnalités & Points Clés

- **Direction artistique & Design** : Thème sombre moderne raffiné avec accents électriques (violet/cyan), typographie soignée (`Plus Jakarta Sans` & `JetBrains Mono`), carte interactive de terminal et composition visuelle technologique.
- **Support bilingue complet (i18n)** : Bascule instantanée Français / Anglais sans rechargement, traductions soignées et naturelles pour toutes les sections.
- **Thème Sombre / Clair** : Bascule dynamique avec persistance dans le `localStorage` et respect du confort visuel.
- **Navigation fluide** : Défilement fluide, indicateur de section active, menu mobile responsive.
- **Gestion centralisée des projets** : Structure typée dans `src/data/projects.ts` avec filtres réactifs (Web, Logiciel, IA & Data, Projets personnels, Projets académiques).
- **Cartes & Modales de projet détaillées** : Rôle, technologies vérifiées, problématique métier, fonctionnalités, difficultés techniques et liens directs vers démos et dépôts.
- **Compétences transparentes & crédibles** : Organisées par catégories, distinguant les technologies pratiquées sur projet de celles en cours d'apprentissage, sans scores artificiels.
- **Parcours chronologique & ADN** : Rétrospective académique (Epitech), immersion professionnelle (NOCIBE) et démarches entrepreneuriales (YOLITA).
- **Formulaire de contact & Intégration e-mail** : Prise de contact directe et liens vers profils vérifiés.
- **Prêt pour le CV** : Déposez votre CV au format PDF dans `public/cv.pdf` pour activer le téléchargement immédiat.

---

## 🛠️ Stack Technique

- **Framework** : [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Outil de build** : [Vite](https://vite.dev/)
- **Style** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/) + icônes vectorielles SVG personnalisées

---

## 📂 Structure du Projet

```text
Portfolio_Axelle/
├── public/
│   ├── projects/          # Emplacement des captures d'écran
│   └── cv.pdf             # Emplacement de votre fichier CV
├── src/
│   ├── components/        # Composants d'interface (Navbar, Hero, Projects...)
│   │   └── icons/         # Icônes SVG optimisées (Github, Linkedin)
│   ├── context/           # Contextes React (ThemeContext, LanguageContext)
│   ├── data/              # Données centralisées (projects, skills, timeline, traits)
│   ├── i18n/              # Dictionnaires de traduction FR / EN
│   ├── types/             # Interfaces TypeScript (Project, Skill, Timeline...)
│   ├── App.tsx            # Assemblage principal de l'application
│   ├── index.css          # Directives Tailwind et utilitaires de style
│   └── main.tsx           # Point d'entrée de l'application
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Démarrage en local

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   Le site sera accessible sur `http://localhost:5173`.

3. **Compiler pour la production** :
   ```bash
   npm run build
   ```
   Les fichiers optimisés seront générés dans le dossier `dist/`.

4. **Prévisualiser le build de production** :
   ```bash
   npm run preview
   ```

---

## 🔄 Comment ajouter un nouveau projet GitHub

Ouvrez le fichier `src/data/projects.ts` et ajoutez un objet respectant l'interface `Project` :

```typescript
{
  id: "mon-nouveau-projet",
  title: "Nom du Projet",
  slug: "nom-du-projet",
  shortDescription: {
    fr: "Brève description en une phrase.",
    en: "Short one-sentence description."
  },
  description: {
    fr: "Description détaillée du projet...",
    en: "Detailed project description..."
  },
  problemStatement: {
    fr: "Problème résolu...",
    en: "Problem solved..."
  },
  category: ["web"], // 'web' | 'software' | 'ai-data' | 'personal' | 'academic'
  type: "personnel", // 'personnel' | 'académique' | 'professionnel'
  technologies: ["React", "TypeScript", "Node.js"],
  role: {
    fr: "Mon rôle précis dans le projet...",
    en: "My specific role in the project..."
  },
  features: {
    fr: ["Fonctionnalité 1", "Fonctionnalité 2"],
    en: ["Feature 1", "Feature 2"]
  },
  challenges: {
    fr: "Défis techniques rencontrés...",
    en: "Technical challenges encountered..."
  },
  status: "in-progress", // 'completed' | 'in-progress' | 'prototype' | 'planned'
  image: "/projects/screenshot.webp",
  githubUrl: "https://github.com/Axelle1989/mon-repo",
  liveUrl: "https://demo.vercel.app/",
  featured: true
}
```

---

## 🌐 Déploiement

Le site est entièrement statique et optimisé pour être hébergé sur
- **Netlify** 

export interface ProfileConfig {
  fullName: string;
  shortName: string;
  preferredName: string;
  tagline: {
    fr: string;
    en: string;
  };
  heroBio: {
    fr: string;
    en: string;
  };
  motto: {
    fr: string;
    en: string;
  };
  school: string;
  level: {
    fr: string;
    en: string;
  };
  location: string;
  email: string | null; // Remplir avec l'adresse confirmée
  githubUrl: string;
  linkedinUrl: string | null; // À renseigner dès que fourni
  cvFileName: string | null; // e.g. "cv-axelle-hossou.pdf" dans /public
}

export const profileData: ProfileConfig = {
  fullName: "Axelle Kafui HOSSOU",
  shortName: "Axelle",
  preferredName: "Axo",
  tagline: {
    fr: "Développeuse en formation & Créatrice de solutions numériques",
    en: "Developer in training & Digital solutions builder"
  },
  heroBio: {
    fr: "Étudiante en informatique à Epitech Bénin, je conçois des solutions numériques à travers le développement web et logiciel, tout en explorant l'intelligence artificielle et l'analyse de données.",
    en: "Computer science student at Epitech Benin, I build digital solutions through web and software development, while exploring artificial intelligence and data analysis."
  },
  motto: {
    fr: "J'apprends en construisant, je progresse en expérimentant.",
    en: "I learn by building, I grow by experimenting."
  },
  school: "Epitech Bénin",
  level: {
    fr: "Troisième année (Tek 3)",
    en: "3rd Year Student (Tek 3)"
  },
  location: "Cotonou, Bénin",
  email: null, // Axelle peut renseigner son e-mail direct ici
  githubUrl: "https://github.com/Axelle1989",
  linkedinUrl: null, // À compléter avec le profil LinkedIn officiel
  cvFileName: null, // Placez un CV nommé 'cv.pdf' dans le dossier /public quand disponible
};

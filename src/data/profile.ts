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
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  cvFileName: string;
  photoUrl: string;
}

export const profileData: ProfileConfig = {
  fullName: "Axelle Kafui HOSSOU",
  shortName: "Axelle",
  preferredName: "Axo",
  tagline: {
    fr: "Développeuse Web & Analyste de données junior",
    en: "Web Developer & Junior Data Analyst"
  },
  heroBio: {
    fr: "Étudiante en 3e année à Epitech Bénin, passionnée par le développement logiciel, le web et l'analyse de données. J'apprends en construisant des solutions concrètes pour transformer des idées en outils fonctionnels.",
    en: "3rd-year student at Epitech Benin, passionate about software development, web engineering and data analysis. I learn by building concrete solutions to turn ideas into functional digital tools."
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
  location: "Godomey, Calavi / Cotonou, Bénin",
  email: "axo.hossou@epitech.eu",
  phone: "+229 01 47 81 67 78",
  githubUrl: "https://github.com/Axelle1989",
  linkedinUrl: "https://www.linkedin.com/in/axelle-hossou",
  cvFileName: "cv.pdf",
  photoUrl: "/axelle.png",
};

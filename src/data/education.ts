export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "École Normale Supérieure de Marrakech",
    degree: "Master",
    field:
      "Ingénierie Éducative — Technologies Émergentes en Éducation (Information Technology)",
    location: "Marrakech, Maroc",
    start: "2024",
    end: "2026",
    highlights: [
      "Participation à des projets de recherche en IA appliquée à l’éducation.",
      "Développement de simulations éducatives avec Unity et réalité augmentée.",
      "Travaux de groupe sur l’innovation pédagogique et les technologies immersives.",
      "Compétences : Unity 3D/2D, IA éducative, Python, conception d’expériences interactives.",
    ],
  },
  {
    school: "École Normale Supérieure",
    degree: "Licence",
    field: "Sciences Informatiques",
    location: "Marrakech, Maroc",
    start: "2019",
    end: "2022",
    highlights: [
      "Participation à des projets étudiants en programmation (Java, Python, Web).",
      "Encadrement d’ateliers d’initiation pour les nouveaux étudiants.",
      "Membre du club technologique universitaire.",
      "Compétences : Développement logiciel, travail en équipe, algorithmique.",
    ],
  },
  {
    school: "Lycée Al Khawarizmi",
    degree: "Baccalauréat",
    field: "Sciences Physiques et Mathématiques",
    location: "Marrakech, Maroc",
    start: "2018",
    end: "2019",
    highlights: [
      "Baccalauréat en sciences physiques.",
      "Compétences : Travail en équipe, logique scientifique, communication.",
    ],
  },
];

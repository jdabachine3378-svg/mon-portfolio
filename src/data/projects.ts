export type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "TutorIA – Détection d’émotions et d’engagement en classe",
    summary:
      "Système IA capable d’analyser les émotions et l’engagement des élèves à partir d’images et de vidéos. Utilise les datasets FER2013 et DAiSEE avec CNN et MediaPipe pour améliorer l’apprentissage en classe.",
    tags: ["React", "Python", "Deep Learning", "MediaPipe"],
    repo: "https://github.com/jdabachine3378-svg/TutorIA",
  },
  {
    title: "Système Solaire Éducatif 3D",
    summary:
      "Application Unity immersive pour apprendre le système solaire en 3D. Inclut des animations planétaires, des quiz interactifs et une interface éducative.",
    tags: ["Unity", "C#", "3D", "Éducation"],
    link: "https://solar3d.vercel.app",
    repo: "https://github.com/jdabachine3378-svg/solar-system-edu",
  },
  {
    title: "Application Événementielle — Gestion d'Événements",
    summary:
      "Application web Spring Boot + React pour gérer des conférences et événements. Permet la gestion des utilisateurs, tickets, et statistiques en temps réel.",
    tags: ["Spring Boot", "React", "MySQL", "REST API"],
    repo: "https://github.com/jdabachine3378-svg/event-app",
  },
];

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
            "Système IA pour détecter les émotions et l’engagement des élèves à partir d’images (FER2013, CNN, OpenFace).",
        tags: ["React", "Python", "Deep Learning", "MediaPipe"],
        repo: "https://github.com/jdabachine3378-svg/TutorIA",
    },
    {
        title: "Système Solaire Éducatif 3D",
        summary:
            "Application Unity interactive pour l’apprentissage du système solaire avec animations et quiz.",
        tags: ["Unity", "C#", "3D", "Éducation"],
        link: "https://solar3d.vercel.app",
        repo: "https://github.com/jdabachine3378-svg/solar-system-edu",
    },
    {
        title: "EcoShop – Analyse produits durables",
        summary:
            "Application web pour scanner des produits et afficher leur impact environnemental via l’API OpenFoodFacts.",
        tags: ["React", "API REST", "Node.js"],
        repo: "https://github.com/jdabachine3378-svg/ecoshop",
    },
];

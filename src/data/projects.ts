export type Project = {
  title: string;
  period: string;
  tags: string[];
  summary: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "EcoShop",
    period: "2025",
    tags: ["React", "Node", "OpenFoodFacts"],
    summary: "Application de scan produits pour achat durable.",
    repo: "https://github.com/jdabachine3378-svg/ecoshop",
  },
];

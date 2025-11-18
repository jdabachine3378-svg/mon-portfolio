export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  skills?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Attestation de Formation — Bases du Langage Java",
    issuer: "École Normale Supérieure de Marrakech",
    issueDate: "2023-05",
    skills: ["Java", "POO", "Structures de données"],
    image: "/certs/ajava.png",
    imageAlt: "Badge Attestation Java",
    status: "active",
  },
  {
    title: "Attestation — Framework Hibernate JPA",
    issuer: "ENS Marrakech",
    issueDate: "2024-01",
    skills: ["Hibernate", "JPA", "ORM", "Base de données"],
    image: "/certs/hbernate.png",
    imageAlt: "Badge Attestation Hibernate JPA",
    status: "active",
  },
  {
    title: "Attestation de Formation — Développement React.js",
    issuer: "ENS Marrakech",
    issueDate: "2024-06",
    skills: ["React", "JavaScript", "Frontend"],
    image: "/certs/react1.png",
    imageAlt: "Badge Attestation React",
    status: "active",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    issueDate: "2024-02",
    skills: ["Java", "OOP", "Programming Basics"],
    image: "/certs/ajava.png",
    imageAlt: "Attestation Java",
    status: "active",
  },
  {
    title: "Hibernate & JPA",
    issuer: "Spring Academy",
    issueDate: "2024-05",
    skills: ["Hibernate", "ORM", "JPA"],
    image: "/certs/hbernate.png",
    imageAlt: "Attestation Hibernate",
    status: "active",
  },
  {
    title: "React Front-End Development",
    issuer: "Meta (Coursera)",
    issueDate: "2024-07",
    skills: ["React", "Hooks", "Front-End"],
    image: "/certs/react1.png",
    imageAlt: "Attestation React",
    status: "active",
  },
];

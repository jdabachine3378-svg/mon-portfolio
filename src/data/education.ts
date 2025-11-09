export type Education = {
    school: string;
    degree: string;
    field?: string;
    location?: string;
    start: string;
    end: string;
    gpa?: string;
    courses?: string[];
    highlights?: string[];
};

export const education: Education[] = [
    {
        school: "École Normale Supérieure de Marrakech",
        degree: "Master",
        field: "Technologies Émergentes en Éducation",
        location: "Marrakech, Maroc",
        start: "2023-09",
        end: "2025-07",
        courses: ["IA éducative", "Vision par ordinateur", "SIG & IA"],
        highlights: ["Projet TutorIA", "Major de promo"],
    },
];

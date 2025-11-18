import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/app/RootLayout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import EducationPage from "@/pages/Education";
import CertificationsPage from "@/pages/Certifications";
import ContactPage from "@/pages/Contact"; // 👈 ajouté ici

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "education", element: <EducationPage /> },
      { path: "certifications", element: <CertificationsPage /> },
      { path: "contact", element: <ContactPage /> }, // 👈 et ici
    ],
  },
]);

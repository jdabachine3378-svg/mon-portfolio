import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

/**
 * Page d'accueil par défaut du portfolio
 */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      {/* SEO */}
      <Helmet>
        <title>{profile.name} – Portfolio</title>
        <meta name="description" content={profile.about} />
      </Helmet>

      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
        {profile.name}
      </h1>

      {/* Rôle / spécialité */}
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 text-center">
        {profile.role}
      </h2>

      {/* Brève description */}
      <p className="text-center max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
        {profile.about}
      </p>

      {/* Boutons de navigation */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/projects">
          <Button variant="default">Voir mes projets</Button>
        </Link>

        <Link to="/education">
          <Button variant="secondary">Formations</Button>
        </Link>

        <Link to="/certifications">
          <Button variant="outline">Certifications</Button>
        </Link>

        <Link to="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-8 flex gap-4">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            {social.label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} – {profile.name}
      </footer>
    </div>
  );
}

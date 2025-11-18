import { certifications } from "@/data/certifications.";
import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8 py-12">
      <Helmet>
        <title>Certifications — Jamila Dabachine</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-amber-400 mb-4">
        Mes Certifications
      </h1>
      <h2 className="text-2xl font-semibold mb-10 text-white">
        Attestations de Formation
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <article
            key={c.title + c.issueDate}
            className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg border border-amber-300 hover:shadow-amber-400/40 transition-all duration-300"
          >
            {/* Image du badge */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.imageAlt || c.title}
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-gray-400">Pas d’image</div>
              )}
            </div>

            {/* Contenu texte */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-amber-700 mb-1">
                {c.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {c.issuer}
              </p>
              <p className="text-xs text-gray-500 mb-3">
                📅 Obtenue en {new Date(c.issueDate).toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
              </p>

              {/* Compétences */}
              {c.skills && (
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

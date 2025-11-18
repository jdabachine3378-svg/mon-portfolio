import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="min-h-screen px-8 py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Helmet>
        <title>Mes Projets — Jamila Dabachine</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-amber-400 mb-4">
        Mes Projets
      </h1>
      <h2 className="text-2xl font-semibold mb-10 text-white">
        Derniers Projets Développés
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-400/30 transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-amber-700">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4">{p.summary}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-600 font-semibold underline"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-600 font-semibold underline"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

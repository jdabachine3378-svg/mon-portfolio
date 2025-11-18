import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-8 py-12">
      <Helmet>
        <title>Parcours — Jamila Dabachine</title>
      </Helmet>

      {/* 🌟 Titre principal */}
      <h1 className="text-4xl font-extrabold text-amber-700 mb-10 text-center">
        Expériences Professionnelles
      </h1>

      {/* 🧩 Liste d’expériences */}
      <div className="max-w-4xl mx-auto grid gap-8">

        {/* 🏢 Expérience 1 */}
        <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-amber-200 dark:border-gray-700 p-6 hover:shadow-amber-400/30 transition-shadow">
          <h2 className="text-2xl font-semibold text-amber-800 mb-2">
            Stagiaire — Société STE AKRAM INFO
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Juil. 2022 – Aujourd’hui · 3 ans 5 mois · Marrakech, Maroc
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Durant mon stage à la société <strong>STE AKRAM INFO</strong>,
            j’ai appris les bases de la création de sites web, la gestion des bases
            de données et la collaboration en équipe. J’ai participé à
            l’enregistrement et au suivi des ventes, ce qui m’a permis de renforcer
            mes compétences techniques et organisationnelles.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
              Travail en équipe
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
              Développement Web
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
              Gestion de données
            </span>
          </div>
        </article>

        {/* 🧑‍🏫 Expérience 2 */}
        <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-amber-200 dark:border-gray-700 p-6 hover:shadow-amber-400/30 transition-shadow">
          <h2 className="text-2xl font-semibold text-amber-800 mb-2">
            Stagiaire — Enseignante en Informatique
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Fév. 2022 – Juin 2022 · 5 mois · Hybride (École publique et privée)
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Stage d’enseignement en informatique dans des établissements publics
            et privés. J’ai pu préparer et animer des séances de cours en bureautique,
            algorithmique et programmation (Scratch, Python, HTML).
            J’ai aussi conçu des supports pédagogiques numériques adaptés aux élèves
            et accompagné les apprenants dans leurs projets pratiques.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
              Pédagogie Numérique
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
              Programmation
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
              Scratch / Python / HTML
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

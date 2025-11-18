import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
      <Helmet>
        <title>Jamila Dabachine — Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Jamila Dabachine — Étudiante Master Technologies Émergentes en Éducation."
        />
      </Helmet>

      {/* 🖼️ Photo de profil */}
      <div className="w-60 h-72 rounded-3xl overflow-hidden border-4 border-amber-500 shadow-xl mb-6">
        <img
          src="/profile/jamila-db.webp"
          alt="Photo de Jamila Dabachine"
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* 🧑‍💻 Nom et rôle */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Jamila Dabachine
      </h1>
      <p className="mt-2 text-lg text-amber-600 font-semibold">
        Étudiante Master — Technologies Émergentes en Éducation
      </p>

      {/* 🔘 Boutons */}
      <div className="mt-6 flex gap-6">
        <Link
          to="/projects"
          className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          📁 Voir mes Projets
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          📩 Me Contacter
        </Link>
      </div>

      {/* 🏅 Certifications */}
      <div className="mt-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          <img
            src="/certs/react1.png"
            alt="React Certification"
            className="w-24 h-24 rounded-xl border shadow-md hover:scale-105 transition-transform duration-200"
          />
          <img
            src="/certs/ajava.png"
            alt="Java Certification"
            className="w-24 h-24 rounded-xl border shadow-md hover:scale-105 transition-transform duration-200"
          />
          <img
            src="/certs/hbernate.png"
            alt="Hibernate Certification"
            className="w-24 h-24 rounded-xl border shadow-md hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>
    </section>
  );
}

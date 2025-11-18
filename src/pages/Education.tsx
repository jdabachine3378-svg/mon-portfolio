import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

export default function EducationPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8 py-12">
      <Helmet>
        <title>Formations — Jamila Dabachine</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-amber-400 mb-4">
        Formations Académiques
      </h1>
      <h2 className="text-2xl font-semibold mb-10 text-white">
        Parcours Éducatif
      </h2>

      <div className="max-w-4xl mx-auto relative border-l border-amber-400/30 pl-6">
        {education.map((e) => (
          <div
            key={e.school + e.start}
            className="mb-10 relative bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-400/30 transition-shadow duration-300"
          >
            {/* Point timeline */}
            <span className="absolute -left-3 top-6 w-5 h-5 bg-amber-500 rounded-full border-4 border-gray-900" />

            <h3 className="text-xl font-bold text-amber-700">
              {e.degree} — {e.field}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {e.school} ({e.location})
            </p>
            <p className="text-sm text-gray-600 mb-4 font-medium">
              📅 {e.start} → {e.end}
            </p>

            {e.highlights?.length && (
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

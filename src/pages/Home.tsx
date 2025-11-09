import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <section className="grid gap-6 md:grid-cols-2 items-center min-h-[80vh] px-6 md:px-12">
            <Helmet>
                <title>{profile.name} — Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio de Jamila Dabachine : projets IA, analyse d’images, DevOps et développement éducatif."
                />
            </Helmet>

            {/* 🧩 Colonne texte */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    {profile.name}
                </h1>

                <p className="mt-2 text-xl text-blue-600 font-semibold">
                    {profile.role}
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {profile.about}
                </p>

                {/* 🔗 Liens navigation */}
                <div className="mt-6 flex gap-4 text-blue-600">
                    <Link to="/projects" className="underline hover:text-blue-800">
                        Voir les projets
                    </Link>
                    <Link to="/contact" className="underline hover:text-blue-800">
                        Contact
                    </Link>
                </div>

                {/* 🎓 Badges */}
                <div
                    className="mt-6 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-label="badges de parcours"
                >
                    <span className="rounded-full border px-3 py-1">Master IA (2025)</span>
                    <span className="rounded-full border px-3 py-1">DevSecOps</span>
                    <span className="rounded-full border px-3 py-1">AWS SAA</span>
                    <span className="rounded-full border px-3 py-1">Android Studio</span>
                </div>
            </div>

            {/* 📸 Colonne image + Certifications */}
            <div className="space-y-8">
                {/* 🖼️ Image de profil */}
                <div className="aspect-square rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg">
                    <img
                        src="/certs/aws-saa.webp"
                        alt="Photo de profil Jamila Dabachine"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* 🏅 Certifications */}
                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                    <div className="flex flex-wrap gap-4">
                        <img
                            src="/certs/cncf-cka.webp"
                            alt="CNCF Certified Kubernetes Administrator"
                            className="w-24 h-24 object-cover rounded-lg border hover:scale-105 hover:shadow-lg transition-transform duration-200"
                        />
                        <img
                            src="/certs/gcp-pca.webp"
                            alt="Google Cloud Professional Architect"
                            className="w-24 h-24 object-cover rounded-lg border hover:scale-105 hover:shadow-lg transition-transform duration-200"
                        />
                    </div>
                </section>
            </div>
        </section>
    );
}

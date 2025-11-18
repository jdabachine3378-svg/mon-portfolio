import { contact } from "@/data/contact";
import { Helmet } from "react-helmet-async";
import { Mail, Github, Linkedin } from "lucide-react"; // icônes stylées

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8 py-16 flex flex-col items-center">
      <Helmet>
        <title>Contact — Jamila Dabachine</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-amber-400 mb-4">
        Contactez-moi
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Vous pouvez me contacter via email ou sur mes réseaux professionnels 👇
      </p>

      <div className="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
        {/* 📧 Email */}
        <a
          href={`mailto:${contact.email}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-2xl shadow-md hover:shadow-amber-400/40 transition-all"
        >
          <Mail className="w-10 h-10 text-amber-500 mb-3" />
          <h3 className="text-lg font-bold mb-1">Email</h3>
          <p className="text-sm">{contact.email}</p>
        </a>

        {/* 💼 LinkedIn */}
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-2xl shadow-md hover:shadow-amber-400/40 transition-all"
        >
          <Linkedin className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
          <p className="text-sm">linkedin.com/in/dabachine-jamila</p>
        </a>

        {/* 🧠 GitHub */}
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-2xl shadow-md hover:shadow-amber-400/40 transition-all"
        >
          <Github className="w-10 h-10 text-gray-800 mb-3" />
          <h3 className="text-lg font-bold mb-1">GitHub</h3>
          <p className="text-sm">jdabachine3378-svg</p>
        </a>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        © 2025 — Jamila Dabachine
      </footer>
    </section>
  );
}

import { education } from "@/data/education";

export default function EducationPage() {
    return (
        <section className="grid gap-6">
            <h2 className="text-2xl font-semibold">Formations</h2>
            <ol className="relative border-s">
                {education.map((e) => (
                    <li key={e.school + e.start} className="ms-6 pb-6">
                        <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-primary" />
                        <h3 className="font-semibold">
                            {e.degree} {e.field ? `- ${e.field}` : ""} @ {e.school}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {e.start} → {e.end} {e.location ? `(${e.location})` : ""}
                        </p>
                        {e.courses?.length ? (
                            <p className="text-sm mt-1">
                                Cours : {e.courses.slice(0, 5).join(", ")}
                            </p>
                        ) : null}
                        {e.highlights?.length ? (
                            <ul className="list-disc ms-5 mt-1 text-sm">
                                {e.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>
                        ) : null}
                    </li>
                ))}
            </ol>
        </section>
    );
}

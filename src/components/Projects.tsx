import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import { projects, type LocalizedText, type ProjectTag } from "@/data/projects";
import styles from "./Projects.module.css";

type Filter = "all" | ProjectTag;

const FILTERS: { id: Filter; label: LocalizedText }[] = [
    { id: "all", label: { en: "All", mn: "Бүгд" } },
    {
        id: "interior-painting",
        label: { en: "Interior design", mn: "Интерьер дизайн" },
    },
    {
        id: "plaster-performance",
        label: { en: "Interior fit-out", mn: "Дотоод засал" },
    },
    {
        id: "plaster-performance",
        label: { en: "Solutions", mn: "Шийдэл" },
    },
];

export default function Projects() {
    const { language } = useLanguage();
    const [filter, setFilter] = useState<Filter>("all");

    const withNumberSpacing = (text: string) => text.replace(/(\d)(\p{L})/gu, "$1 $2");

    const filtered = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter((project) => project.tags?.includes(filter));
    }, [filter]);

    return (
        <section
            id="projects"
            className="relative w-full overflow-hidden bg-[#222222] text-[#fffdef] scroll-mt-24"
        >
            <div className="w-full px-6 py-16 flex flex-col items-center text-center">
                <p className="text-[11px] uppercase tracking-[0.55em] text-[#fffdef]/70">
                    {language === "mn" ? "Гүйцэтгэсэн ажил" : "Completed projects"}
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-light leading-tight text-[#fffdef]">
                    {language === "mn"
                        ? "БИДНИЙ ХИЙЖ ГҮЙЦЭТГЭСЭН ТӨСЛҮҮД."
                        : "PROJECTS WE’VE COMPLETED."}
                </h2>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {FILTERS.map((item) => {
                        const isActive = item.id === filter;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setFilter(item.id)}
                                className={`border px-4 py-2 text-sm transition ${
                                    isActive
                                        ? "border-[#444444] bg-[#444444] text-[#fffdef] shadow-sm hover:bg-[#989898] hover:border-[#989898]"
                                        : "border-[#444444] bg-transparent text-[#fffdef] hover:bg-[#444444]/80 hover:border-[#989898]"
                                }`}
                            >
                                {item.label[language]}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="px-6 pb-16">
                <div className="grid w-full max-w-6xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project) => {
                        const durationStat = project.stats.find(
                            (stat) =>
                                stat.label.en === "Duration" || stat.label.mn === "Гүйцэтгэсэн хугацаа",
                        );
                        const durationText = durationStat?.value[language];
                        const formattedDuration = durationText ? withNumberSpacing(durationText) : null;

                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className={styles.galleryItem}
                            >
                                <Image
                                    src={project.cover}
                                    alt={project.title[language]}
                                    fill
                                    sizes="(min-width: 1024px) 30vw, 100vw"
                                    className="object-cover object-center"
                                />

                                <div className={styles.galleryCaption}>
                                    {/* 1 — Байршил */}
                                    <p className="text-sm text-white/85 mb-3">
                                        {project.location[language]}
                                    </p>

                                    {/* 2 — Төслийн нэр */}
                                    <p className="text-lg font-semibold leading-snug mb-4">
                                        {project.title[language]}
                                    </p>

                                    {/* 3 — Гүйцэтгэсэн хугацаа */}
                                    {formattedDuration && (
                                        <p className="text-sm text-white/70">
                                            {formattedDuration}
                                        </p>
                                    )}
                                </div>

                            </Link>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <p className="mt-8 text-center text-sm text-[#fffdef]/70">
                        {language === "mn"
                            ? "Энэ шүүлтүүрт тохирох төсөл алга."
                            : "No projects match this filter."}
                    </p>
                )}
            </div>
        </section>
    );
}

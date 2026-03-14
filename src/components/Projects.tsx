"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
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
];

export default function Projects() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [filter, setFilter] = useState<Filter>("all");

    const isDark = theme === "dark";

    const filtered = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter((project) => project.tags?.includes(filter));
    }, [filter]);

    return (
        <section
            id="projects"
            className={`relative w-full overflow-hidden scroll-mt-24 ${
                isDark ? "bg-[#222222] text-[#fffdef]" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
            <div className="flex w-full flex-col items-center px-6 py-16 text-center">
                <h2
                    className={`mt-3 text-3xl font-light leading-tight md:text-4xl ${
                        isDark ? "text-[#fffdef]" : "text-[#111111]"
                    }`}
                >
                    {language === "mn"
                        ? "БИДНИЙ ХИЙЖ ГҮЙЦЭТГЭСЭН ТӨСЛҮҮД."
                        : "PROJECTS WE’VE COMPLETED."}
                </h2>

                {/* ШҮҮЛТҮҮР ХЭРЭГТЭЙ БОЛ ДАРАА НЬ АСААНА
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
                                        ? isDark
                                            ? "border-[#444444] bg-[#444444] text-[#fffdef] shadow-sm hover:bg-[#989898] hover:border-[#989898]"
                                            : "border-black/10 bg-[#f4f1eb] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1]"
                                        : isDark
                                            ? "border-[#444444] bg-transparent text-[#fffdef] hover:bg-[#444444]/80 hover:border-[#989898]"
                                            : "border-black/10 bg-transparent text-[#111111] hover:bg-black/5"
                                }`}
                            >
                                {item.label[language]}
                            </button>
                        );
                    })}
                </div>
                */}
            </div>

            <div className="px-6 pb-24">
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project) => {
                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className={styles.galleryItem}
                                style={{
                                    background: isDark ? "#111111" : "#e3dfd7",
                                    boxShadow: isDark
                                        ? "none"
                                        : "0 14px 36px rgba(0,0,0,0.07)",
                                }}
                            >
                                <Image
                                    src={project.cover}
                                    alt={project.title[language]}
                                    fill
                                    sizes="(min-width: 1024px) 30vw, 100vw"
                                    className="object-cover object-center"
                                />

                                <div
                                    className={styles.galleryCaption}
                                    style={{
                                        background: isDark
                                            ? "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.12), transparent)"
                                            : "linear-gradient(to top, rgba(244,241,235,0.84), rgba(244,241,235,0.18), transparent)",
                                    }}
                                >
                                    <h3
                                        className="text-lg font-medium"
                                        style={{ color: isDark ? "#ffffff" : "#111111" }}
                                    >
                                        {project.title[language]}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <p
                        className="mt-8 text-center text-sm"
                        style={{ color: isDark ? "rgba(255,253,239,0.7)" : "rgba(17,17,17,0.56)" }}
                    >
                        {language === "mn"
                            ? "Энэ шүүлтүүрт тохирох төсөл алга."
                            : "No projects match this filter."}
                    </p>
                )}
            </div>
        </section>
    );
}
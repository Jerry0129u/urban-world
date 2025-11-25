import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

const FILTERS = ["All", "Interior painting", "Plaster performance"] as const;
type Filter = (typeof FILTERS)[number];

export default function Projects() {
    const [filter, setFilter] = useState<Filter>("All");

    const filtered = useMemo(() => {
        if (filter === "All") return projects;
        return projects.filter((project) => project.tags?.includes(filter));
    }, [filter]);

    return (
        <section
            id="projects"
            className="relative w-full overflow-hidden bg-white text-slate-900 scroll-mt-24"
        >
            <div className="w-full px-6 py-16 flex flex-col items-center text-center">
                <p className="text-[11px] uppercase tracking-[0.55em] text-slate-500">
                    Projects
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-light leading-tight text-[#0D0E11]">
                    Rooms, lobbies, and studios we’ve finished.
                </h2>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {FILTERS.map((item) => {
                        const isActive = item === filter;
                        return (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setFilter(item)}
                                className={`rounded-full border px-4 py-2 text-sm transition ${
                                    isActive
                                        ? "border-[#0D0E11] bg-[#0D0E11] text-white shadow-sm"
                                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                                }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="px-6 pb-16">
                <div className="grid w-full max-w-6xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className={styles.galleryItem}
                        >
                            <Image
                                src={project.cover}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 30vw, 100vw"
                                className="object-cover object-center"
                            />
                            <div className={styles.galleryCaption}>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-white/80">
                                    {project.location}
                                </p>
                                <p className={styles.galleryCaptionTitle}>{project.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {filtered.length === 0 && (
                    <p className="mt-8 text-center text-sm text-slate-500">No projects match this filter.</p>
                )}
            </div>
        </section>
    );
}

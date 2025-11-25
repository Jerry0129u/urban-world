import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { type Project, type ShotLayout, projectCategories, projects } from "@/data/projects";
import styles from "./Projects.module.css";

const layoutClassMap: Record<ShotLayout, string> = {
    wide: styles.galleryItemWide,
    tall: styles.galleryItemTall,
    square: styles.galleryItemSquare,
};

export default function Projects() {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(projectCategories[0]?.id ?? null);
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

    const activeCategory = useMemo(
        () => projectCategories.find((cat) => cat.id === activeCategoryId) ?? null,
        [activeCategoryId]
    );

    const categoryProjects = useMemo(() => {
        if (!activeCategory) return [];
        return activeCategory.projectIds
            .map((id) => projects.find((project) => project.id === id))
            .filter((project): project is Project => Boolean(project));
    }, [activeCategory]);

    const activeProject = useMemo(
        () => projects.find((project) => project.id === activeProjectId) ?? null,
        [activeProjectId]
    );

    useEffect(() => {
        if (!activeProject) return;
        const { body } = document;
        const previous = body.style.overflow;
        body.style.overflow = "hidden";
        return () => {
            body.style.overflow = previous;
        };
    }, [activeProject]);

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
            </div>

            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 px-6 pb-10">
                {projectCategories.map((category) => {
                    const heroProject = projects.find((p) => p.id === category.projectIds[0]);
                    const isActive = activeCategoryId === category.id;
                    return (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => setActiveCategoryId(isActive ? null : category.id)}
                            className={`group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                                category.accent ?? "from-white via-slate-50 to-slate-100"
                            } shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            {heroProject ? (
                                <Image
                                    src={heroProject.cover}
                                    alt={category.title}
                                    fill
                                    className="object-cover object-center opacity-70 transition-all duration-[1400ms] group-hover:scale-105"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-white" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-left">
                                <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                                    Category
                                </p>
                                <h3 className="text-xl font-light md:text-2xl text-white">{category.title}</h3>
                                <p className="text-sm text-white/80">{category.summary}</p>
                                <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                                    {category.projectIds.length} projects
                                </p>
                            </div>
                            <div
                                className={`
                                    pointer-events-none absolute left-4 top-4 max-w-[260px]
                                    translate-y-4 translate-x-4 opacity-0
                                    rounded-xl bg-white/85 p-4 text-[#0D0E11] shadow-xl backdrop-blur-xl
                                    transition-all duration-500 group-hover:pointer-events-auto
                                    group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100
                                `}
                            >
                                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                    open set
                                </p>
                                <p className="text-xs text-slate-600">Tap to reveal the projects in this category.</p>
                            </div>
                            <div
                                className={`absolute inset-0 border-2 transition duration-300 ${
                                    isActive ? "border-white/70" : "border-white/0"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>

            <div className="px-6 pb-16">
                {activeCategory ? (
                    <div className="container mx-auto flex flex-col gap-6">
                        <div className="flex flex-col items-start gap-2">
                            <p className="text-xs uppercase tracking-[0.45em] text-slate-500">
                                {activeCategory.title}
                            </p>
                            <h3 className="text-2xl font-light text-[#0D0E11]">Projects in this category</h3>
                            <p className="text-sm text-slate-600 max-w-2xl">{activeCategory.summary}</p>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                            {categoryProjects.map((project) => (
                                <button
                                    key={project?.id}
                                    type="button"
                                    onClick={() => project && setActiveProjectId(project.id)}
                                    className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={project?.cover ?? "/apartment-1.jpg"}
                                            alt={project?.title ?? "Project"}
                                            fill
                                            className="object-cover object-center transition duration-700 group-hover:scale-105"
                                            sizes="(min-width: 1024px) 30vw, 100vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    </div>
                                    <div className="flex flex-col gap-1 p-4">
                                        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
                                            {project?.location}
                                        </p>
                                        <h4 className="text-lg font-light text-[#0D0E11]">{project?.title}</h4>
                                        <p className="text-sm text-slate-600 line-clamp-2">{project?.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-sm text-slate-600">Tap a category to view the projects within it.</p>
                )}
            </div>

            <div
                className={`${styles.overlay} ${activeProject ? styles.overlayVisible : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label={activeProject ? `${activeProject.title} gallery` : undefined}
            >
                {activeProject && (
                    <div className={styles.overlayCard}>
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setActiveProjectId(null)}
                            aria-label="Close gallery"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6 6l12 12m0-12L6 18"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <div className={styles.overlayInfo}>
                            <div className={styles.overlayTitleRow}>
                                <h3 className="text-2xl font-light">{activeProject.title}</h3>
                                <Link href={`/projects/${activeProject.id}`} className={styles.fullProjectLink}>
                                    Full project →
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600">{activeProject.description}</p>
                        <div className={styles.overlayGallery}>
                            {activeProject.shots.map((shot) => (
                                <div
                                    key={`${activeProject.id}-${shot.src}`}
                                    className={`${styles.galleryItem} ${shot.layout ? layoutClassMap[shot.layout] : ""}`}
                                >
                                    <Image
                                        src={shot.src}
                                        alt={shot.alt}
                                        fill
                                        sizes="(min-width: 1024px) 40vw, 100vw"
                                        className="object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

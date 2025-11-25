import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { type ShotLayout, projects } from "@/data/projects";
import Comparison from "./Comparison";
import styles from "./Projects.module.css";

const layoutClassMap: Record<ShotLayout, string> = {
    wide: styles.galleryItemWide,
    tall: styles.galleryItemTall,
    square: styles.galleryItemSquare,
};

export default function Projects() {
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const overlayCardRef = useRef<HTMLDivElement | null>(null);
    const activeProject = useMemo(
        () => projects.find((project) => project.id === activeProjectId) ?? null,
        [activeProjectId]
    );

    useEffect(() => {
        if (!activeProjectId) return;
        const { body } = document;
        const previous = body.style.overflow;
        body.style.overflow = "hidden";
        return () => {
            body.style.overflow = previous;
        };
    }, [activeProjectId]);

    useEffect(() => {
        if (!activeProject) return;
        overlayRef.current?.scrollTo({ top: 0 });
        overlayCardRef.current?.scrollTo({ top: 0 });
    }, [activeProject]);

    return (
        <>
            <section id="projects" className="room-section relative overflow-hidden text-slate-900 scroll-mt-24">
                <div className="container mx-auto flex w-full flex-col items-center gap-10 px-4 py-12 text-center lg:py-16">
                    <div className="flex flex-col gap-2">
                        <p className="text-xs uppercase tracking-[0.6em] text-[#001517]/60">walk the work</p>
                        <h2 className="text-3xl font-light md:text-5xl text-[#001517]">Rooms in sequence.</h2>
                    </div>
                    <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project) => (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => setActiveProjectId(project.id)}
                                className={`${styles.albumButton} group flex flex-col gap-4 bg-white p-5 text-left text-[#001517] border border-[#0015171f] transition duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001517]/20`}
                            >
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-center transition duration-700 group-hover:scale-105"
                                        sizes="(min-width: 1024px) 30vw, 100vw"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#001517]/60">{project.location}</p>
                                    <h3 className="text-2xl font-light text-[#001517]">{project.title}</h3>
                                    <p className="text-sm text-[#001517]/75">{project.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <p className="text-xs uppercase tracking-[0.6em] text-[#001517]/50">tap an album to open the full set ↓</p>
                    <Comparison variant="embedded" className="mt-4" />
                </div>
            </section>
            <div
                className={`${styles.overlay} ${activeProject ? styles.overlayVisible : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label={activeProject ? `${activeProject.title} gallery` : undefined}
                ref={overlayRef}
            >
                {activeProject && (
                    <div className={styles.overlayCard} ref={overlayCardRef}>
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
                                <Link
                                    href={`/projects/${activeProject.id}`}
                                    className={styles.fullProjectLink}
                                    onClick={() => setActiveProjectId(null)}
                                >
                                    Full project →
                                </Link>
                            </div>
                        </div>
                        <div className={styles.overlayGallery}>
                            {activeProject.shots.map((shot, index) => (
                                <Link
                                    key={`${activeProject.id}-${shot.src}`}
                                    href={`/projects/${activeProject.id}?slide=${index}`}
                                    className={`${styles.galleryItem} ${shot.layout ? layoutClassMap[shot.layout] : ""}`}
                                    onClick={() => setActiveProjectId(null)}
                                >
                                    <Image
                                        src={shot.src}
                                        alt={shot.alt}
                                        fill
                                        sizes="(min-width: 1024px) 40vw, 100vw"
                                        className="object-cover object-center"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

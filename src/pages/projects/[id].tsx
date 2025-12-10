import Head from "next/head";
import Image from "next/image";
import { type GetStaticPaths, type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Comparison from "@/components/Comparison";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { type BeforeAfter, type LocalizedShot, type Project, projects } from "@/data/projects";
import styles from "./ProjectDetail.module.css";

type ProjectDetailProps = {
    project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: projects.map((project) => ({ params: { id: project.id } })),
    fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params }) => {
    const project = projects.find((item) => item.id === params?.id);
    if (!project) {
        return { notFound: true };
    }

    return {
        props: {
            project,
        },
    };
};

export default function ProjectDetail({
    project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { language } = useLanguage();
    type ProjectSlide = { projectId: string; shot: LocalizedShot };

    const sliderShots = useMemo<ProjectSlide[]>(() => {
        return projects
            .map((item) => {
                const primary = item.cover ?? item.gallery?.[0]?.src ?? item.shots?.[0]?.src;
                if (!primary) return null;
                return {
                    projectId: item.id,
                    shot: {
                        src: primary,
                        alt: { en: item.title.en, mn: item.title.mn },
                    },
                };
            })
            .filter((item): item is ProjectSlide => Boolean(item));
    }, []);

    const initialIndex = useMemo(() => {
        const found = sliderShots.findIndex((slide) => slide.projectId === project.id);
        return found >= 0 ? found : 0;
    }, [project.id, sliderShots]);

    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        setIndex(initialIndex);
    }, [initialIndex]);

    const slideCount = sliderShots.length;
    const safeIndex = slideCount > 0 ? ((index % slideCount) + slideCount) % slideCount : 0;

    const activeProject = useMemo(
        () => {
            const activeId = slideCount > 0 ? sliderShots[safeIndex].projectId : project.id;
            return projects.find((item) => item.id === activeId) ?? project;
        },
        [project, safeIndex, slideCount, sliderShots],
    );

    const galleryShots = useMemo<LocalizedShot[]>(() => {
        const seen = new Set<string>();
        const combined = [...(activeProject.gallery ?? []), ...(activeProject.shots ?? [])];
        const deduped = combined.filter((shot) => {
            if (seen.has(shot.src)) return false;
            seen.add(shot.src);
            return true;
        });

        if (deduped.length === 0) {
            return [
                {
                    src: activeProject.cover,
                    alt: {
                        en: activeProject.title.en,
                        mn: activeProject.title.mn,
                    },
                },
            ];
        }

        return deduped.slice(0, 6);
    }, [activeProject]);

    const computedBeforeAfter: BeforeAfter | null = useMemo(() => {
        if (activeProject.beforeAfter) return activeProject.beforeAfter;
        if (galleryShots.length < 2) return null;
        const beforeShot = galleryShots[0];
        const afterShot = galleryShots[1];
        return {
            before: {
                image: beforeShot.src,
                title: beforeShot.alt,
                detail: { en: "", mn: "" },
            },
            after: {
                image: afterShot.src,
                title: afterShot.alt,
                detail: { en: "", mn: "" },
            },
        };
    }, [activeProject.beforeAfter, galleryShots]);

    const slides = sliderShots;

    const copy = {
        selection: { en: "Select a project", mn: "Төсөл сонгох" },
        galleryAria: { en: "Project images", mn: "Төслийн зургууд" },
        sliderLabel: { en: "Project selection", mn: "Төсөл сонголт" },
        previous: { en: "Previous", mn: "Өмнөх" },
        next: { en: "Next", mn: "Дараах" },
        bottom: {
            title: { en: "Project title", mn: "Төслийн нэр" },
            location: { en: "Location", mn: "Байршил" },
            completed: { en: "Completed", mn: "Гүйцэтгэсэн хугацаа" },
        },
        comingSoon: { en: "Coming soon", mn: "Тун удахгүй" },
    };

    const formatCompletion = (target: Project) => {
        if (!target.completed) return copy.comingSoon[language];
        const monthIndex = Math.max(0, Math.min(11, Number(target.completed.month) - 1));
        const monthNames: Record<Language, string[]> = {
            en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            mn: [
                "1-р сар",
                "2-р сар",
                "3-р сар",
                "4-р сар",
                "5-р сар",
                "6-р сар",
                "7-р сар",
                "8-р сар",
                "9-р сар",
                "10-р сар",
                "11-р сар",
                "12-р сар",
            ],
        };
        const month = monthNames[language][monthIndex] ?? target.completed.month;
        return `${target.completed.year} · ${month}`;
    };

    const galleryLayoutClass = (shotIndex: number) => {
        if (shotIndex === 0) return styles.galleryItemHero;
        if (shotIndex === 1 || shotIndex === 2) return styles.galleryItemHalf;
        return styles.galleryItemThird;
    };

    const prevIndex = slideCount > 0 ? (safeIndex - 1 + slideCount) % slideCount : 0;
    const nextIndex = slideCount > 0 ? (safeIndex + 1) % slideCount : 0;

    const slideState = (slideIndex: number) => {
        if (slideIndex === safeIndex) return "active";
        if (slideIndex === prevIndex) return "prev";
        if (slideIndex === nextIndex) return "next";
        return "idle";
    };

    const [showComparison, setShowComparison] = useState(false);
    const hasComparison = Boolean(computedBeforeAfter);

    useEffect(() => {
        setShowComparison(false);
    }, [activeProject.id, computedBeforeAfter]);

    useEffect(() => {
        if (!showComparison) return undefined;
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setShowComparison(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [showComparison]);

    return (
        <>
            <Head>
                <title>{`${activeProject.title[language]} — Urban World`}</title>
                <meta name="description" content={activeProject.description[language]} />
            </Head>
            <div className={styles.page}>
                <Navbar />
                <div className={styles.backdrop} aria-hidden="true" />
                <main className={styles.content}>
                    <div className={styles.metaRow}>
                        <div className={styles.metaCard}>
                            <p className={styles.metaLabel}>{copy.bottom.title[language]}</p>
                            <p className={styles.metaValue}>{activeProject.title[language]}</p>
                        </div>
                        <div className={styles.metaCard}>
                            <p className={styles.metaLabel}>{copy.bottom.location[language]}</p>
                            <p className={styles.metaValue}>{activeProject.location[language]}</p>
                        </div>
                        <div className={styles.metaCard}>
                            <p className={styles.metaLabel}>{copy.bottom.completed[language]}</p>
                            <p className={styles.metaValue}>{formatCompletion(activeProject)}</p>
                        </div>
                    </div>

                    <section className={styles.gallerySection} aria-label={copy.galleryAria[language]}>
                        <div className={styles.galleryGrid}>
                            {galleryShots.map((shot, shotIndex) => {
                                const isHero = shotIndex === 0;
                                return (
                                    <figure
                                        key={`${activeProject.id}-${shot.src}-${shotIndex}`}
                                        className={`${styles.galleryItem} ${galleryLayoutClass(shotIndex)}`}
                                    >
                                        <Image
                                            src={shot.src}
                                            alt={shot.alt[language]}
                                            fill
                                            sizes="(min-width: 1200px) 1100px, (min-width: 768px) 92vw, 100vw"
                                            className={styles.galleryImage}
                                            priority={isHero}
                                        />
                                        <figcaption className={styles.caption}>{shot.alt[language]}</figcaption>
                                        {isHero && hasComparison && (
                                            <button
                                                type="button"
                                                className={styles.comparisonButton}
                                                onClick={() => setShowComparison(true)}
                                                aria-pressed={showComparison}
                                                aria-label={language === "mn" ? "Өмнө ба дараах харьцуулах" : "Open comparison"}
                                            >
                                                ↔ {language === "mn" ? "Харьцуулах" : "Compare"}
                                            </button>
                                        )}
                                    </figure>
                                );
                            })}
                        </div>
                    </section>

                    <section className={styles.sliderSection} aria-label={copy.sliderLabel[language]}>
                        <div className={styles.selectorHeader}>
                            <p className={styles.selectorLabel}>{copy.selection[language]}</p>
                            <p className={styles.selectorHint}>{activeProject.location[language]}</p>
                        </div>
                        <div className={styles.sliderShell}>
                            <div className={styles.sliderTrack}>
                                {slides.map((slide, slideIndex) => {
                                    const state = slideState(slideIndex);
                                    const isActive = state === "active";
                                    return (
                                        <article
                                            key={`${slide.projectId}-${slide.shot.src}-${slideIndex}`}
                                            className={`${styles.slide} ${styles[`slide_${state}`]}`}
                                            onClick={() => setIndex(slideIndex)}
                                            role="button"
                                            tabIndex={0}
                                            aria-pressed={isActive}
                                            onKeyDown={(event) => {
                                                if (event.key === "Enter" || event.key === " ") {
                                                    event.preventDefault();
                                                    setIndex(slideIndex);
                                                }
                                            }}
                                        >
                                            <div className={styles.slideImage}>
                                                <Image
                                                    src={slide.shot.src}
                                                    alt={slide.shot.alt[language]}
                                                    fill
                                                    sizes="(min-width: 1100px) 1100px, (min-width: 768px) 92vw, 100vw"
                                                    className={styles.image}
                                                    priority={slideIndex === 0}
                                                />
                                            </div>
                                            <div className={styles.overlay}>
                                                <p className={styles.slideCaption}>{slide.shot.alt[language]}</p>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            <div className={styles.controls}>
                                <button
                                    type="button"
                                    onClick={() => setIndex(prevIndex)}
                                    className={styles.controlButton}
                                    disabled={slides.length <= 1}
                                    aria-label={language === "mn" ? "Өмнөх зураг" : "Previous image"}
                                >
                                    <span aria-hidden="true">←</span> {copy.previous[language]}
                                </button>
                                <div className={styles.progress}>
                                    {slides.map((slide, dotIndex) => (
                                        <button
                                            key={`progress-${slide.projectId}-${dotIndex}`}
                                            type="button"
                                            className={`${styles.progressDot} ${dotIndex === safeIndex ? styles.progressDotActive : ""}`}
                                            aria-label={
                                                language === "mn"
                                                    ? `${dotIndex + 1}-р зураг руу очих`
                                                    : `Jump to slide ${dotIndex + 1}`
                                            }
                                            onClick={() => setIndex(dotIndex)}
                                        />
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIndex(nextIndex)}
                                    className={styles.controlButton}
                                    disabled={slides.length <= 1}
                                    aria-label={language === "mn" ? "Дараагийн зураг" : "Next image"}
                                >
                                    {copy.next[language]} <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {hasComparison && showComparison && computedBeforeAfter && (
                        <div className={styles.comparisonOverlay} role="dialog" aria-label={language === "mn" ? "Өмнө ба дараах харьцуулалт" : "Before and after comparison"}>
                            <div className={styles.comparisonCard}>
                                <div className={styles.overlayHeader}>
                                    <p className={styles.overlayTitle}>
                                        {language === "mn" ? "Өмнө / Дараа" : "Before / After"}
                                    </p>
                                    <button
                                        type="button"
                                        className={styles.overlayClose}
                                        onClick={() => setShowComparison(false)}
                                        aria-label={language === "mn" ? "Харьцуулалтыг хаах" : "Close comparison"}
                                    >
                                        {language === "mn" ? "Хаах" : "Close"}
                                    </button>
                                </div>
                                <Comparison beforeAfter={computedBeforeAfter} />
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}

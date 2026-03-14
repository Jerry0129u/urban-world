import Head from "next/head";
import Image from "next/image";
import {
    type GetStaticPaths,
    type GetStaticProps,
    type InferGetStaticPropsType,
} from "next";
import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Comparison from "@/components/Comparison";
import ComparisonGrid from "@/components/ComparisionGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import {
    type BeforeAfter,
    type LocalizedShot,
    type Project,
    projects,
} from "@/data/projects";
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
    const { theme } = useTheme();
    const isDark = theme === "dark";

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

    const activeProject = useMemo(() => {
        const activeId = slideCount > 0 ? sliderShots[safeIndex].projectId : project.id;
        return projects.find((item) => item.id === activeId) ?? project;
    }, [project, safeIndex, slideCount, sliderShots]);

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
        },
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
    const hasComparison = Boolean(activeProject.comparisons?.length || computedBeforeAfter);

    useEffect(() => {
        setShowComparison(false);
    }, [activeProject.id, computedBeforeAfter, activeProject.comparisons?.length]);

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
            </Head>

            <div
                className={styles.page}
                style={{
                    background: isDark ? "#111111" : "#ece8e1",
                    color: isDark ? "#fffdef" : "#111111",
                }}
            >
                <Navbar />

                <div
                    className={styles.backdrop}
                    aria-hidden="true"
                    style={{
                        opacity: isDark ? 1 : 0.22,
                    }}
                />

                <main className={styles.content}>
                    <div className={styles.metaRow}>
                        <div
                            className={styles.metaCard}
                            style={{
                                background: isDark ? undefined : "rgba(248,245,239,0.74)",
                                borderColor: isDark ? undefined : "rgba(0,0,0,0.08)",
                                boxShadow: isDark ? undefined : "0 14px 36px rgba(0,0,0,0.07)",
                            }}
                        >
                            <p
                                className={styles.metaLabel}
                                style={{ color: isDark ? undefined : "rgba(17,17,17,0.52)" }}
                            >
                                {copy.bottom.title[language]}
                            </p>

                            <p
                                className={styles.metaValue}
                                style={{ color: isDark ? undefined : "#111111" }}
                            >
                                {activeProject.title[language]}
                            </p>
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
                                        style={{
                                            background: isDark ? undefined : "#e3dfd7",
                                            boxShadow: isDark ? undefined : "0 14px 36px rgba(0,0,0,0.07)",
                                        }}
                                    >
                                        <Image
                                            src={shot.src}
                                            alt={shot.alt[language]}
                                            fill
                                            className={styles.galleryImage}
                                            priority={shotIndex === 0}
                                        />

                                        {shotIndex === 0 && (
                                            <div className={styles.heroTextGroup}>
                                                <p
                                                    className={styles.heroSubtitleBadge}
                                                    style={{
                                                        color: isDark ? undefined : "#111111",
                                                        background: isDark ? undefined : "rgba(248,245,239,0.76)",
                                                        border: isDark ? undefined : "1px solid rgba(0,0,0,0.06)",
                                                        boxShadow: isDark ? undefined : "0 8px 22px rgba(0,0,0,0.06)",
                                                    }}
                                                >
                                                    ИНТЕРЬЕРИЙН ЗУРАГ ТӨСӨЛ
                                                </p>
                                            </div>
                                        )}

                                        {isHero && hasComparison && (
                                            <button
                                                type="button"
                                                className={styles.comparisonButton}
                                                onClick={() => setShowComparison(true)}
                                                style={{
                                                    background: isDark ? undefined : "rgba(248,245,239,0.84)",
                                                    color: isDark ? undefined : "#111111",
                                                    borderColor: isDark ? undefined : "rgba(0,0,0,0.08)",
                                                    boxShadow: isDark ? undefined : "0 10px 24px rgba(0,0,0,0.08)",
                                                }}
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
                            <p
                                className={styles.selectorLabel}
                                style={{ color: isDark ? undefined : "rgba(17,17,17,0.66)" }}
                            >
                                {copy.selection[language]}
                            </p>
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
                                            style={{
                                                background: isDark ? undefined : "#e3dfd7",
                                                boxShadow: isDark ? undefined : "0 12px 30px rgba(0,0,0,0.06)",
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

                                            <div
                                                className={styles.overlay}
                                                style={{
                                                    background: isDark
                                                        ? undefined
                                                        : "linear-gradient(to top, rgba(244,241,235,0.84), rgba(244,241,235,0.14), transparent)",
                                                }}
                                            >
                                                <p
                                                    className={styles.slideCaption}
                                                    style={{ color: isDark ? undefined : "#111111" }}
                                                >
                                                    {slide.shot.alt[language]}
                                                </p>
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
                                    style={{
                                        background: isDark ? undefined : "rgba(248,245,239,0.84)",
                                        color: isDark ? undefined : "#111111",
                                        borderColor: isDark ? undefined : "rgba(0,0,0,0.08)",
                                        boxShadow: isDark ? undefined : "0 8px 20px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    <span aria-hidden="true">←</span> {copy.previous[language]}
                                </button>

                                <div className={styles.progress}>
                                    {slides.map((slide, dotIndex) => (
                                        <button
                                            key={`progress-${slide.projectId}-${dotIndex}`}
                                            type="button"
                                            className={`${styles.progressDot} ${
                                                dotIndex === safeIndex ? styles.progressDotActive : ""
                                            }`}
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
                                    style={{
                                        background: isDark ? undefined : "rgba(248,245,239,0.84)",
                                        color: isDark ? undefined : "#111111",
                                        borderColor: isDark ? undefined : "rgba(0,0,0,0.08)",
                                        boxShadow: isDark ? undefined : "0 8px 20px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {copy.next[language]} <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {hasComparison && showComparison && (
                        <div
                            className={styles.comparisonOverlay}
                            role="dialog"
                            aria-label={
                                language === "mn"
                                    ? "Өмнө ба дараах харьцуулалт"
                                    : "Before and after comparison"
                            }
                            style={{
                                background: isDark
                                    ? "rgba(0,0,0,0.68)"
                                    : "rgba(236,232,225,0.78)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <div
                                className={styles.comparisonCard}
                                style={{
                                    background: isDark ? undefined : "rgba(248,245,239,0.78)",
                                    borderColor: isDark ? undefined : "rgba(0,0,0,0.08)",
                                    boxShadow: isDark ? undefined : "0 18px 44px rgba(0,0,0,0.08)",
                                }}
                            >
                                <div className={styles.overlayHeader}>
                                    <p
                                        className={styles.overlayTitle}
                                        style={{ color: isDark ? undefined : "#111111" }}
                                    >
                                        {language === "mn" ? "Өмнө / Дараа" : "Before / After"}
                                    </p>

                                    <button
                                        type="button"
                                        className={styles.overlayClose}
                                        onClick={() => setShowComparison(false)}
                                        aria-label={
                                            language === "mn"
                                                ? "Харьцуулалтыг хаах"
                                                : "Close comparison"
                                        }
                                        style={{
                                            background: isDark ? undefined : "rgba(248,245,239,0.9)",
                                            color: isDark ? undefined : "#111111",
                                            borderColor: isDark ? undefined : "rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        {language === "mn" ? "Хаах" : "Close"}
                                    </button>
                                </div>

                                {activeProject.comparisons?.length ? (
                                    <ComparisonGrid items={activeProject.comparisons} />
                                ) : computedBeforeAfter ? (
                                    <Comparison beforeAfter={computedBeforeAfter} />
                                ) : null}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}
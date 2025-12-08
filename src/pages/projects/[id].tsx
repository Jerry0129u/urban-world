import Head from "next/head";
import Image from "next/image";
import { type GetStaticPaths, type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useEffect, useMemo, useState } from "react";

import Comparison from "@/components/Comparison";
import Navbar from "@/components/Navbar";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { type LocalizedShot, type Project, projects } from "@/data/projects";
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

    // --- 1. Slides: shots → gallery → cover (fallback) ---
    const slides = useMemo<LocalizedShot[]>(() => {
        if (project.shots && project.shots.length > 0) return project.shots;
        if (project.gallery && project.gallery.length > 0) return project.gallery;

        // Fallback: cover-ийг нэг слайд болгон ашиглана
        return [
            {
                src: project.cover,
                alt: project.title,
            } as LocalizedShot,
        ];
    }, [project]);

    const [index, setIndex] = useState(0);
    const [showComparison, setShowComparison] = useState(false);

    useEffect(() => {
        setIndex(0);
        setShowComparison(false);
    }, [project.id]);

    // Автомат слайд солигдох (1-ээс дээш зурагтай үед)
    useEffect(() => {
        if (slides.length <= 1 || showComparison) return undefined;

        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % slides.length);
        }, 8200);

        return () => window.clearInterval(timer);
    }, [slides.length, showComparison]);

    // ESC дарж Comparison хаах
    useEffect(() => {
        if (!showComparison) return undefined;

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowComparison(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [showComparison]);

    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;
    const hasComparison = Boolean(project.beforeAfter);

    const copy = {
        projectFocus: { en: "Project focus", mn: "Төслийн гол санаа" },
        compare: { en: "Compare", mn: "Харьцуулах" },
        comparisonAria: { en: "Before and after comparison", mn: "Өмнөх, дараах харьцуулалт" },
        previous: { en: "Previous", mn: "Өмнөх" },
        next: { en: "Next", mn: "Дараах" },
        close: { en: "Close", mn: "Хаах" },
        overlayTitle: { en: "Before / After", mn: "Өмнө / Дараа" },
        bottom: {
            title: { en: "Project title", mn: "Төслийн нэр" },
            location: { en: "Location", mn: "Байршил" },
            completed: { en: "Completed", mn: "Гүйцэтгэсэн хугацаа" },
        },
        comingSoon: { en: "Coming soon", mn: "Тун удахгүй" },
        jumpTo: (position: number) =>
            language === "mn" ? `${position}-р зураг руу очих` : `Jump to slide ${position}`,
        sliderLabel:
            language === "mn"
                ? `${project.title[language]} - зураглал`
                : `${project.title[language]} slideshow`,
    };

    // --- 2. Completed → duration руу уясан format ---
    const formatDuration = () => {
        if (project.duration) {
            return project.duration[language];
        }
        return copy.comingSoon[language];
    };

    const slideState = (slideIndex: number) => {
        if (slideIndex === index) return "active";
        if (slideIndex === prevIndex) return "prev";
        if (slideIndex === nextIndex) return "next";
        return "idle";
    };

    return (
        <>
            <Head>
                <title>{`${project.title[language]} — Urban World`}</title>
                <meta name="description" content={project.description[language]} />
            </Head>
            <div className={styles.page}>
                <Navbar />
                <div className={styles.backdrop} aria-hidden="true" />
                <main className={styles.content}>
                    {/* --- ДЭЭД ТАЛД 3 МЭДЭЭЛЛИЙН БЛОК --- */}
                    <div className={styles.bottomMeta}>
                        <div className={styles.bottomCard}>
                            <p className={styles.bottomLabel}>{copy.bottom.title[language]}</p>
                            <p className={styles.bottomValue}>{project.title[language]}</p>
                        </div>
                        <div className={styles.bottomCard}>
                            <p className={styles.bottomLabel}>{copy.bottom.location[language]}</p>
                            <p className={styles.bottomValue}>{project.location[language]}</p>
                        </div>
                        <div className={styles.bottomCard}>
                            <p className={styles.bottomLabel}>{copy.bottom.completed[language]}</p>
                            <p className={styles.bottomValue}>{formatDuration()}</p>
                        </div>
                    </div>

                    {/* --- HERO SLIDER --- */}
                    <section className={styles.sliderSection} aria-label={copy.sliderLabel}>
                        <div className={styles.sliderShell}>
                            {/* Харьцуулалт (байхгүй бол харагдахгүй) */}
                            {hasComparison && (
                                <button
                                    type="button"
                                    className={styles.comparisonButton}
                                    onClick={() => setShowComparison(true)}
                                    aria-pressed={showComparison}
                                    aria-label={copy.comparisonAria[language]}
                                    disabled={showComparison}
                                >
                                    <span aria-hidden="true">↔</span> {copy.compare[language]}
                                </button>
                            )}

                            <div className={styles.sliderTrack}>
                                {slides.map((shot, slideIndex) => {
                                    const state = slideState(slideIndex);
                                    const isActive = state === "active";

                                    return (
                                        <article
                                            key={`${project.id}-${shot.src}-${slideIndex}`}
                                            className={`${styles.slide} ${styles[`slide_${state}`]}`}
                                            aria-hidden={!isActive}
                                        >
                                            <div className={styles.slideImage}>
                                                <Image
                                                    src={shot.src}
                                                    alt={shot.alt[language]}
                                                    fill
                                                    sizes="(min-width: 1024px) 80vw, 100vw"
                                                    className={styles.image}
                                                    priority={slideIndex === 0}
                                                />
                                            </div>
                                            <div className={styles.overlayText}>
                                                <p className={`${styles.eyebrow} ${styles.overlayEyebrow}`}>
                                                    {copy.projectFocus[language]}
                                                </p>
                                                <h1 className={styles.title}>{project.title[language]}</h1>
                                                <p className={styles.subtitle}>{project.location[language]}</p>
                                                <p className={styles.lead}>{project.description[language]}</p>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            {/* --- CONTROLS --- */}
                            <div className={styles.controls}>
                                <button
                                    type="button"
                                    onClick={() => setIndex(prevIndex)}
                                    className={styles.controlButton}
                                    aria-label={language === "mn" ? "Өмнөх зураг" : "Previous image"}
                                >
                                    <span aria-hidden="true">←</span> {copy.previous[language]}
                                </button>

                                <div className={styles.progress}>
                                    {slides.map((shot, dotIndex) => (
                                        <button
                                            key={`${project.id}-dot-${shot.src}-${dotIndex}`}
                                            type="button"
                                            className={`${styles.progressDot} ${
                                                dotIndex === index ? styles.progressDotActive : ""
                                            }`}
                                            aria-label={copy.jumpTo(dotIndex + 1)}
                                            onClick={() => setIndex(dotIndex)}
                                        />
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIndex(nextIndex)}
                                    className={styles.controlButton}
                                    aria-label={language === "mn" ? "Дараагийн зураг" : "Next image"}
                                >
                                    {copy.next[language]} <span aria-hidden="true">→</span>
                                </button>
                            </div>

                            {/* --- COMPARISON OVERLAY --- */}
                            {hasComparison && showComparison && project.beforeAfter && (
                                <div
                                    className={styles.comparisonOverlay}
                                    role="dialog"
                                    aria-label={copy.comparisonAria[language]}
                                >
                                    <div className={styles.comparisonCard}>
                                        <div className={styles.overlayHeader}>
                                            <p className={styles.overlayTitle}>{copy.overlayTitle[language]}</p>
                                            <button
                                                type="button"
                                                className={styles.overlayClose}
                                                onClick={() => setShowComparison(false)}
                                                aria-label={
                                                    language === "mn"
                                                        ? "Харьцуулалтыг хаах"
                                                        : "Close comparison"
                                                }
                                            >
                                                {copy.close[language]}
                                            </button>
                                        </div>
                                        <Comparison beforeAfter={project.beforeAfter} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
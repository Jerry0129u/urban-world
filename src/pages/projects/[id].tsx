import Head from "next/head";
import Image from "next/image";
import { type GetStaticPaths, type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import { type Project, projects, type Shot } from "@/data/projects";
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
    const slides = useMemo<Shot[]>(() => {
        if (project.shots && project.shots.length > 0) return project.shots;
        return project.gallery;
    }, [project]);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [project.id]);

    useEffect(() => {
        if (slides.length <= 1) return undefined;

        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % slides.length);
        }, 6200);

        return () => window.clearInterval(timer);
    }, [slides.length]);

    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;

    const formatCompletion = () => {
        if (!project.completed) return "Тун удахгүй";
        const month = project.completed.month.padStart(2, "0");
        return `${project.completed.year} · ${month} сар`;
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
                <title>{`${project.title} — Urban World`}</title>
                <meta name="description" content={project.description} />
            </Head>
            <div className={styles.page}>
                <Navbar />
                <div className={styles.backdrop} aria-hidden="true" />
                <main className={styles.content}>
                    <header className={styles.header}>
                        <p className={styles.eyebrow}>Project focus</p>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.subtitle}>{project.location}</p>
                        <p className={styles.lead}>{project.description}</p>
                    </header>

                    <section className={styles.sliderSection} aria-label={`${project.title} slideshow`}>
                        <div className={styles.sliderShell}>
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
                                                        alt={shot.alt}
                                                    fill
                                                    sizes="(min-width: 1024px) 80vw, 100vw"
                                                    className={styles.image}
                                                    priority={slideIndex === 0}
                                                />
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
                                    aria-label="Өмнөх зураг"
                                >
                                    <span aria-hidden="true">←</span> Previous
                                </button>
                                <div className={styles.progress}>
                                    {slides.map((shot, dotIndex) => (
                                        <button
                                            key={`${project.id}-dot-${shot.src}-${dotIndex}`}
                                            type="button"
                                            className={`${styles.progressDot} ${dotIndex === index ? styles.progressDotActive : ""}`}
                                            aria-label={`Jump to slide ${dotIndex + 1}`}
                                            onClick={() => setIndex(dotIndex)}
                                        />
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIndex(nextIndex)}
                                    className={styles.controlButton}
                                    aria-label="Дараагийн зураг"
                                >
                                    Next <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    <div className={styles.bottomMeta}>
                        <div className={styles.bottomCard}>
                            <p className={styles.bottomLabel}>Highlight</p>
                            <p className={styles.bottomValue}>{project.highlight ?? "Layered finish and lighting sequence."}</p>
                        </div>
                        <div className={styles.bottomCard}>
                            <p className={styles.bottomLabel}>Сүүлд шинэчилсэн</p>
                            <p className={styles.bottomValue}>{formatCompletion()}</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

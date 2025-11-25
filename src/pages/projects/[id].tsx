import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";

import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { type Project, projects } from "@/data/projects";
import styles from "./ProjectDetail.module.css";

type ProjectPageProps = {
    project: Project;
};

function clampIndex(index: number, length: number) {
    if (length === 0) return 0;
    if (index < 0) return 0;
    if (index >= length) return length - 1;
    return index;
}

export default function ProjectDetail({ project }: ProjectPageProps) {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [showComparison, setShowComparison] = useState(false);
    const compareRef = useRef<HTMLDivElement | null>(null);
    const pageTitle = `${project.title} — Urban World LLC`;

    useEffect(() => {
        if (typeof window === "undefined") return;
        const { hash, href } = window.location;
        if (hash) {
            const cleanUrl = href.replace(/#.*$/, "");
            window.history.replaceState(null, "", cleanUrl);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    useEffect(() => {
        if (!router.isReady) return;
        const { slide } = router.query;
        if (typeof slide === "string") {
            const parsed = Number.parseInt(slide, 10);
            if (!Number.isNaN(parsed)) {
                setActiveIndex(clampIndex(parsed, project.gallery.length));
            }
        }
    }, [router.isReady, router.query, project.gallery.length]);

    const activeShot = useMemo(() => project.gallery[activeIndex] ?? project.gallery[0], [activeIndex, project.gallery]);
    const totalShots = project.gallery.length;

    const goNext = () => setActiveIndex((prev) => (prev + 1) % totalShots);
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + totalShots) % totalShots);
    const openComparison = () => {
        setShowComparison(true);
        requestAnimationFrame(() => compareRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={project.description} />
            </Head>
            <div className={styles.page}>
                <Navbar />
                <main className={styles.main}>
                    <section
                        className={styles.hero}
                        style={{ ["--hero-cover" as string]: `url(${project.cover})` }}
                    >
                        <div className={styles.heroBackWrap}>
                            <Link href="/#projects" className={styles.backLink}>
                                ← Back to projects
                            </Link>
                        </div>
                        <div className={styles.heroGradient} aria-hidden="true" />
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <p className={styles.kicker}>{project.location}</p>
                                <h1 className={styles.title}>{project.title}</h1>
                                <p className={styles.description}>{project.description}</p>
                                {project.highlight && <p className={styles.highlight}>{project.highlight}</p>}
                                <div className={styles.heroActions}>
                                    <a href="#gallery" className={styles.primaryButton}>
                                        Open gallery
                                    </a>
                                    <button type="button" className={styles.secondaryButton} onClick={openComparison}>
                                        Before / after
                                    </button>
                                </div>
                                <div className={styles.heroStats}>
                                    {project.stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className={styles.statLabel}>{stat.label}</p>
                                            <p className={styles.statValue}>{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="gallery" className={`${styles.gallerySection} container mx-auto px-4`}>
                        <div className={styles.sectionHeader}>
                            <div>
                                    <p className={styles.kicker}>gallery</p>
                                    <h2 className={styles.sectionTitle}>Scroll through the hero frames.</h2>
                                    <p className={styles.sectionCopy}>Use the arrows or previews to move between shots.</p>
                                </div>
                            </div>
                        <div className={styles.pogContainer}>
                            <div className={styles.galleryFrame}>
                                <button
                                    type="button"
                                    className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
                                    onClick={goPrev}
                                    aria-label="Previous photo"
                                >
                                    ←
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
                                    onClick={goNext}
                                    aria-label="Next photo"
                                >
                                    →
                                </button>
                                <Image
                                    key={`${project.id}-hero-${activeShot?.src}`}
                                    src={activeShot?.src ?? project.cover}
                                    alt={activeShot?.alt ?? project.title}
                                    fill
                                    className={styles.galleryHeroImage}
                                    sizes="(min-width: 1024px) 80vw, 100vw"
                                />
                                <div className={styles.slideMeta}>
                                    <p>{activeShot?.alt}</p>
                                    <span>
                                        {activeIndex + 1} / {totalShots}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.previewRow}>
                                {project.gallery.slice(0, 6).map((shot, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <button
                                            key={`${project.id}-preview-${index}`}
                                            type="button"
                                            className={`${styles.previewCard} ${isActive ? styles.previewActive : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                            aria-label={`Open ${shot.alt}`}
                                        >
                                            <Image
                                                src={shot.src}
                                                alt={shot.alt}
                                                fill
                                                sizes="160px"
                                                className={styles.previewImage}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <section id="before-after" className={`${styles.compareSection} container mx-auto px-4`}>
                        <div ref={compareRef} className={styles.compareShell}>
                            {showComparison ? (
                                <Comparison
                                    variant="embedded"
                                    beforeAfter={project.beforeAfter}
                                    heading="Before and after—without leaving the gallery."
                                    eyebrow="contrast check"
                                    copy="Toggle the slider to see how we lift the room from a neutral shell into a branded, welcoming space."
                                />
                            ) : (
                                <div className={styles.comparePlaceholder}>
                                    <p className={styles.kicker}>comparison</p>
                                    <p className={styles.sectionTitle}>Tap “Before / after” to reveal the slider.</p>
                                    <button type="button" className={styles.primaryButton} onClick={openComparison}>
                                        Show comparison
                                    </button>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: projects.map((project) => ({ params: { id: project.id } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const project = projects.find((item) => item.id === params.id);

    if (!project) {
        return { notFound: true };
    }

    return {
        props: {
            project,
        },
    };
}

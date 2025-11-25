import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

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
                        style={{ ["--hero-cover" as string]: `url(${activeShot?.src ?? project.cover})` }}
                    >
                        <div className={styles.heroGradient} aria-hidden="true" />
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <p className={styles.kicker}>{project.location}</p>
                                <h1 className={styles.title}>{project.title}</h1>
                                <p className={styles.description}>{project.description}</p>
                                {project.highlight && <p className={styles.highlight}>{project.highlight}</p>}
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
                        <div className={styles.heroNav}>
                            <button type="button" className={styles.heroNavButton} onClick={goPrev} aria-label="Previous photo">
                                ←
                            </button>
                            <button type="button" className={styles.heroNavButton} onClick={goNext} aria-label="Next photo">
                                →
                            </button>
                        </div>
                        <div className={styles.heroThumbGrid}>
                            {project.gallery.map((shot, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        key={`${project.id}-hero-thumb-${index}`}
                                        type="button"
                                        className={`${styles.heroThumbButton} ${isActive ? styles.heroThumbActive : ""}`}
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`Show ${shot.alt}`}
                                    >
                                        <div className={styles.heroThumbInner}>
                                            <Image
                                                src={shot.src}
                                                alt={shot.alt}
                                                fill
                                                sizes="120px"
                                                className={styles.heroThumbImage}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                </main>
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

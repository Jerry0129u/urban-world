import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

import styles from "./Comparison.module.css";

const beforeShot = {
    image: "/before.jpg",
    title: "Existing loft capture",
    detail: "raw daylight frame",
};

const afterShot = {
    image: "/after.jpg",
    title: "Layered finish pass",
    detail: "balanced lighting + styling",
};

type ComparisonVariant = "standalone" | "embedded";

interface ComparisonProps {
    variant?: ComparisonVariant;
    className?: string;
}

export default function Comparison({ variant = "standalone", className }: ComparisonProps = {}) {
    const [value, setValue] = useState(50);
    const [reveal, setReveal] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof IntersectionObserver === "undefined") {
            const frame = window.requestAnimationFrame(() => setReveal(true));
            return () => window.cancelAnimationFrame(frame);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setReveal(entry.isIntersecting);
                });
            },
            { threshold: 0.35 }
        );

        observer.observe(section);
        return () => {
            observer.disconnect();
        };
    }, []);

    const stageStyle = {
        "--compare": value,
    } as CSSProperties;

    const isStandalone = variant === "standalone";
    const wrapperClass = [
        isStandalone ? `room-section relative overflow-hidden text-slate-900 scroll-mt-24 ${styles.section}` : "relative w-full text-slate-900",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    const innerClass = [
        isStandalone
            ? "relative z-10 container mx-auto flex w-full flex-col px-4 py-12 lg:py-20"
            : "flex w-full flex-col",
        styles.wrapper,
    ]
        .filter(Boolean)
        .join(" ");

    const WrapperTag = isStandalone ? "section" : "div";

    return (
        <WrapperTag
            id={isStandalone ? "comparison" : undefined}
            ref={sectionRef}
            className={wrapperClass}
        >
            {isStandalone && <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" aria-hidden="true" />}
            <div className={innerClass}>
                <div className="max-w-2xl space-y-4">
                    <p className="text-xs uppercase tracking-[0.6em] text-slate-500">before / after</p>
                    <h2 className="text-3xl font-light md:text-4xl">Do an interior mood comparison.</h2>
                    <p className="text-base text-slate-600 md:text-lg">
                        Drag the orbital control to reveal how the same room feels before and after we stage it.
                        Layered lighting, texture, and styling cadence dial the atmosphere from raw to ready.
                    </p>
                </div>
                <div className={styles.stageShell}>
                    <div
                        data-reveal={reveal ? "true" : "false"}
                        className={styles.stage}
                        style={stageStyle}
                    >
                        <div className={styles.images}>
                            <Image
                                src={beforeShot.image}
                                alt={beforeShot.title}
                                fill
                                className={styles.image}
                                sizes="(min-width: 1024px) 70vw, 100vw"
                            />
                            <Image
                                src={afterShot.image}
                                alt={afterShot.title}
                                fill
                                className={`${styles.image} ${styles.imageAfter}`}
                                sizes="(min-width: 1024px) 70vw, 100vw"
                            />
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={value}
                            onChange={(event) => setValue(Number(event.currentTarget.value))}
                            aria-label="Room comparison slider"
                            className={styles.slider}
                        />
                        <div className={styles.drag} aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.metaRow}>
                        <div className={styles.metaGroup}>
                            <p className={styles.metaLabel}>before</p>
                            <p className={styles.metaTitle}>{beforeShot.title}</p>
                            <p className={styles.metaDetail}>{beforeShot.detail}</p>
                        </div>
                        <div className={styles.metaGroup}>
                            <p className={styles.metaLabel}>after</p>
                            <p className={styles.metaTitle}>{afterShot.title}</p>
                            <p className={styles.metaDetail}>{afterShot.detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperTag>
    );
}

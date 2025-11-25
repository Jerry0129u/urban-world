import Image from "next/image";
import { type CSSProperties, useState } from "react";

import { type BeforeAfter } from "@/data/projects";
import styles from "./Comparison.module.css";

type ComparisonProps = {
    beforeAfter: BeforeAfter;
};

const formatLabel = (value: string) => (value?.trim().length > 0 ? value : undefined);

export default function Comparison({ beforeAfter }: ComparisonProps) {
    const [position, setPosition] = useState(50);

    const beforeLabel = formatLabel(beforeAfter.before.title) ?? "Before";
    const afterLabel = formatLabel(beforeAfter.after.title) ?? "After";
    const frameStyle: CSSProperties = { ["--pos" as string]: `${position}%` };

    return (
        <div className={styles.comparison}>
            <div className={styles.frame} style={frameStyle}>
                <div className={`${styles.content} ${styles.before}`}>
                    <Image
                        src={beforeAfter.before.image}
                        alt={beforeLabel}
                        fill
                        sizes="(min-width: 1024px) 80vw, 100vw"
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={`${styles.content} ${styles.after}`}>
                    <Image
                        src={beforeAfter.after.image}
                        alt={afterLabel}
                        fill
                        sizes="(min-width: 1024px) 80vw, 100vw"
                        className={styles.image}
                        priority
                    />
                </div>

                <input
                    type="range"
                    min={0}
                    max={100}
                    value={position}
                    onChange={(event) => setPosition(Number(event.target.value))}
                    className={styles.range}
                    aria-label="Drag to compare before and after"
                />
            </div>

        </div>
    );
}

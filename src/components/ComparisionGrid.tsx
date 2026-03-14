"use client";

import Comparison from "@/components/Comparison";
import type { ComparisonPair } from "@/data/projects";

import styles from "./Comparison.module.css";

type Props = {
    items: ComparisonPair[];
};

export default function ComparisonGrid({ items }: Props) {
    if (!items?.length) return null;

    return (
        <section className={styles.gridWrapper}>
            <div className={styles.grid}>
                {items.map((pair) => (
                    <div key={pair.id} className={styles.cell}>
                        <Comparison beforeAfter={pair} />
                    </div>
                ))}
            </div>
        </section>
    );
}
import { useEffect, useRef, useState } from "react";

type Options = {
    viewportFactor?: number; // portion of the viewport height used to determine active section
};

export function useSectionObserver(sectionIds: string[], options?: Options) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
    const activeRef = useRef(activeSection);
    const viewportFactor = options?.viewportFactor ?? 0.35;

    useEffect(() => {
        activeRef.current = activeSection;
    }, [activeSection]);

    useEffect(() => {
        if (sectionIds.length === 0) {
            return;
        }

        let frame = 0;

        const resolveSections = () =>
            sectionIds
                .map((id) => document.getElementById(id))
                .filter((el): el is HTMLElement => Boolean(el));

        let trackedSections = resolveSections();

        const updateActiveSection = () => {
            trackedSections = resolveSections();
            if (trackedSections.length === 0) {
                return;
            }

            const marker = window.scrollY + window.innerHeight * viewportFactor;
            let nearestId = trackedSections[0].id;
            let nearestDistance = Infinity;

            trackedSections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionCenter = rect.top + window.scrollY + rect.height / 2;
                const distance = Math.abs(sectionCenter - marker);

                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestId = section.id;
                }
            });

            if (nearestId && activeRef.current !== nearestId) {
                activeRef.current = nearestId;
                setActiveSection(nearestId);
            }
        };

        const handleScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                updateActiveSection();
                frame = 0;
            });
        };

        updateActiveSection();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (frame) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, [sectionIds, viewportFactor]);

    const setActiveManually = (id: string) => {
        activeRef.current = id;
        setActiveSection(id);
    };

    return { activeSection, setActiveSection: setActiveManually };
}

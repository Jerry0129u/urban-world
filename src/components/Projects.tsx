import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import Comparison from "./Comparison";
import styles from "./Projects.module.css";

type ShotLayout = "wide" | "tall" | "square";

type Shot = {
    src: string;
    alt: string;
    layout: ShotLayout;
};

type Album = {
    id: string;
    title: string;
    location: string;
    description: string;
    cover: string;
    palette: string;
    stats: { label: string; value: string }[];
    shots: Shot[];
};

const albums: Album[] = [
    {
        id: "penthouse",
        title: "Penthouse glow",
        location: "СБД, UB",
        description: "High-floor residence where we softened the daylight with layered sheers and graphite accents.",
        cover: "/apartment-2.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [
            { label: "zone", value: "Residence" },
            { label: "scope", value: "Full fit-out" },
        ],
        shots: [
            { src: "/apartment-1.jpg", alt: "Penthouse lounge", layout: "wide" },
            { src: "/apartment-2.jpg", alt: "Dining glow", layout: "square" },
            { src: "/apartment-4.jpg", alt: "Bedroom niche", layout: "tall" },
            { src: "/hotel-1.jpg", alt: "Lobby inspiration", layout: "square" },
            { src: "/hotel-2.jpg", alt: "Lighting detail", layout: "square" },
        ],
    },
    {
        id: "lobby",
        title: "Lobby immersion",
        location: "Downtown",
        description: "Reception loop built with polished stone, smoked glass, and kinetic lighting for brand arrivals.",
        cover: "/hotel-3.jpg",
        palette: "from-indigo-400/20 via-purple-200/10 to-transparent",
        stats: [
            { label: "zone", value: "Hospitality" },
            { label: "scope", value: "Lighting + styling" },
        ],
        shots: [
            { src: "/hotel-1.jpg", alt: "Lobby seating", layout: "wide" },
            { src: "/hotel-2.jpg", alt: "Ceiling detail", layout: "square" },
            { src: "/hotel-6.jpg", alt: "Bar vignette", layout: "tall" },
            { src: "/office-1.jpg", alt: "Back office", layout: "square" },
            { src: "/office-2.jpg", alt: "Conference glow", layout: "square" },
        ],
    },
    {
        id: "studio",
        title: "Studio hush",
        location: "Creative hub",
        description: "Open office suite tuned for focus: ribbed glass, charcoal felt, and hidden linear light.",
        cover: "/office-4.jpg",
        palette: "from-cyan-300/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Workspace" },
            { label: "scope", value: "Prototype" },
        ],
        shots: [
            { src: "/office-3.jpg", alt: "Studio overview", layout: "wide" },
            { src: "/office-2.jpg", alt: "Meeting room", layout: "square" },
            { src: "/office-1.jpg", alt: "Detail bench", layout: "square" },
            { src: "/before.jpg", alt: "Before snapshot", layout: "tall" },
            { src: "/after.jpg", alt: "After snapshot", layout: "square" },
        ],
    },
];

const layoutClassMap: Record<ShotLayout, string> = {
    wide: styles.galleryItemWide,
    tall: styles.galleryItemTall,
    square: styles.galleryItemSquare,
};

export default function Projects() {
    const [activeAlbumId, setActiveAlbumId] = useState<string | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const overlayCardRef = useRef<HTMLDivElement | null>(null);
    const activeAlbum = useMemo(() => albums.find((album) => album.id === activeAlbumId) ?? null, [activeAlbumId]);

    useEffect(() => {
        if (!activeAlbumId) return;
        const { body } = document;
        const previous = body.style.overflow;
        body.style.overflow = "hidden";
        return () => {
            body.style.overflow = previous;
        };
    }, [activeAlbumId]);

    useEffect(() => {
        if (!activeAlbum) return;
        overlayRef.current?.scrollTo({ top: 0 });
        overlayCardRef.current?.scrollTo({ top: 0 });
    }, [activeAlbum]);

    return (
        <>
            <section id="projects" className="room-section relative overflow-hidden text-slate-900 scroll-mt-24">
                <div className="container mx-auto flex w-full flex-col gap-10 px-4 py-12 lg:py-16">
                    <div className="flex flex-col gap-2">
                        <p className="text-xs uppercase tracking-[0.6em] text-slate-500">walk the work</p>
                        <h2 className="text-3xl font-light md:text-5xl">Rooms in sequence.</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {albums.map((album) => (
                            <button
                                key={album.id}
                                type="button"
                                onClick={() => setActiveAlbumId(album.id)}
                                className={`${styles.albumButton} group flex flex-col gap-5 border border-slate-200 bg-white p-5 text-left text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300`}
                            >
                                <div className="relative h-64 w-full overflow-hidden rounded-[28px]">
                                    <Image
                                        src={album.cover}
                                        alt={album.title}
                                        fill
                                        className="object-cover object-center transition duration-700 group-hover:scale-105"
                                        sizes="(min-width: 1024px) 30vw, 100vw"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${album.palette}`} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{album.location}</p>
                                    <h3 className="text-2xl font-light">{album.title}</h3>
                                    <p className="text-sm text-slate-600">{album.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <p className="text-xs uppercase tracking-[0.6em] text-slate-400">tap an album to open the full set ↓</p>
                    <Comparison variant="embedded" className="mt-4" />
                </div>
            </section>
            <div
                className={`${styles.overlay} ${activeAlbum ? styles.overlayVisible : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label={activeAlbum ? `${activeAlbum.title} gallery` : undefined}
                ref={overlayRef}
            >
                {activeAlbum && (
                    <div className={styles.overlayCard} ref={overlayCardRef}>
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setActiveAlbumId(null)}
                            aria-label="Close gallery"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6 6l12 12m0-12L6 18"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                            <div className={styles.overlayInfo}>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.5em] text-slate-500">{activeAlbum.location}</p>
                                    <h3 className="text-3xl font-light">{activeAlbum.title}</h3>
                                </div>
                                <p className="text-sm text-slate-600">{activeAlbum.description}</p>
                                <div className={styles.statRow}>
                                    {activeAlbum.stats.map((stat) => (
                                        <div key={stat.label} className={styles.statBlock}>
                                            <p className="text-slate-900">{stat.label}</p>
                                            <p className="mt-2 text-xs tracking-[0.2em] text-slate-600">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Swipe • scroll • linger</p>
                            </div>
                        <div className={styles.overlayGallery}>
                            {activeAlbum.shots.map((shot) => (
                                <div
                                    key={`${activeAlbum.id}-${shot.src}`}
                                    className={`${styles.galleryItem} ${layoutClassMap[shot.layout]}`}
                                >
                                    <Image
                                        src={shot.src}
                                        alt={shot.alt}
                                        fill
                                        sizes="(min-width: 1024px) 40vw, 100vw"
                                        className="object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

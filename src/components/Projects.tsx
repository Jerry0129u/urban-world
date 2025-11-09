"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

type Project = {
    id: string;
    name: string;
    category: "Оффис" | "Зочид буудал" | "Орон сууц" | "Худалдаа" | "Бусад";
    location: string;
    year: string;
    cover: string; // төлөөлөх нэг зураг
    gallery?: string[]; // цэгцтэй харагдах галерей
    beforeAfter?: {
        before: string;
        after: string;
    };
    tour360?: string; // Kuula / Matterport линк
};

const projects: Project[] = [
    {
        id: "office-2024",
        name: "Оффис интерьер",
        category: "Оффис",
        location: "Улаанбаатар, ХУД",
        year: "2024-05",
        cover: "/office-4.jpg",
        gallery: [
            "/office-1.jpg",
            "/office-2.jpg",
            "/office-3.jpg",
        ],
        tour360: "https://kuula.co/post/hb9t7",
    },
    {
        id: "hotel-lobby",
        name: "Зочид буудлын лобби шинэчлэлт",
        category: "Зочид буудал",
        location: "Улаанбаатар",
        year: "2023-11",
        cover: "/hotel-1.jpg",
        gallery: [
            "/hotel-2.jpg",
            "/hotel-3.jpg",
            "/hotel-6.jpg",
        ],
        beforeAfter: {
            before: "/before.jpg",
            after: "/after.jpg",
        },
    },
    {
        id: "apartment-1",
        name: "Орон сууцны тохижилт",
        category: "Орон сууц",
        location: "СБД",
        year: "2023-06",
        cover: "/apartment-1.jpg",
        gallery: [
            "/apartment-2.jpg",
            "/apartment-4.jpg",
        ],
    },
];

const categories = ["Бүгд", "Оффис", "Зочид буудал", "Орон сууц", "Худалдаа", "Бусад"];

export default function Projects() {
    const { ref, inView } = useInViewAnimation({ threshold: 0.2, once: false });
    const [activeCategory, setActiveCategory] = useState<string>("Бүгд");
    const [activeProject, setActiveProject] = useState<Project | null>(projects[0]);

    const filtered =
        activeCategory === "Бүгд"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            ref={ref}
            id="projects"
            className={`py-16 md:py-20 bg-white min-h-screen snap-start flex items-center scroll-mt-28 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="container mx-auto px-4 space-y-8 w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#001517] mb-2">
                            Төслүүд
                        </h2>
                        <p className="text-slate-600 max-w-2xl">
                            Гүйцэтгэсэн ажлуудаа төрөлжүүлсэн байдлаар нэг дор харуулж,
                            төсөл бүрийг нэр, байршил, гүйцэтгэсэн он сартай нь дэлгэрэнгүй
                            үзүүлнэ. Before/After болон 360° tour-ыг дагалдуулж болно.
                        </p>
                    </div>
                    <Link
                        href="#contact"
                        className="inline-flex items-center text-sm text-[#001517] underline-offset-4 hover:underline"
                    >
                        Шийдэл авах хүсэлт илгээх
                    </Link>
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm border transition ${
                                activeCategory === cat
                                    ? "bg-[#001517] text-white border-[#001517]"
                                    : "bg-white text-slate-700 border-slate-200 hover:border-[#001517]/40"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Overview cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {filtered.map((p, index) => (
                        <article
                            key={p.id}
                            onClick={() => setActiveProject(p)}
                            className={`rounded-xl border overflow-hidden flex flex-col bg-white cursor-pointer transition hover:shadow-sm ${
                                activeProject?.id === p.id ? "ring-2 ring-[#001517]/40" : ""
                            }`}
                            style={{
                                transitionDelay: inView ? `${index * 80}ms` : "0ms",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(12px)",
                            }}
                        >
                            <div className="relative h-40 w-full bg-slate-100">
                                {/* cover image */}
                                <Image
                                    src={p.cover}
                                    alt={p.name}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {p.category}
                </span>
                                <h3 className="font-semibold text-[#001517]">{p.name}</h3>
                                <p className="text-xs text-slate-500">
                                    {p.location} • {p.year}
                                </p>
                                <p className="text-sm text-slate-600 line-clamp-2">
                                    Төлөөлөх нэг зурагтайгаар товч танилцуулна.
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Detail / gallery */}
                {activeProject && (
                    <div className="mt-6 border rounded-2xl p-6 bg-slate-50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Дэлгэрэнгүй төсөл
                                </p>
                                <h3 className="text-xl font-semibold text-[#001517]">
                                    {activeProject.name}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {activeProject.location} • {activeProject.year}
                                </p>
                            </div>
                            {activeProject.tour360 && (
                                <a
                                    href={activeProject.tour360}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white border text-sm text-[#001517] hover:bg-slate-100"
                                >
                                    360° tour / 3D walkthrough
                                </a>
                            )}
                        </div>

                        {/* gallery images */}
                        {activeProject.gallery && activeProject.gallery.length > 0 && (
                            <div className="grid md:grid-cols-4 gap-4 mb-6">
                                {activeProject.gallery.map((img) => (
                                    <div
                                        key={img}
                                        className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-200"
                                    >
                                        <Image
                                            src={img}
                                            alt={activeProject.name}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 768px) 25vw, 100vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* before / after */}
                        {activeProject.beforeAfter && (
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-medium text-slate-500 mb-2">
                                        Before
                                    </p>
                                    <div className="relative w-full h-56 rounded-lg overflow-hidden bg-slate-200">
                                        <Image
                                            src={activeProject.beforeAfter.before}
                                            alt="Before"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-500 mb-2">
                                        After
                                    </p>
                                    <div className="relative w-full h-56 rounded-lg overflow-hidden bg-slate-200">
                                        <Image
                                            src={activeProject.beforeAfter.after}
                                            alt="After"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

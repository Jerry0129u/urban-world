"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const BG_IMAGES = [
    "/enhanced-Enscape_2026-01-19-05-07-35.png",
    "/Enscape_2026-01-30-18-16-34.png",
    "/Screenshot 2025-12-19 at 15.54.54.png",
];

const BG_COLORS = [
    "bg-[#1e293b]", // Slate 800 - Цэнхэрдүү бараан саарал
    "bg-[#18181b]", // Zinc 900 - Цэвэр бараан саарал
    "bg-[#1c1917]", // Stone 900 - Бордуу бараан саарал
];

export default function Hero() {
    const { language } = useLanguage();
    const [currentBg, setCurrentBg] = useState(0);

    const copy = {
        tagline: {
            en: "Interior design",
            mn: "Интерьер дизайн",
        },
        title: {
            en: ["Transforming Imagination into", "a Perfect Outcome."],
            mn: ["Төсөөллөөс төгс гүйцэтгэл."],
        },
        description: {
            en: "Urban World LLC — full-service studio for interior consulting, design documentation, fit-out, and furnishing.",
            mn: "Urban World LLC — Интерьер дизайны зөвлөгөө, зураг төсөл, дотоод засал, тохижилтын цогц үйлчилгээ үзүүлэгч компани.",
        },
        servicesCta: {
            en: "Services",
            mn: "Үйлчилгээ",
        },
        projectsCta: {
            en: "Executed Projects",
            mn: "Гүйцэтгэсэн төслүүд",
        },
    };

    const titleLines = copy.title[language];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % BG_IMAGES.length);
        }, 5000); // Өнгө солигдохыг хурдан харахын тулд түр 5сек болгов (хүсвэл 18000 болгоорой)

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden bg-black text-white"
        >
            {/* Background Color Carousel */}
            <div className="absolute inset-0">
                {BG_COLORS.map((colorClass, index) => {
                    const isActive = index === currentBg;

                    return (
                        <div
                            key={index}
                            className={`
                                absolute inset-0
                                transition-opacity duration-1000 ease-in-out
                                ${isActive ? "opacity-100" : "opacity-0"}
                                ${colorClass}
                            `}
                        >
                            {/* <Image
                                src={BG_IMAGES[index]}
                                alt="Background"
                                fill
                                className={`object-cover ${isActive ? "animate-slowZoom" : ""}`}
                            />
                            */}
                        </div>
                    );
                })}

                {/* Cinematic Gradient - Өнгөн дээр илүү гүн харагдуулна */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-black/20" /> {/* Нэмэлт зөөлөн давхарга */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-16">
                <div className="max-w-3xl space-y-6">
                    <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-[#fffdef]">
                        <span className="h-px w-10 bg-gray-500" />
                        {copy.tagline[language]}
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight md:text-6xl text-[#fffdef]">
                        {titleLines.map((line, i) => (
                            <span key={i} className="block whitespace-normal md:whitespace-nowrap">
                                {line}
                            </span>
                        ))}
                    </h1>

                    <p className="max-w-xl text-[#fffdef]/90 leading-relaxed text-base md:text-lg">
                        {copy.description[language]}
                    </p>

                    <div className="flex gap-4 pt-4">
                        <Link
                            href="#services"
                            className="bg-[#444444] px-6 py-3 text-sm font-medium text-[#fffdef] hover:bg-[#989898] transition-all"
                        >
                            {copy.servicesCta[language]}
                        </Link>

                        <Link
                            href="#projects"
                            className="border border-[#fffdef] px-6 py-3 text-sm font-medium text-[#fffdef] hover:bg-white/10 transition-all"
                        >
                            {copy.projectsCta[language]}
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slowZoom {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.05); }
                }
                .animate-slowZoom {
                    animation: slowZoom 18s ease-in-out forwards;
                }
            `}</style>
        </section>
    );
}
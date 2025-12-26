"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";


const BG_IMAGES = [
    "/mojon.jpg",
    "/caff cafe/viber_image_2025-10-23_17-33-18-695.jpg",
    "/personal apartment/4.jpg"
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

    // ⬇  background зургаа 18 секунд тутам солих (zoom animation-тай тааруулсан)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % BG_IMAGES.length);
        }, 18000); // 18s = slowZoom хугацаа

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden bg-black text-white"
        >
            {/* Background carousel */}
            <div className="absolute inset-0">
                {BG_IMAGES.map((src, index) => {
                    const isActive = index === currentBg;

                    return (
                        <div
                            key={src}
                            className={`
                                absolute inset-0
                                transition-opacity duration-1000
                                ${isActive ? "opacity-100" : "opacity-0"}
                            `}
                        >
                            <Image
                                key={`${src}-${currentBg}`}
                                src={src}
                                alt="Urban World walkthrough"
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className={`
    object-cover object-center
    ${isActive ? "animate-slowZoom" : ""}
  `}
                            />
                        </div>
                    );
                })}

                {/* Soft cinematic gradient давхарга */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-16">
                <div className="max-w-3xl space-y-6">
                    <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-[#fffdef]">
                        <span className="h-px w-10 bg-gray-500" />
                        {copy.tagline[language]}
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight md:text-6xl text-[#fffdef]">
                        {titleLines.map((line) => (
                            <span
                                key={line}
                                className="block whitespace-normal md:whitespace-nowrap"
                            >
                                {line}
                            </span>
                        ))}
                    </h1>

                    <p className="max-w-xl text-[#fffdef] leading-relaxed text-base md:text-lg">
                        {copy.description[language]}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-4">
                        <Link
                            href="#services"
                            className="bg-[#444444] px-6 py-3 text-sm font-medium text-[#fffdef] hover:bg-[#989898] transition"
                        >
                            {copy.servicesCta[language]}
                        </Link>

                        <Link
                            href="#projects"
                            className="border border-[#fffdef] px-6 py-3 text-sm font-medium text-[#fffdef] hover:bg-white/20 transition"
                        >
                            {copy.projectsCta[language]}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Zoom animation */}
            <style jsx>{`
                @keyframes slowZoom {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.2);
                    }
                }
                .animate-slowZoom {
                    animation: slowZoom 18s ease-in-out forwards;
                }
            `}</style>
        </section>
    );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const BG_IMAGES = [
    "/Dragon/15.jpg",
    "/Gongcha/enhanced-Enscape_2026-01-19-05-07-35.png",
    "/PersHous/2.png",
];

const BG_COLORS = [
    "bg-[#1e293b]",
    "bg-[#18181b]",
    "bg-[#1c1917]",
];

export default function Hero() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [currentBg, setCurrentBg] = useState(0);

    const isDark = theme === "dark";

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
            en: "Urban World LLC — Beyond Space, We Create Value.",
            mn: "Urban World LLC — Бид зөвхөн орон зайг бүтээдэггүй - үнэ цэнийг бүтээдэг.",
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
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className={`relative min-h-screen w-full overflow-hidden ${
                isDark ? "bg-black text-white" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
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
                            <Image
                                src={BG_IMAGES[index]}
                                alt="Background"
                                fill
                                className={`object-cover ${isActive ? "animate-slowZoom" : ""}`}
                            />
                        </div>
                    );
                })}

                {isDark ? (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
                        <div className="absolute inset-0 bg-black/20" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(244,241,235,0.52)] via-[rgba(244,241,235,0.18)] to-[rgba(236,232,225,0.68)]" />
                        <div className="absolute inset-0 bg-[rgba(244,241,235,0.16)]" />
                    </>
                )}
            </div>

            <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-16">
                <div className="max-w-3xl space-y-6">
                    <p
                        className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] ${
                            isDark ? "text-[#fffdef]" : "text-[#111111]"
                        }`}
                    >
                        <span className={`h-px w-10 ${isDark ? "bg-gray-500" : "bg-black/25"}`} />
                        {copy.tagline[language]}
                    </p>

                    <h1
                        className={`text-4xl font-semibold leading-tight md:text-6xl ${
                            isDark ? "text-[#fffdef]" : "text-[#111111]"
                        }`}
                    >
                        {titleLines.map((line, i) => (
                            <span key={i} className="block whitespace-normal md:whitespace-nowrap">
                                {line}
                            </span>
                        ))}
                    </h1>

                    <p
                        className={`max-w-xl text-base leading-relaxed md:text-lg ${
                            isDark ? "text-[#fffdef]/90" : "text-[#111111]/78"
                        }`}
                    >
                        {copy.description[language]}
                    </p>

                    <div className="flex gap-4 pt-4">
                        <Link
                            href="#services"
                            className={`px-6 py-3 text-sm font-medium transition-all ${
                                isDark
                                    ? "bg-[#444444] text-[#fffdef] hover:bg-[#989898]"
                                    : "border border-black/10 bg-[#f4f1eb] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1] hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] hover:border-black/20"
                            }`}
                        >
                            {copy.servicesCta[language]}
                        </Link>

                        <Link
                            href="#projects"
                            className={`px-6 py-3 text-sm font-medium transition-all ${
                                isDark
                                    ? "border border-[#fffdef] text-[#fffdef] hover:bg-white/10"
                                    : "border border-black/10 bg-[rgba(244,241,235,0.82)] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1] hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] hover:border-black/20"
                            }`}
                        >
                            {copy.projectsCta[language]}
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slowZoom {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.05);
                    }
                }

                .animate-slowZoom {
                    animation: slowZoom 18s ease-in-out forwards;
                }
            `}</style>
        </section>
    );
}
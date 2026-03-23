"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const BG_IMAGES = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
];

export default function Hero() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const [currentBg, setCurrentBg] = useState(0);
    const [isManual, setIsManual] = useState(false);

    const isDark = theme === "dark";

    const copy = {
        tagline: {
            en: "Interior design",
            mn: "Интерьер дизайн",
        },
        title: {
            en: ["BEYOND SPACE, WE CREATE VALUE."],
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

    // AUTO SLIDE
    useEffect(() => {
        if (isManual) return;

        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % BG_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isManual]);

    return (
        <section
            id="home"
            className={`relative min-h-screen w-full overflow-hidden ${
                isDark ? "bg-black text-white" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                {BG_IMAGES.map((img, index) => {
                    const isActive = index === currentBg;

                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
                                isActive ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <Image
                                src={img}
                                alt="Background"
                                fill
                                priority={index === 0}
                                className={`object-cover ${
                                    isActive ? "animate-slowZoom" : ""
                                }`}
                            />
                        </div>
                    );
                })}

                {/* Overlay */}
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

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-16">
                <div className="max-w-3xl space-y-6">
                    <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em]">
                        <span className="h-px w-10 bg-gray-500" />
                        {copy.tagline[language]}
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                        {titleLines.map((line, i) => (
                            <span key={i} className="block">
                                {line}
                            </span>
                        ))}
                    </h1>

                    <p className="max-w-xl text-base md:text-lg">
                        {copy.description[language]}
                    </p>

                    <div className="flex gap-4 pt-4">
                        <Link
                            href="#services"
                            className={`px-6 py-3 text-sm transition ${
                                isDark
                                    ? "bg-gray-700 text-white hover:bg-gray-500"
                                    : "bg-[#f4f1eb] text-black border border-black/10 hover:bg-[#ece8e1]"
                            }`}
                        >
                            {copy.servicesCta[language]}
                        </Link>

                        <Link
                            href="#projects"
                            className={`px-6 py-3 text-sm transition ${
                                isDark
                                    ? "border border-white text-white hover:bg-white/10"
                                    : "border border-black/10 text-black hover:bg-black/5"
                            }`}
                        >
                            {copy.projectsCta[language]}
                        </Link>
                    </div>
                </div>
            </div>

            {/* DOT NAVIGATION */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {BG_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentBg(index);
                            setIsManual(true);
                        }}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            currentBg === index
                                ? "bg-white scale-125 shadow-lg"
                                : "bg-white/40 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>

            {/* ANIMATION */}
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
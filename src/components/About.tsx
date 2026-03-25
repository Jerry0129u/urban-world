"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const cols = [
    {
        top: {
            mn: "Стандартаас дээгүүр\nЖИШИГ ТОГТООХ",
            en: "SETTING A NEW\nBENCHMARK",
        },
        bottom: { mn: "АЛСЫН ХАРАА", en: "VISION" },
    },
    {
        top: {
            mn:
                "Төсөөллөөс бодит гүйцэтгэл\nхүртэлх бүхий л үйл явцыг\nдэвшилтэт аргачилал ашиглан\nмэргэжлийн ур чадвартай хамт олон\nхийж гүйцэтгэдэг.\n\nЧАНАР, ХЭРЭГЛЭЭ,\nДИЗАЙНЫ тэнцвэрийг бүрдүүлж\nсэтгэл ханамжийг бий болгох",
            en:
                "From concept to completion,\nwe deliver every stage using\nadvanced methodologies.\n\nBalancing QUALITY, FUNCTION,\nand DESIGN for full satisfaction.",
        },
        bottom: { mn: "ЭРХЭМ ЗОРИЛГО", en: "MISSION" },
    },
    {
        top: {
            mn:
                "Эерэг хандлагаар нэгдэн\nмэргэжлийн багийн хүчээр,\nбид сэтгэл ханамжийг\nстандарт бус, харин\nжишиг болтол нь бүтээдэг",
            en:
                "United by a positive mindset\nand professional teamwork,\nwe build satisfaction not as\na standard — but a benchmark.",
        },
        bottom: { mn: "ҮНЭТ ЗҮЙЛ", en: "VALUES" },
    },
    {
        top: {
            mn:
                "2022 онд \nбайгуулагдсан \"Урбан Уорлд\" ХХК\nнь интерьер дизайны зөвлөгөө,\n зураг төсөл, дотоод засал, \nтохижилт гүйцэтгэх чиглэлээр\nүйл ажиллагаа явуулдаг \nүндэсний компани.",
            en:
                "Founded in 2022, Urban World LLC\ndelivers interior consulting, design\nand fit-out as a Mongolian practice.",
        },
        bottom: { mn: "ТАНИЛЦУУЛГА", en: "INTRO" },
    },
];

export default function About() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [active, setActive] = useState<number | null>(null);

    const isDark = theme === "dark";

    return (
        <section
            id="about"
            className={`relative overflow-hidden scroll-mt-24 ${
                isDark ? "bg-[#181818] text-[#fffdef]" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
            {/* DESKTOP */}
            <div className="hidden md:block py-28">
                <div className="relative container mx-auto max-w-7xl px-6">

                    {/* Header */}
                    <div className="mb-5">
                        <p className={`mb-3 text-[11px] uppercase tracking-[0.4em] ${
                            isDark ? "text-[rgba(255,255,221,0.35)]" : "text-[rgba(0,0,0,0.35)]"
                        }`}>
                            {language === "mn" ? "БИДНИЙ ТУХАЙ" : "ABOUT"}
                        </p>
                        <h2 className="text-4xl lg:text-5xl leading-tight font-light">
                            URBAN WORLD LLC
                        </h2>
                    </div>

                    <div
                        className="relative"
                        onMouseLeave={() => setActive(null)}
                    >
                        {/* Logo */}
                        <img
                            src="/uw-logo-Photoroom.png"
                            alt="Urban World logo"
                            className="w-full h-auto block transition-all duration-500"
                            style={{
                                opacity: active !== null ? 0.15 : 1,
                                filter: isDark ? "invert(1)" : "none",
                                transform: active !== null ? "scale(0.98)" : "scale(1)",
                            }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 grid grid-cols-4">
                            {cols.map((c, i) => {
                                const isActive = active === i;

                                return (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setActive(i)}
                                        className="relative flex items-center justify-center cursor-pointer overflow-hidden"
                                    >
                                        {/* TEXT */}
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                                            style={{
                                                opacity: isActive ? 1 : 0,
                                                transform: isActive
                                                    ? "translateY(0px)"
                                                    : "translateY(20px)",
                                                transition:
                                                    "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                                            }}
                                        >
                                            <p
                                                className={`whitespace-pre-line text-[13px] leading-[1.8] mb-3 ${
                                                    isDark
                                                        ? "text-[rgba(255,255,221,0.92)]"
                                                        : "text-[rgba(0,0,0,0.82)]"
                                                }`}
                                            >
                                                {c.top[language]}
                                            </p>

                                            <p
                                                className={`text-[11px] tracking-[0.4em] uppercase ${
                                                    isDark
                                                        ? "text-[rgba(255,255,221,0.45)]"
                                                        : "text-[rgba(0,0,0,0.45)]"
                                                }`}
                                            >
                                                {c.bottom[language]}
                                            </p>
                                        </div>

                                        {/* subtle hover glow */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: isActive
                                                    ? "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)"
                                                    : "transparent",
                                                transition: "0.4s",
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom labels */}
                    <div className="grid grid-cols-4 mt-4">
                        {cols.map((c, i) => (
                            <p
                                key={i}
                                className={`text-[11px] tracking-[0.36em] uppercase text-center transition-all duration-300 ${
                                    active === i
                                        ? isDark
                                            ? "text-[rgba(255,255,221,0.7)] scale-105"
                                            : "text-[rgba(0,0,0,0.65)] scale-105"
                                        : isDark
                                            ? "text-[rgba(255,255,221,0.25)]"
                                            : "text-[rgba(0,0,0,0.3)]"
                                }`}
                            >
                                {c.bottom[language]}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* MOBILE (UNCHANGED) */}
            <div className="md:hidden">
                <div className="px-6 pt-20 pb-3">
                    <p className={`mb-2 text-[10px] uppercase tracking-[0.4em] ${
                        isDark ? "text-[rgba(255,255,221,0.35)]" : "text-[rgba(0,0,0,0.35)]"
                    }`}>
                        {language === "mn" ? "БИДНИЙ ТУХАЙ" : "ABOUT"}
                    </p>
                    <h2 className="text-[28px] leading-tight font-light">
                        URBAN WORLD LLC
                    </h2>
                </div>

                <div className="px-6 mb-6">
                    <img
                        src="/uw-logo-Photoroom.png"
                        alt="Urban World logo"
                        className="w-full h-auto block"
                        style={{ filter: isDark ? "invert(1)" : "none" }}
                    />
                </div>

                <div className={`border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
                    {cols.map((c, i) => {
                        const isOpen = active === i;
                        return (
                            <div key={i} className={`border-b ${isDark ? "border-white/10" : "border-black/10"}`}>
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5"
                                    onClick={() => setActive(isOpen ? null : i)}
                                >
                                    <span className="text-[9px] tracking-[0.4em] uppercase">
                                        {c.bottom[language]}
                                    </span>
                                    <span
                                        className="text-[18px]"
                                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    style={{
                                        maxHeight: isOpen ? "400px" : "0px",
                                        overflow: "hidden",
                                        transition: "0.4s",
                                    }}
                                >
                                    <p className="px-6 pb-8 whitespace-pre-line text-[11px] leading-[2.1]">
                                        {c.top[language]}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="h-16" />
            </div>
        </section>
    );
}
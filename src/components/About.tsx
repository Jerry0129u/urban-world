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
                        <img
                            src="/uw-logo-Photoroom.png"
                            alt="Urban World logo"
                            className="w-full h-auto block transition-opacity duration-500"
                            style={{
                                opacity: active !== null ? 0.2 : 1,
                                filter: isDark ? "invert(1)" : "none",
                            }}
                        />

                        <div className="absolute inset-0 grid grid-cols-4" style={{height: "100%"}}>
                            {cols.map((c, i) => {
                                const isActive = active === i;
                                return (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => setActive(active === i ? null : i)}
                                        className="relative flex items-center justify-center cursor-pointer select-none overflow-hidden"
                                    >
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center overflow-hidden"
                                            style={{
                                                opacity: isActive ? 1 : 0,
                                                transition: "opacity 0.32s ease 0.06s",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            <p
                                                className={`whitespace-pre-line text-center text-[9px] leading-[1.75] mb-2 ${
                                                    isDark
                                                        ? "text-[rgba(255,255,221,0.9)]"
                                                        : "text-[rgba(0,0,0,0.78)]"
                                                }`}
                                            >
                                                {c.top[language]}
                                            </p>
                                            <p
                                                className={`text-[7.5px] tracking-[0.4em] uppercase ${
                                                    isDark
                                                        ? "text-[rgba(255,255,221,0.35)]"
                                                        : "text-[rgba(0,0,0,0.35)]"
                                                }`}
                                            >
                                                {c.bottom[language]}
                                            </p>
                                        </div>
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
                                className={`text-[8.5px] tracking-[0.36em] uppercase text-center transition-colors duration-300 ${
                                    active === i
                                        ? isDark
                                            ? "text-[rgba(255,255,221,0.6)]"
                                            : "text-[rgba(0,0,0,0.55)]"
                                        : isDark
                                            ? "text-[rgba(255,255,221,0.22)]"
                                            : "text-[rgba(0,0,0,0.28)]"
                                }`}
                            >
                                {c.bottom[language]}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                {/* Header */}
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

                {/* Logo */}
                <div className="px-6 mb-6">
                    <img
                        src="/uw-logo-Photoroom.png"
                        alt="Urban World logo"
                        className="w-full h-auto block"
                        style={{ filter: isDark ? "invert(1)" : "none" }}
                    />
                </div>

                {/* Accordion items */}
                <div className={`border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
                    {cols.map((c, i) => {
                        const isOpen = active === i;
                        return (
                            <div
                                key={i}
                                className={`border-b ${isDark ? "border-white/10" : "border-black/10"}`}
                            >
                                {/* Row trigger */}
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 cursor-pointer text-left"
                                    onClick={() => setActive(isOpen ? null : i)}
                                >
                                    <span className={`text-[9px] tracking-[0.4em] uppercase transition-colors duration-300 ${
                                        isOpen
                                            ? isDark
                                                ? "text-[rgba(255,255,221,0.75)]"
                                                : "text-[rgba(0,0,0,0.7)]"
                                            : isDark
                                                ? "text-[rgba(255,255,221,0.3)]"
                                                : "text-[rgba(0,0,0,0.32)]"
                                    }`}>
                                        {c.bottom[language]}
                                    </span>

                                    <span
                                        className={`text-[18px] font-thin leading-none transition-all duration-300 ${
                                            isDark ? "text-[rgba(255,255,221,0.2)]" : "text-[rgba(0,0,0,0.18)]"
                                        }`}
                                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                                    >
                                        +
                                    </span>
                                </button>

                                {/* Expandable body */}
                                <div
                                    style={{
                                        maxHeight: isOpen ? "400px" : "0px",
                                        overflow: "hidden",
                                        transition: "max-height 0.42s cubic-bezier(0.4,0,0.2,1)",
                                    }}
                                >
                                    <p
                                        className={`px-6 pb-8 whitespace-pre-line text-[11px] leading-[2.1] ${
                                            isDark
                                                ? "text-[rgba(255,255,221,0.65)]"
                                                : "text-[rgba(0,0,0,0.62)]"
                                        }`}
                                    >
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

"use client";

import Image from "next/image";
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
                "2022 онд байгуулагдсан “Урбан Уорлд” ХХК\nнь интерьер дизайны зөвлөгөө, зураг төсөл,\nдотоод засал, тохижилт гүйцэтгэх чиглэлээр\nүйл ажиллагаа явуулдаг үндэсний компани.",
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
            className={`relative overflow-hidden py-28 scroll-mt-24 ${
                isDark ? "bg-[#181818] text-[#fffdef]" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
            <div
                className={`pointer-events-none absolute inset-0 ${
                    isDark
                        ? "bg-gradient-to-b from-black/10 via-transparent to-black/20"
                        : "bg-gradient-to-b from-[rgba(244,241,235,0.20)] via-transparent to-black/[0.02]"
                }`}
            />

            <div className="relative container mx-auto max-w-7xl px-6">
                <div className="mb-24">
                    <p
                        className={`mb-3 text-[11px] uppercase tracking-[0.4em] ${
                            isDark ? "text-white" : "text-[#111111]/68"
                        }`}
                    >
                        {language === "mn" ? "БИДНИЙ ТУХАЙ" : "ABOUT"}
                    </p>

                    <h2
                        className={`text-4xl lg:text-5xl leading-tight font-light ${
                            isDark ? "text-white" : "text-[#111111]"
                        }`}
                    >
                        URBAN WORLD LLC
                    </h2>
                </div>

                <div className="relative">
                    {/* background logo */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div
                            className={`relative w-full aspect-[16/7] ${
                                isDark ? "opacity-[0.06]" : "opacity-[0.08]"
                            }`}
                        >
                            <Image
                                src={isDark ? "/uw-logo-Photoroom.png" : "/Unknown-3-Photoroom.png"}
                                alt="logo"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div
                        className="relative grid grid-cols-1 gap-6 md:grid-cols-4"
                        onMouseLeave={() => setActive(null)}
                    >
                        {cols.map((c, i) => {
                            const isActive = active === i;

                            return (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActive(i)}
                                    onClick={() => setActive(active === i ? null : i)}
                                    className="relative flex min-h-[420px] flex-col items-center justify-center"
                                >
                                    {/* hover card only */}
                                    <div
                                        className={[
                                            "absolute inset-0 rounded-[28px] transition-all duration-500 ease-out",
                                            isActive
                                                ? isDark
                                                    ? "border border-white/16 bg-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.30)] backdrop-blur-[2px] opacity-100"
                                                    : "border border-black/8 bg-[rgba(248,245,239,0.70)] shadow-[0_14px_36px_rgba(0,0,0,0.06)] backdrop-blur-[2px] opacity-100"
                                                : "border border-transparent bg-transparent opacity-0",
                                        ].join(" ")}
                                    />

                                    {/* vertical label */}
                                    <div
                                        className={[
                                            "absolute inset-0 flex items-center justify-center transition-all duration-500",
                                            i === 0
                                                ? "translate-x-5 md:translate-x-6"
                                                : "",
                                            isActive
                                                ? "pointer-events-none scale-95 opacity-0 blur-sm"
                                                : "scale-100 opacity-100",
                                        ].join(" ")}
                                    >
                                        <p
                                            className={`text-[11px] md:text-[12px] tracking-[0.32em] md:tracking-[0.42em] ${
                                                isDark ? "text-white/55" : "text-[#111111]/38"
                                            } ${
                                                active === i
                                                    ? "whitespace-normal md:whitespace-nowrap"
                                                    : "whitespace-normal md:whitespace-nowrap"
                                            } rotate-0 md:rotate-90`}
                                        >
                                            {c.bottom[language]}
                                        </p>
                                    </div>

                                    {/* hover content */}
                                    <div
                                        className={[
                                            "absolute inset-0 flex items-center justify-center px-8 transition-all duration-500",
                                            isActive
                                                ? "translate-y-0 opacity-100"
                                                : "pointer-events-none translate-y-4 opacity-0",
                                        ].join(" ")}
                                    >
                                        <div className="max-w-[230px]">
                                            <p
                                                className={`whitespace-pre-line text-center text-[13px] leading-[2.05] tracking-[0.015em] font-light ${
                                                    isDark ? "text-white" : "text-[#111111]"
                                                }`}
                                                style={{ textWrap: "pretty" }}
                                            >
                                                {c.top[language]}
                                            </p>
                                        </div>
                                    </div>

                                    {/* top line */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute left-6 right-6 top-8 h-px transition-all duration-500",
                                            isActive
                                                ? isDark
                                                    ? "bg-white/10"
                                                    : "bg-black/10"
                                                : "bg-transparent opacity-0",
                                        ].join(" ")}
                                    />

                                    {/* bottom line */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute bottom-8 left-6 right-6 h-px transition-all duration-500",
                                            isActive
                                                ? isDark
                                                    ? "bg-white/10"
                                                    : "bg-black/10"
                                                : "bg-transparent opacity-0",
                                        ].join(" ")}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
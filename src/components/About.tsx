"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const journey = [
    {
        stop: "01",
        label: { en: "Vision", mn: "Алсын хараа" },
        description: { en: "Vision", mn: "Алсын хараа" },
        image: "/office-1.jpg",
        text: {
            en: "Set a new standard for interiors that merge quality, precision, and intelligent design.",
            mn: "Чанар, төгс шийдэл, ухаалаг дизайныг хослуулан интерьерийн шинэ стандартыг тогтоох.",
        },
    },
    {
        stop: "02",
        label: { en: "Mission", mn: "Эрхэм зорилго" },
        description: { en: "Mission", mn: "Эрхэм зорилго" },
        image: "/apartment-1.jpg",
        text: {
            en: "Turn every client vision into a built environment with creative, high-quality execution.",
            mn: "Захиалагчдын төсөөллийг чанартай, бүтээлч гүйцэтгэлээр бодит орчин болгож, шинэлэг интерьерийн шийдэл санал болгох.",
        },
    },
    {
        stop: "03",
        label: { en: "Goals", mn: "Зорилт" },
        description: { en: "Goals", mn: "Зорилт" },
        image: "/hotel-3.jpg",
        text: {
            en: "Grow our portfolio of successful builds and expand our position in the market.",
            mn: "Амжилттай хэрэгжүүлсэн төслүүдийн тоог нэмэгдүүлж, зах зээлд байр сууриа өргөжүүлэх.",
        },
    },
];

export default function About() {
    const { language } = useLanguage();
    const [active, setActive] = useState<number>(0);
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleEnter = (index: number) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => setActive(index), 100);
    };

    const handleLeave = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setActive(0);
    };

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#222222] pt-28 text-[#fffdef]"
        >
            <div
                className="
                    container mx-auto max-w-7xl px-6
                    flex flex-col lg:flex-row gap-20
                    items-start lg:items-start
                "
            >
                {/* LEFT TEXT */}
                <div className="flex-1 flex flex-col justify-start">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-[#fffdef] mb-3">
                        {language === "mn" ? "Бидний тухай" : "About us"}
                    </p>

                    <h2 className="text-5xl lg:text-4xl leading-tight font-light text-[#fffdef] mb-4">
                        URBAN W0RLD LLC
                    </h2>

                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#fffdef] mb-8">
                        {language === "mn" ? "Алсын хараа • Эрхэм зорилго • Зорилт" : "Vision • Mission • Goals"}
                    </p>

                    {/* Dynamic vision / mission / goal text */}
                    <div className="max-w-xl space-y-3 transition-all duration-500">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#fffdef]">
                            {journey[active].description[language]}
                        </p>
                        <p className="text-lg leading-relaxed text-[#fffdef] font-light">
                            {journey[active].text[language]}
                        </p>
                    </div>

                    {/* Static company description – always visible */}
                    <div className="max-w-xl mt-10 pt-6 border-t border-slate-200 text-base leading-relaxed text-[#fffdef] space-y-4">
                        <p>
                            {language === "mn"
                                ? "2022 онд байгуулагдсан “Урбан Уорлд” ХХК нь интерьер дизайны зөвлөгөө өгөх, зураг төсөл боловсруулах, дотоод засал, тохижилт гүйцэтгэх чиглэлээр үйл ажиллагаа явуулдаг үндэсний компани юм. Бид богино хугацаанд салбартаа байр сууриа эзэлж, мэргэжлийн бүтээлч залуу багийн хүчээр өсөн дэвшиж байна."
                                : "Urban World LLC was founded in 2022 as a Mongolian interior design practice delivering consulting, design documentation, fit-out, and furnishing. In a short time, our young, creative team has built a strong position in the market."}
                        </p>

                        <p>
                            {language === "mn"
                                ? "Өнгөрсөн хугацаанд бид том, жижиг нийлсэн 30 гаруй төслийг амжилттай гүйцэтгэсэн туршлагатай."
                                : "To date we have completed more than 30 projects of all scales with a focus on quality delivery."}
                        </p>
                    </div>
                </div>

                {/* RIGHT — LARGE CARDS */}
                <div className="flex-1 w-full">
                    <div className="flex h-[440px] md:h-[520px] w-full gap-6">
                        {journey.map((item, index) => {
                            const isActive = index === active;

                            return (
                                <div
                                    key={item.stop}
                                    onMouseEnter={() => handleEnter(index)}
                                    onMouseLeave={handleLeave}
                                    className={[
                                        "relative overflow-hidden cursor-pointer",
                                        "transition-all duration-[550ms] ease-[cubic-bezier(.25,.1,.25,1)]",
                                        isActive
                                            ? "flex-[5] scale-[1.02]"
                                            : "flex-[2.2] scale-[0.99]",
                                    ].join(" ")}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.label[language]}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Gradient for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {isActive ? (
                                        <div className="absolute left-6 right-6 bottom-6 text-white drop-shadow-xl">
                                            <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                                                {item.stop}
                                            </p>
                                            <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                                                {item.label[language]}
                                            </h3>
                                            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/80">
                                                {item.description[language]}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="absolute bottom-14 left-1/2 -translate-x-1/2 rotate-90 text-white/75 text-xl font-light tracking-[0.32em] drop-shadow">
                                            {item.label[language]}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

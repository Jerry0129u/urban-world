"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const journey = [
    {
        stop: "01",
        label: { en: "Vision", mn: "Алсын хараа" },
        description: { en: "Vision", mn: "Алсын хараа" },
        image: "/",
        text: {
            en: "Set a new standard for interiors that merge quality, precision, and intelligent design.",
            mn: "Чанар, төгс шийдэл, ухаалаг дизайныг хослуулан интерьерийн ШИНЭ СТАНДАРТ ТОГТООХ.",
        },
    },
    {
        stop: "02",
        label: { en: "Mission", mn: "Эрхэм зорилго" },
        description: { en: "Mission", mn: "Эрхэм зорилго" },
        image: "/",
        text: {
            en: "Turn every client vision into a built environment with creative, high-quality execution.",
            mn: "Захиалагчдын төсөөллийг чанартай, бүтээлч гүйцэтгэлээр ШИНЭЛЭГ ИНТЕРЬЕРИЙН ШИЙДЭЛ санал болгоно.",
        },
    },
    {
        stop: "03",
        label: { en: "Goals", mn: "Зорилт" },
        description: { en: "Goals", mn: "Зорилт" },
        image: "",
        text: {
            en: "Grow our portfolio of successful builds and expand our position in the market.",
            mn: "Амжилттай хэрэгжүүлсэн төслүүдийн тоог нэмэгдүүлж, зах зээлд БАЙР СУУРИА ӨРГӨЖҮҮЛЭХ.",
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
            className="relative overflow-hidden bg-[#222222] pt-32 pb-12 text-[#fffdef] min-h-screen flex flex-col justify-center"
        >
            <div className="container mx-auto flex max-w-7xl flex-col items-start gap-20 px-6 lg:flex-row lg:items-start">
                {/* LEFT TEXT */}
                <div className="flex flex-1 flex-col justify-start">
                    <p className="mb-3 text-[11px] uppercase tracking-[0.4em]">
                        {language === "mn" ? "Бидний тухай" : "About us"}
                    </p>

                    <h2 className="mb-6 text-5xl leading-tight text-[#fffdef] lg:text-4xl">
                        URBAN W0RLD LLC
                    </h2>

                    {/* Dynamic vision / mission / goal text with animation */}
                    <div className="max-w-xl">
                        <div
                            key={`${language}-${active}`}
                            className="fade-slide-up space-y-3"
                        >
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#fffdef]">
                                {journey[active].description[language]}
                            </p>
                            <p className="text-lg font-light leading-relaxed text-[#fffdef]">
                                {journey[active].text[language]}
                            </p>
                        </div>
                    </div>

                    {/* Static company description – always visible */}
                    <div
                        className={` mt-10 max-w-xl space-y-4 border-t border-slate-200 pt-6 leading-relaxed
                        ${language === "mn" ? "text-sm " : "text-base"}
                    `}
                    >
                        <p>
                            {language === "mn"
                                ? "2022 онд байгуулагдсан “Урбан Уорлд” ХХК нь интерьер дизайны зөвлөгөө өгөх, зураг төсөл боловсруулах, дотоод засал, тохижилт гүйцэтгэх чиглэлээр үйл ажиллагаа явуулдаг үндэсний компани юм. Бид богино хугацаанд салбартаа байр сууриа эзэлж, мэргэжлийн бүтээлч залуу багийн хүчээр өсөн дэвшиж байна."
                                : "Urban World LLC was founded in 2022 as a Mongolian interior design practice delivering consulting, design documentation, fit-out, and furnishing. In a short time, our young, creative team has built a strong position in the market."}
                        </p>

                        <p>
                            {language === "mn"
                                ? "Манай компани нь архитектор, интерьер тавилгын дизайнер болон инженер, техникийн ажилчид зэрэг чиглэл бүрээр мэргэшсэн 20 гаруй мэргэжилтнээс бүрддэг."
                                : "Our company is composed of more than 20 highly skilled professionals, including architects, interior and furniture designers, as well as engineers and technical specialists."}
                        </p>

                        <p>
                            {language === "mn"
                                ? "Өнгөрсөн хугацаанд бид том, жижиг нийлсэн 30 гаруй төслийг амжилттай гүйцэтгэсэн туршлагатай."
                                : "To date we have completed more than 30 projects of all scales with a focus on quality delivery."}
                        </p>
                    </div>
                </div>

                {/* RIGHT — LARGE CARDS */}
                <div className="w-full flex-1">
                    <div className="flex h-[440px] w-full gap-6 md:h-[520px]">
                        {journey.map((item, index) => {
                            const isActive = index === active;

                            return (
                                <div
                                    key={item.stop}
                                    onMouseEnter={() => handleEnter(index)}
                                    onMouseLeave={handleLeave}
                                    className={
                                        "relative cursor-pointer overflow-hidden transition-all duration-[550ms] ease-[cubic-bezier(.25,.1,.25,1)] " +
                                        (isActive
                                            ? "flex-[5] scale-[1.02] bg-[#3a3a3a]"
                                            : "flex-[2.2] scale-[0.99] bg-[#2a2a2a]")
                                    }
                                >
                                    {/* <Image
                                        src={item.image}
                                        alt={item.label[language]}
                                        fill
                                        className="object-cover"
                                    /> */}

                                    {/* Gradient for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {isActive ? (
                                        <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-xl">
                                            <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                                                {item.stop}
                                            </p>
                                            <h3 className="mt-2 text-2xl font-light tracking-tight md:text-3xl lg:text-4xl">
                                                {item.label[language]}
                                            </h3>
                                            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/80">
                                                {item.description[language]}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="absolute bottom-14 left-1/2 -translate-x-1/2 rotate-90 text-xl font-light tracking-[0.32em] text-white/75 drop-shadow">
                                            {item.label[language]}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
                @keyframes fadeSlideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(14px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fade-slide-up {
                    animation: fadeSlideUp 1.2s ease-out;
                }
            `}</style>
        </section>
    );
}
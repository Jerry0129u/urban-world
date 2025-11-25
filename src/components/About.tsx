"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const journey = [
    {
        stop: "01",
        label: "Alsin kharaa",
        description: "Vision",
        image: "/office-1.jpg",
        text: "Чанар, төгс шийдэл, ухаалаг дизайныг хослуулан интерьерийн ШИНЭ СТАНДАРТ тогтоох."
    },
    {
        stop: "02",
        label: "Zorilgo",
        description: "Mission",
        image: "/apartment-1.jpg",
        text: "Захиалагчдын төсөөллийг чанартай, бүтээлч гүйцэтгэлээр бодит орчин болгон, шинэлэг интерьерийн шийдэл санал болгох."
    },
    {
        stop: "03",
        label: "Zorilt",
        description: "Goal",
        image: "/hotel-3.jpg",
        text: "Амжилттай хэрэгжүүлсэн төслүүдийн тоог нэмэгдүүлж, зах зээлд байр сууриа өргөжүүлэх."
    },
];

export default function About() {
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
            className="relative overflow-hidden bg-[#f8f8f8] py-28 text-slate-800"
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
                    <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500 mb-3">
                        About us
                    </p>

                    <h2 className="text-5xl lg:text-6xl leading-tight font-light text-slate-900 mb-4">
                        URBAN W0RLD LLC
                    </h2>

                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 mb-8">
                        Vision • Mission • Goals
                    </p>

                    {/* Dynamic vision / mission / goal text */}
                    <div className="max-w-xl space-y-3 transition-all duration-500">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">
                            {journey[active].description}
                        </p>
                        <p className="text-lg leading-relaxed text-slate-700 font-light">
                            {journey[active].text}
                        </p>
                    </div>

                    {/* Static company description – always visible */}
                    <div className="max-w-xl mt-10 pt-6 border-t border-slate-200 text-sm leading-relaxed text-slate-600 space-y-4">
                        <p>
                            2022 онд байгуулагдсан “Урбан Уорлд” ХХК нь интерьер дизайны зөвлөгөө өгөх,
                            зураг төсөл боловсруулах, дотоод засал, тохижилт гүйцэтгэх чиглэлээр үйл
                            ажиллагаа явуулдаг үндэсний компани юм. Бид богино хугацаанд салбартаа
                            байр сууриа эзэлж, мэргэжлийн бүтээлч залуу багийн хүчээр өсөн дэвшиж байна.
                        </p>

                        <p>
                            Өнгөрсөн богино хугацаанд бид том жижиг нийлсэн 30 гаруй төслийг амжилттай
                            хийж гүйцэтгэсэн туршлагатай.
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
                                        alt={item.label}
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
                                                {item.label}
                                            </h3>
                                            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/80">
                                                {item.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="absolute bottom-14 left-1/2 -translate-x-1/2 rotate-90 text-white/75 text-xl font-light tracking-[0.32em] drop-shadow">
                                            {item.label}
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
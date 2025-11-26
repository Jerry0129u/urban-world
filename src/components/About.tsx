"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const journey = [
    {
        stop: "01",
        label: "Alsin kharaa",
        description: "Vision",
        image: "/office-1.jpg",
        text: "Чанар, төгс шийдэл, ухаалаг дизайныг хослуулан интерьерийн ШИНЭ СТАНДАРТ тогтоох.",
    },
    {
        stop: "02",
        label: "Zorilgo",
        description: "Mission",
        image: "/apartment-1.jpg",
        text: "Захиалагчдын төсөөллийг чанартай, бүтээлч гүйцэтгэлээр бодит орчин болгон, шинэлэг интерьерийн шийдэл санал болгох.",
    },
    {
        stop: "03",
        label: "Zorilt",
        description: "Goal",
        image: "/hotel-3.jpg",
        text: "Амжилттай хэрэгжүүлсэн төслүүдийн тоог нэмэгдүүлж, зах зээлд байр сууриа өргөжүүлэх.",
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
            className="relative overflow-hidden bg-[#222222] pt-28 text-[#fffdef]"
        >
            <div className="container mx-auto flex max-w-7xl flex-col items-start gap-20 px-6 lg:flex-row lg:items-start">
                {/* LEFT TEXT */}
                <div className="flex flex-1 flex-col justify-start">
                    <p className="mb-3 text-[11px] uppercase tracking-[0.4em]">
                        About us
                    </p>

                    <h2 className="mb-4 text-4xl leading-tight text-[#fffdef] lg:text-5xl">
                        URBAN W0RLD LLC
                    </h2>

                    <p className="mb-8 text-[11px] uppercase tracking-[0.35em]">
                        Vision • Mission • Goals
                    </p>

                    {/* Dynamic vision / mission / goal text */}
                    <div className="max-w-xl">
                        {/* active солигдох бүрт шинээр анимэйшн тоглоно */}
                        <div key={active} className="fade-slide-up space-y-3">
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#fffdef]/80">
                                {journey[active].description}
                            </p>
                            <p className="text-lg font-light leading-relaxed text-[#fffdef]">
                                {journey[active].text}
                            </p>
                        </div>
                    </div>

                    {/* Static company description – always visible */}
                    <div className="mt-10 max-w-xl space-y-4 border-t border-slate-200 pt-6 text-base leading-relaxed">
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
                                            ? "flex-[5] scale-[1.02]"
                                            : "flex-[2.2] scale-[0.99]")
                                    }
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
                                        <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-xl">
                                            <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                                                {item.stop}
                                            </p>
                                            <h3 className="mt-2 text-2xl font-light tracking-tight md:text-3xl lg:text-4xl">
                                                {item.label}
                                            </h3>
                                            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/80">
                                                {item.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="absolute bottom-14 left-1/2 -translate-x-1/2 rotate-90 text-xl font-light tracking-[0.32em] text-white/75 drop-shadow">
                                            {item.label}
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
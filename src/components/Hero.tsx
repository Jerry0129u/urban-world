"use client";

import Link from "next/link";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const stats = [
    { value: "30+", label: "амжилттай төсөл" },
    { value: "12", label: "мэргэжлийн гишүүн" },
    { value: "7", label: "хотын бүсэд гүйцэтгэл" },
];

export default function Hero() {
    const { ref, inView } = useInViewAnimation({ threshold: 0.15, once: false });

    return (
        <section
            ref={ref}
            id="home"
            className={`relative bg-[#001517] text-white overflow-hidden min-h-screen snap-start flex items-center scroll-mt-28 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#07353c,_#001517_55%)]" />
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\\'160\\' height=\\'160\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' stroke=\\'%23ffffff\\' stroke-width=\\'0.5\\' opacity=\\'0.4\\'%3E%3Cpath d=\\'M0 .5H40\\'/%3E%3Cpath d=\\'M.5 0V40\\'/%3E%3C/g%3E%3C/svg%3E')]" />
            <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
                <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                            Интерьер • Зураг төсөл • Тохижилт
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm text-white/60 uppercase tracking-[0.4em]">
                                URBAN WORLD LLC
                            </p>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                                Төсөөллийг{" "}
                                <span className="text-white/80">
                                    минималист орон зайд хөрвүүлнэ
                                </span>
                            </h1>
                        </div>
                        <p className="text-base md:text-lg text-white/70 max-w-2xl">
                            Бид төлөвлөлтөөс эхлээд гүйцэтгэл хүртэлх бүх шатны ажлыг нэг дор
                            хариуцан, бизнес болон орон сууцны орчныг цэвэрхэн, ажиллагаатай
                            дизайн шийдлээр тоноглодог.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="#services"
                                className="inline-flex items-center gap-2 rounded-full bg-white text-[#001517] px-6 py-3 text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5"
                            >
                                Үйлчилгээ үзэх →
                            </Link>
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white hover:text-white"
                            >
                                Төслүүд үзэх
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-6 pt-4 text-white/70">
                            {stats.map((item, index) => (
                                <div
                                    key={item.label}
                                    className={`min-w-[120px] transition-all duration-700`}
                                    style={{
                                        transitionDelay: `${inView ? index * 120 : 0}ms`,
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? "translateY(0)" : "translateY(12px)",
                                    }}
                                >
                                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                                    <p className="text-xs uppercase tracking-[0.3em]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="relative transition-all duration-700"
                        style={{
                            transitionDelay: inView ? "200ms" : "0ms",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(20px)",
                        }}
                    >
                        <div className="absolute inset-0 blur-3xl bg-[#3df9e2]/10 -z-10" />
                        <div className="rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur">
                            <div className="flex items-center justify-between text-sm text-white/60">
                                <p>Сүүлийн төслийн зураглал</p>
                                <span className="inline-flex items-center gap-2 text-xs">
                                    2024 / Q3
                                </span>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                                        Оффис интерьер
                                    </p>
                                    <h3 className="text-xl font-semibold mt-2">
                                        River Plaza HQ, УБ
                                    </h3>
                                    <p className="text-sm text-white/70 mt-2">
                                        Хан-Уул дүүрэгт байрлах 260м² оффисын нээлттэй
                                        төлөвлөлт, тавилгын зохион байгуулалт, материалын сонголтыг
                                        цогцоор нь хэрэгжүүлсэн.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.4em]">
                                            Материал
                                        </p>
                                        <p className="text-base font-semibold text-white mt-2">
                                            Черний чулуу + фанер
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.4em]">
                                            Гүйцэтгэл
                                        </p>
                                        <p className="text-base font-semibold text-white mt-2">
                                            45 хоног
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                                        Сэтгэгдэл
                                    </p>
                                    <p className="text-sm text-white/80 mt-2">
                                        “Багийнханд баярлалаа. Минимал дизайн, эргономик шийдэл
                                        хоёрыг яг хүссэнээр маань амжуулж өглөө.” — Захиалагч
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

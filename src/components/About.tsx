"use client";

import Link from "next/link";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const pillars = [
    {
        title: "Алсын хараа",
        description:
            "Чанар, төгс шийдэл, ухаалаг дизайныг хослуулан интерьерийн шинэ стандартыг тогтооно.",
    },
    {
        title: "Зорилго",
        description:
            "Захиалагч бүрийн хэрэгцээг нарийвчлан судалж, бүтээлч төлөвлөлтийг бодит орчинд хөрвүүлнэ.",
    },
    {
        title: "Зорилт",
        description:
            "Гүйцэтгэлийн чанар, хуваарийн сахилгыг нэгдүгээрт тавьж, төслийн менежментийг автоматжуулсан.",
    },
];

const milestones = [
    { year: "2022", detail: "Компани үүсгэн байгуулагдсан" },
    { year: "2023", detail: "25 төсөл амжилттай дуусгасан" },
    { year: "2024", detail: "360° дизайн студийг нэвтрүүлсэн" },
];

export default function About() {
    const { ref, inView } = useInViewAnimation({ threshold: 0.2, once: false });

    return (
        <section
            ref={ref}
            id="about"
            className={`relative py-24 md:py-32 min-h-screen snap-start flex items-center overflow-hidden text-[#0f172a] scroll-mt-28 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,239,255,0.3),_transparent_55%)]" />
            <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#ef68ff]/20 blur-[160px]" />
            <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#60efff]/20 blur-[150px]" />
            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full space-y-16">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-start">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.6em] text-[#0f172a]/50">
                            Бидний тухай
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#0f172a]">
                            Төсөөллийг бодит орон зай болгон хувиргах мультидисциплин баг
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed">
                            “Урбан Уорлд” нь архитектор, интерьер, тавилга, гэрэлтүүлэг,
                            инженерийн багуудыг нэг дээвэр дор нэгтгэсэн бүтээлч студи. Бид
                            дизайн судалгаа, материалын лаборатори, гүйцэтгэлийн инженерчлэлийг
                            уялдуулсан процессоороо ялгардаг.
                        </p>
                        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_30px_70px_rgba(15,23,42,0.12)] p-6 md:p-8 backdrop-blur-xl space-y-6">
                            <span className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-60" />
                            <div className="relative flex flex-col gap-3 text-sm text-slate-600">
                                <p>
                                    Багийн бүрэлдэхүүн: архитектор, интерьер дизайнер, тавилгын
                                    дизайнер, төсөл хариуцсан инженер, техникийн гүйцэтгэгч
                                    нийлсэн 22 мэргэжилтэн.
                                </p>
                                <p>
                                    Бизнес, зочид буудал, орон сууцны төрөл бүрийн захиалгыг
                                    судалгаа → концепц → 3D visualization → материалын сонголт →
                                    гүйцэтгэл гэсэн pipeline-аар явуулдаг.
                                </p>
                            </div>
                            <div className="relative grid grid-cols-3 gap-4 text-center text-[#0f172a]">
                                {[
                                    { label: "Төсөл", value: "32" },
                                    { label: "Салбар", value: "5" },
                                    { label: "Сэтгэл ханамж", value: "98%" },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <p className="text-3xl font-semibold">{item.value}</p>
                                        <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 blur-3xl bg-[#9ef9eb]/40 -z-10" />
                        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.12)] space-y-6 backdrop-blur-xl">
                            <span className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-60" />
                            <div className="relative">
                                <p className="text-xs uppercase tracking-[0.6em] text-slate-400">
                                    Studio timeline
                                </p>
                                <div className="mt-4 space-y-4">
                                    {milestones.map((item) => (
                                        <div
                                            key={item.year}
                                            className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white px-4 py-3 text-sm text-slate-600"
                                        >
                                            <div className="text-lg font-semibold text-[#0f172a]">
                                                {item.year}
                                            </div>
                                            <p className="flex-1">{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative rounded-2xl border border-white/80 bg-white/90 p-5 text-slate-600">
                                <h4 className="text-sm font-semibold text-[#0f172a] mb-2">
                                    Оффисын байршил
                                </h4>
                                <p className="text-sm">
                                    Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, 17-р хороо,
                                    Ривер Плаза, 14 давхарт, 1403 тоот
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-flex mt-4 text-sm text-[#2563eb] underline-offset-4 hover:underline"
                                >
                                    Газрын зураг харах
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-700"
                            style={{
                                transitionDelay: inView ? `${index * 100}ms` : "0ms",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(12px)",
                            }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-50" />
                            <div className="relative">
                                <p className="text-xs uppercase tracking-[0.6em] text-slate-400 mb-3">
                                    Focus
                                </p>
                                <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-slate-600">{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

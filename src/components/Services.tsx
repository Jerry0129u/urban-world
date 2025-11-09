"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const services = [
    {
        tag: "01",
        title: "Мэргэжлийн зөвлөгөө ба төлөвлөлт",
        description:
            "Объектын нөхцөл, хэрэглэгчийн зан төлөв, брэндийн түүхийг судалж концепц гаргана.",
        deliverables: ["Site survey", "Concept board", "Space planning"],
    },
    {
        tag: "02",
        title: "Интерьер дизайн ба техникийн зураг",
        description:
            "2D/3D зураглал, гэрэлтүүлэг, HVAC, тавилгын ерөнхий төлөвлөлтийг нэг баг боловсруулна.",
        deliverables: ["3D visualization", "FF&E schedule", "Tech drawings"],
    },
    {
        tag: "03",
        title: "Дотоод засал, тохижилтын гүйцэтгэл",
        description:
            "Материал нийлүүлэлт, угсралт, чанарын хяналтыг гүйцэтгэлээр нь дагаж, turnkey шилжүүлдэг.",
        deliverables: ["Procurement", "On-site build", "Handover"],
    },
];

const process = [
    { label: "Research", detail: "Байршил, хэрэглэгч, бренд" },
    { label: "Design", detail: "Concept → 3D → Tech" },
    { label: "Build", detail: "Гүйцэтгэл + QA" },
];

export default function Services() {
    const { ref, inView } = useInViewAnimation({ threshold: 0.2, once: false });

    return (
        <section
            ref={ref}
            id="services"
            className={`relative min-h-screen snap-start flex items-center text-[#0f172a] py-24 md:py-32 overflow-hidden scroll-mt-28 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_30%_20%,_rgba(96,239,255,0.25),_rgba(239,104,255,0.2),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(64,152,255,0.25),_transparent_55%)]" />
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.6em] text-[#0f172a]/50">
                            Үйлчилгээ
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                            Судалгаа, дизайн, гүйцэтгэлийн бүх шатыг нэг pipeline-д нэгтгэсэн
                            turnkey үйлчилгээ
                        </h2>
                        <p className="text-slate-600">
                            Бид концепц болон гүйцэтгэлийн хоорондын “handoff” алдагдлыг
                            арилгахын тулд нэг pipeline бий болгосон. Ингэснээр материалын
                            сонголт, төсөв, гүйцэтгэлийн чанар уялдаа сайтай явдаг.
                        </p>
                    </div>
                    <div className="flex gap-6 text-xs uppercase tracking-[0.4em] text-slate-400">
                        {process.map((step) => (
                            <div key={step.label} className="flex flex-col items-start">
                                <span className="text-[#0f172a] text-sm">{step.label}</span>
                                <span className="text-slate-400 tracking-[0.3em]">
                                    {step.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/85 p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur transition duration-700 hover:-translate-y-1"
                            style={{
                                transitionDelay: inView ? `${index * 120}ms` : "0ms",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(14px)",
                            }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-70" />
                            <div className="relative flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[0.6em] text-slate-400">
                                    Phase
                                </span>
                                <span className="text-sm font-mono text-[#0f172a]/70">
                                    {service.tag}
                                </span>
                            </div>
                            <h3 className="relative mt-4 text-2xl font-semibold text-[#0f172a]">
                                {service.title}
                            </h3>
                            <p className="relative mt-3 text-sm text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="relative mt-6">
                                <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                                    Deliverables
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                    {service.deliverables.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 rounded-full bg-slate-100/70 px-3 py-1 text-[#0f172a]"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

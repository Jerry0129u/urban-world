"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const services = [
    {
        label: { en: "CONSULT", mn: "ЗӨВЛӨГӨӨ" },
        title: {
            en: "PROFESSIONAL CONSULTING",
            mn: "МЭРГЭЖЛИЙН ЗӨВЛӨГӨӨ & <br/> ТӨЛӨВЛӨЛТИЙН ШИЙДЭЛ",
        },
        image: "/ser.jpg",
        summary: { en: "", mn: "" },
        details: {
            en: [
                "Site assessment",
                "Planning consultation",
                "Creative solutions",
            ],
            mn: [
                "Объектын судалгаа",
                "Төлөвлөлтийн зөвлөгөө",
                "Шинэлэг шийдэл",
            ],
        },
    },
    {
        label: { en: "DESIGN", mn: "ДИЗАЙН" },
        title: {
            en: "INTERIOR DESIGN & DRAWINGS",
            mn: "ИНТЕРЬЕР ДИЗАЙН & <br/> ЗУРАГ ТӨСӨЛ",
        },
        image: "/1111.jpg",
        summary: { en: "", mn: "" },
        details: {
            en: [
                "On-site measurement",
                "Spatial planning",
                "3D interior renderings",
                "Material selection ",
                "Preliminary cost estimation",
                "Construction drawings",
                "Architectural supervision",
            ],
            mn: [
                "Талбайн хэмжилт",
                "Эзлэхүүн төлөвлөлт",
                "3D интерьер зураглал",
                "Материал сонголт",
                "Урьдчилсан төсөв тооцоолол",
                "Ажлын зураг",
                "Зохиогчийн хяналт",
            ],
        },
    },
    {
        label: { en: "BUILD", mn: "ГҮЙЦЭТГЭЛ" },
        title: {
            en: "PROJECT MANAGEMENT & INTERIOR FIT-OUT",
            mn: "ТӨСЛИЙН МЕНЕЖМЕНТ & <br/> ДОТООД ЗАСАЛ",
        },
        image: "/ser4.jpg",
        summary: { en: "", mn: "" },
        details: {
            en: [
                "Project timeline",
                "Supply of materials",
                "Engineering design and installation",
                "Interior works ",
                "Furniture assembly and installation ",
                "Site waste management",
            ],
            mn: [
                "Төслийн график төлөвлөгөө",
                "Бараа материалын хангамж",
                "Инженерийн төлөвлөлт, угсралт",
                "Дотоод засал",
                "Тавилга угсралт",
                "Хог хаягдлын менежмент",
            ],
        },
    },
];

export default function Services() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <section
            id="services"
            className={`relative overflow-hidden py-28 scroll-mt-24 ${
                isDark ? "bg-[#222222] text-[#fffdef]" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
            <div className="container mx-auto max-w-7xl px-6">
                <div className="mb-12 flex flex-col">
                    <p
                        className={`mb-3 text-[11px] uppercase tracking-[0.4em] ${
                            isDark ? "text-[#fffdef]" : "text-[#111111]/68"
                        }`}
                    >
                        {language === "mn" ? "Үйлчилгээ" : "Service"}
                    </p>

                    <h2
                        className={`mb-4 text-5xl font-light leading-tight lg:text-4xl ${
                            isDark ? "text-[#fffdef]" : "text-[#111111]"
                        }`}
                    >
                        URBAN WORLD LLC
                    </h2>

                    <p
                        className={`mb-8 text-[12px] tracking-[0.35em] ${
                            isDark ? "text-[#fffdef]/75" : "text-[#111111]/58"
                        }`}
                    >
                        {language === "mn"
                            ? "Шийдэл • Зураг төсөл • Гүйцэтгэл"
                            : "consult • design • build"}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title.en}
                            className={`group relative aspect-[4/5] w-full overflow-hidden ${
                                isDark ? "bg-slate-900" : "bg-[#dcd6cc]"
                            }`}
                        >
                            <Image
                                src={service.image}
                                alt={service.title[language]}
                                fill
                                priority
                                className="object-cover transition-all duration-[1400ms] group-hover:scale-105"
                            />

                            <div
                                className={`absolute inset-0 ${
                                    isDark
                                        ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                                        : "bg-gradient-to-t from-[rgba(236,232,225,0.34)] via-[rgba(236,232,225,0.10)] to-transparent"
                                }`}
                            />

                            <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                                <p
                                    className={`text-[10px] uppercase tracking-[0.4em] ${
                                        isDark ? "text-white/60" : "text-[#111111]/58"
                                    }`}
                                >
                                    {service.label[language]}
                                </p>

                                <h3
                                    className={`text-xl font-light leading-snug ${
                                        isDark ? "text-[#fffdef]" : "text-[#111111]"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: service.title[language],
                                    }}
                                />

                                <p
                                    className={`text-xs ${
                                        isDark ? "text-white/70" : "text-[#111111]/58"
                                    }`}
                                >
                                    {service.summary[language]}
                                </p>
                            </div>

                            <div
                                className={`pointer-events-none absolute left-3 top-3 max-w-[250px] translate-x-4 translate-y-4 p-4 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${
                                    isDark
                                        ? "bg-black/70 text-[#fffdef]"
                                        : "border border-black/8 bg-[rgba(248,245,239,0.76)] text-[#111111] shadow-[0_14px_36px_rgba(0,0,0,0.07)]"
                                }`}
                            >
                                <ul className="list-inside list-disc space-y-1.5">
                                    {service.details[language].map((item) => (
                                        <li
                                            key={item}
                                            className={`text-[11px] leading-snug ${
                                                isDark ? "text-[#fffdef]" : "text-[#111111]/90"
                                            }`}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
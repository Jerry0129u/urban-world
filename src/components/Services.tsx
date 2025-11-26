import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
    {
        label: { en: "CONSULT", mn: "ЗӨВЛӨГӨӨ" },
        title: { en: "Professional consulting", mn: "Мэргэжлийн зөвлөгөө" },
        image: "/office-2.jpg",
        summary: { en: "Site study • Planning solution", mn: "Объектын судалгаа • Төлөвлөлтийн шийдэл" },
        details: {
            en: [
                "Site and condition survey",
                "Planning consultation",
                "Solution proposals",
            ],
            mn: [
                "Объектын нөхцөл байдлын судалгаа",
                "Төлөвлөлтийн зөвлөгөө",
                "Шийдэл санал болгох",
            ],
        },
    },
    {
        label: { en: "DESIGN", mn: "ДИЗАЙН" },
        title: { en: "Interior design & drawings", mn: "Интерьер дизайн ба зураг" },
        image: "/apartment-4.jpg",
        summary: { en: "2D / 3D visuals • Technical detailing", mn: "2D / 3D зураглал • Техникийн шийдэл" },
        details: {
            en: [
                "On-site measurement",
                "Space planning (2D layouts)",
                "3D interior renderings",
                "Lighting and HVAC coordination",
                "Furniture planning",
                "Detailed construction drawings",
            ],
            mn: [
                "Талбайн хэмжилт хийх",
                "Төлөвлөлтийн зураг (2D зураглал)",
                "3D интерьер зураглал",
                "Гэрэлтүүлэг, агааржуулалт",
                "Тавилгын төлөвлөлт",
                "Ажлын нарийвчилсан зураг",
            ],
        },
    },
    {
        label: { en: "BUILD", mn: "ГҮЙЦЭТГЭЛ" },
        title: { en: "Fit-out & furnishing", mn: "Дотоод засал, тохижилт" },
        image: "/hotel-6.jpg",
        summary: { en: "Materials • Installation • Furniture", mn: "Материал • Угсралт • Тавилга" },
        details: {
            en: [
                "Quality material recommendations",
                "MEP coordination and install",
                "Interior fit-out and styling",
                "Furniture build and install",
                "Waste management",
            ],
            mn: [
                "Чанартай материал санал болгох",
                "Инженжрийн төлөвлөлт, угсралт",
                "Дотоод засал, тохижилт",
                "Тавилга угсралт",
                "Хог хаягдлын менежмент",
            ],
        },
    },
];

export default function Services() {
    const { language } = useLanguage();

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#222222] py-28 text-[#fffdef] scroll-mt-24"
        >
            <div className="container mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="flex flex-col mb-12">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-[#fffdef] mb-3">
                        {language === "mn" ? "Үйлчилгээ" : "Service"}
                    </p>
                    <h2 className="text-5xl lg:text-4xl leading-tight font-light text-[#fffdef] mb-4">
                        URBAN W0RLD LLC
                    </h2>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#fffdef] mb-8">
                        {language === "mn" ? "зөвлөгөө • дизайн • гүйцэтгэл" : "consult • design • build"}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title.en}
                            className="group relative aspect-[4/5] w-full overflow-hidden bg-slate-900"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title[language]}
                                fill
                                priority
                                className="object-cover object-center transition-all duration-[1400ms] group-hover:scale-105"
                            />

                            {/* Dark cinematic gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Static bottom text */}
                            <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                                    {service.label[language]}
                                </p>
                                <h3 className="text-xl font-light md:text-2xl">
                                    {service.title[language]}
                                </h3>
                                <p className="text-xs text-white/70">
                                    {service.summary[language]}
                                </p>
                            </div>

                            {/* Hover info card */}
                            <div
                                className="
                                    pointer-events-none absolute left-3 top-3 max-w-[250px]
                                    translate-y-4 translate-x-4 opacity-0
                                    bg-black/70 p-4 backdrop-blur-xl
                                    transition-all duration-500 group-hover:pointer-events-auto
                                    group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100
                                "
                            >
                                <ul className="list-disc list-inside space-y-1.5">
                                    {service.details[language].map((item) => (
                                        <li
                                            key={item}
                                            className="text-[11px] leading-snug"
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

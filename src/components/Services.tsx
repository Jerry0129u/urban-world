import Image from "next/image";

const services = [
    {
        label: "ЗӨВЛӨГӨӨ",
        title: "Мэргэжлийн зөвлөгөө",
        image: "/office-2.jpg",
        summary: "Объектын судалгаа • Төлөвлөлтийн шийдэл",
        details: [
            "Объектын нөхцөл байдлын судалгаа",
            "Төлөвлөлтийн зөвлөгөө",
            "Шийдэл санал болгох",
        ],
    },
    {
        label: "ДИЗАЙН",
        title: "Интерьер дизайн ба зураг",
        image: "/apartment-4.jpg",
        summary: "2D / 3D зураглал • Техникийн шийдэл",
        details: [
            "Талбайн хэмжилт хийх",
            "Төлөвлөлтийн зураг (2D зураглал)",
            "3D интерьер зураглал",
            "Гэрэлтүүлэг, агааржуулалт",
            "Тавилгын төлөвлөлт",
            "Ажлын нарийвчилсан зураг",
        ],
    },
    {
        label: "ГҮЙЦЭТГЭЛ",
        title: "Дотоод засал, тохижилт",
        image: "/hotel-6.jpg",
        summary: "Материал • Угсралт • Тавилга",
        details: [
            "Чанартай материал санал болгох",
            "Инженжрийн төлөвлөлт, угсралт",
            "Дотоод засал, тохижилт",
            "Тавилга угсралт",
            "Хог хаягдлын менежмент",
        ],
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative w-full overflow-hidden bg-[#0D0E11] text-white scroll-mt-24"
        >
            {/* Section Header */}
            <div className="w-full px-6 py-16 flex flex-col items-center text-center">
                <p className="text-[11px] uppercase tracking-[0.55em] text-slate-500">
                    ҮЙЛЧИЛГЭЭ
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-light leading-tight">
                    Мэргэжлийн зөвлөгөө • Дизайн • Гүйцэтгэл
                </h2>
            </div>

            {/* Full-width Grid */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 px-6 pb-20">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-900"
                    >
                        {/* Background Image */}
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            priority
                            className="object-cover object-center transition-all duration-[1400ms] group-hover:scale-110"
                        />

                        {/* Dark cinematic gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Static bottom text */}
                        <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                                {service.label}
                            </p>
                            <h3 className="text-xl font-light md:text-2xl">
                                {service.title}
                            </h3>
                            <p className="text-xs text-white/70">{service.summary}</p>
                        </div>

                        {/* Hover info card */}
                        <div
                            className="
                                pointer-events-none absolute left-4 top-4 max-w-[260px]
                                translate-y-4 translate-x-4 opacity-0
                                rounded-xl bg-black/70 p-4 backdrop-blur-xl
                                transition-all duration-500 group-hover:pointer-events-auto
                                group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100
                            "
                        >
                            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-slate-300">
                                {service.label}
                            </p>
                            <p className="mb-2 text-sm font-medium text-white">
                                {service.title}
                            </p>
                            <ul className="list-disc list-inside space-y-1.5">
                                {service.details.map((item) => (
                                    <li key={item} className="text-[11px] leading-snug">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <p className="pb-12 text-center text-xs uppercase tracking-[0.5em] text-slate-600">
                consult • design • build
            </p>
        </section>
    );
}
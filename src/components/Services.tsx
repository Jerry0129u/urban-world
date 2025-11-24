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
            className="room-section relative overflow-hidden text-slate-900 scroll-mt-24"
        >
            <div className="container mx-auto flex w-full flex-col gap-10 px-4 py-12 lg:py-16">
                <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
                        ҮЙЛЧИЛГЭЭ
                    </p>
                    <h2 className="text-3xl font-light md:text-4xl">
                        Мэргэжлийн зөвлөгөө. Дизайн. Гүйцэтгэл.
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative h-[300px] overflow-hidden border border-slate-200 bg-white md:h-[360px]"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                priority
                                className="object-cover object-center transition duration-700 group-hover:scale-105"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />

                            {/* Доорх нь hover дээр гарч ирэх лист блок */}
                            <div className="pointer-events-none absolute inset-0">
                                <div
                                    className="
                                        pointer-events-auto
                                        absolute left-4 top-4
                                        max-w-[260px]
                                        rounded-2xl
                                        bg-slate-900/85
                                        p-4
                                        text-xs
                                        text-slate-50
                                        opacity-0
                                        -translate-y-4
                                        -translate-x-4
                                        transition-all
                                        duration-500
                                        group-hover:opacity-100
                                        group-hover:translate-y-0
                                        group-hover:translate-x-0
                                    "
                                >
                                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-slate-300">
                                        {service.label}
                                    </p>
                                    <p className="mb-2 text-sm font-medium">
                                        {service.title}
                                    </p>
                                    <ul className="space-y-1.5 list-disc list-inside">
                                        {service.details.map((item) => (
                                            <li key={item} className="text-[11px] leading-snug">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Доод талын үндсэн гарчиг, товч тайлбар (hover-гүй үед ч харагдана) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent mix-blend-multiply" />
                            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/70">
                                    {service.label}
                                </p>
                                <h3 className="text-xl font-light text-white md:text-2xl">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-white/70">
                                    {service.summary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                    consult • design • build
                </p>
            </div>
        </section>
    );
}

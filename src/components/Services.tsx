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
            <div className="container mx-auto flex w-full flex-col items-center gap-10 px-4 py-12 text-center lg:py-16">
                <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.5em] text-[#001517]/60">
                        ҮЙЛЧИЛГЭЭ
                    </p>
                    <h2 className="text-3xl font-light md:text-4xl text-[#001517]">
                        Мэргэжлийн зөвлөгөө. Дизайн. Гүйцэтгэл.
                        </h2>
                    </div>

                <div className="grid w-full max-w-6xl gap-8 md:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group flex flex-col gap-3 bg-white text-[#001517] border border-[#0015171f] transition duration-200 hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    priority
                                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                            <div className="flex flex-col gap-2 px-4 pb-5">
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#001517]/60">
                                    {service.label}
                                </p>
                                <h3 className="text-xl font-light text-[#001517]">{service.title}</h3>
                                <p className="text-sm text-[#001517]/80">{service.summary}</p>
                                <ul className="mt-2 space-y-1 text-xs text-[#001517]/70">
                                    {service.details.map((item) => (
                                        <li key={item} className="leading-snug">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-xs uppercase tracking-[0.5em] text-[#001517]/50">
                    consult • design • build
                </p>
            </div>
        </section>
    );
}

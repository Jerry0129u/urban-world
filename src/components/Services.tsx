const services = [
    {
        title: "1. Мэргэжлийн зөвлөгөө ба төлөвлөлтийн шийдэл",
        points: [
            "Объектын нөхцөл байдлын судалгаа",
            "Төлөвлөлтийн зөвлөгөө",
            "Шийдэл санал болгох",
        ],
    },
    {
        title: "2. Интерьер дизайн ба техникийн зураг",
        points: [
            "Талбайн хэмжилт хийх",
            "2D төлөвлөлтийн зураг",
            "3D интерьер зураглал",
            "Гэрэлтүүлэг, агааржуулалт",
            "Тавилгын төлөвлөлт",
            "Ажлын нарийвчилсан зураг",
        ],
    },
    {
        title: "3. Дотоод засал, тохижилтын гүйцэтгэл",
        points: [
            "Чанартай материал санал болгох",
            "Инженерийн төлөвлөлт, угсралт",
            "Дотоод засал, тохижилт",
            "Тавилга угсралт",
            "Хог хаягдлын менежмент",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#001517] mb-3">
                        Үйлчилгээ
                    </h2>
                    <p className="text-slate-600">
                        Үндсэн гурван чиглэлээрээ захиалагчийн хэрэгцээг цогцоор нь
                        шийднэ.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white rounded-xl border p-6 flex flex-col gap-3"
                        >
                            <h3 className="font-semibold text-[#001517]">{service.title}</h3>
                            <ul className="text-sm text-slate-600 space-y-1">
                                {service.points.map((p) => (
                                    <li key={p}>• {p}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

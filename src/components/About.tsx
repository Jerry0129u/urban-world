export default function About() {
    return (
        <section
            id="about"
            className="py-16 md:py-20 bg-white scroll-mt-24 min-h-screen flex items-center"
        >
            <div className="container mx-auto w-full px-4 space-y-12">
                <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#001517] mb-3">
                        Бидний тухай
                    </h2>
                    <p className="text-slate-600">
                        2022 онд байгуулагдсан “Урбан Уорлд” ХХК нь интерьер дизайны
                        зөвлөгөө өгөх, зураг төсөл боловсруулах, дотоод засал, тохижилт
                        гүйцэтгэх чиглэлээр үйл ажиллагаа явуулдаг үндэсний компани.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="rounded-xl border p-6">
                        <h3 className="font-semibold mb-2 text-[#001517]">Алсын хараа</h3>
                        <p className="text-sm text-slate-600">
                            Чанар, төгс шийдэл, ухаалаг дизайныг хослуулан интерьерийн ШИНЭ
                            СТАНДАРТ тогтоох.
                        </p>
                    </div>
                    <div className="rounded-xl border p-6">
                        <h3 className="font-semibold mb-2 text-[#001517]">Зорилго</h3>
                        <p className="text-sm text-slate-600">
                            Захиалагчдын төсөөллийг бүтээлч гүйцэтгэлээр бодит орчныг
                            цогцлоон, шинэлэг интерьерийн шийдэл санал болгох.
                        </p>
                    </div>
                    <div className="rounded-xl border p-6">
                        <h3 className="font-semibold mb-2 text-[#001517]">Зорилт</h3>
                        <p className="text-sm text-slate-600">
                            Амжилттай хэрэгжүүлсэн төслүүдийн тоог нэмэгдүүлж, зах зээлд
                            байр сууриа өргөжүүлэх.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-[1.1fr_.9fr] gap-10 items-start">
                    <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                        <p>
                            Манай компани нь архитектор, интерьер, тавилгын дизайнер болон
                            инженер техникийн ажилчид зэрэг чиглэл бүрээр мэргэшсэн 20 гаруй
                            мэргэжилтнээс бүрддэг.
                        </p>
                        <p>
                            Богино хугацаанд том жижиг 30 гаруй төслийг амжилттай хийж
                            гүйцэтгэсэн.
                        </p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-5 border">
                        <h4 className="font-semibold mb-2 text-[#001517]">Оффисын байршил</h4>
                        <p className="text-sm text-slate-600">
                            Монгол улс, Улаанбаатар хот,
                            <br /> Хан-Уул дүүрэг, 17-р хороо,
                            <br /> Ривер Плаза, 14 давхарт, 1403 тоот
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex mt-4 text-sm text-[#001517] underline-offset-4 hover:underline"
                        >
                            Газрын зураг харах
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

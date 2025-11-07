export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#001517] mb-3">
                        Холбоо барих
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Хамтран ажиллах санал, интерьер / дотоод заслын төслөө илгээгээрэй.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700">
                        <li>
                            <span className="font-semibold">Утас:</span> +976-8888 7675
                        </li>
                        <li>
                            <span className="font-semibold">И-мэйл:</span>{" "}
                            <a href="mailto:info@urbanworld.mn" className="text-[#001517]">
                                info@urbanworld.mn
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">Хаяг:</span> Монгол улс,
                            Улаанбаатар хот, Хан-Уул дүүрэг, 17-р хороо, Ривер Плаза, 14
                            давхарт, 1403 тоот
                        </li>
                        <li>
                            <span className="font-semibold">Instagram:</span>{" "}
                            <a
                                href="https://www.instagram.com/urbanworld_llc"
                                className="text-[#001517]"
                            >
                                @urbanworld_llc
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">LinkedIn:</span>{" "}
                            <a
                                href="https://www.linkedin.com/company/urban-world-llc"
                                className="text-[#001517]"
                            >
                                Urban World LLC
                            </a>
                        </li>
                    </ul>
                    <p className="text-xs text-slate-400 mt-4">
                        Газрын зураг: Google Maps embed дараа нь нэм.
                    </p>
                </div>

                <form className="bg-white rounded-xl border p-6 space-y-4">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Нэр</label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-lg border-slate-200 focus:border-[#001517] focus:ring-[#001517]/10"
                            placeholder="Таны нэр"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">И-мэйл</label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-lg border-slate-200 focus:border-[#001517] focus:ring-[#001517]/10"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">
                            Төслийн товч мэдээлэл
                        </label>
                        <textarea
                            rows={4}
                            className="mt-1 w-full rounded-lg border-slate-200 focus:border-[#001517] focus:ring-[#001517]/10"
                            placeholder="Оффис дотоод засал, 3D зураг, гүйцэтгэл гэх мэт…"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-lg bg-[#001517] text-white px-4 py-2 text-sm font-semibold"
                    >
                        Хамтран ажиллах санал илгээх
                    </button>
                </form>
            </div>
        </section>
    );
}

export default function Hero() {
    return (
        <section id="home" className="relative bg-[#001517] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white,_transparent_55%)]" />
            <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 space-y-6">
                    <p className="inline-flex bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em]">
                        Интерьер • Зураг төсөл • Гүйцэтгэл
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Төсөөллөөс <span className="text-white/80">төгс шийдэл…</span>
                    </h1>
                    <p className="text-white/70 max-w-2xl">
                        Urban World LLC нь интерьер дизайны зөвлөгөө өгөх, зураг төсөл
                        боловсруулах, дотоод засал, тохижилт гүйцэтгэх цогц үйлчилгээ
                        үзүүлдэг үндэсний компани.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#services"
                            className="inline-flex items-center rounded-lg bg-white text-[#001517] px-5 py-2.5 text-sm font-semibold"
                        >
                            Үйлчилгээ үзэх
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold"
                        >
                            Төслүүд үзэх
                        </a>
                    </div>
                </div>
                <div className="flex-1 max-w-md md:max-w-sm bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-sm text-white/60 mb-3">Манай сүүлийн ажлууд:</p>
                    <ul className="space-y-3 text-sm">
                        <li className="border-b border-white/5 pb-3">
                            • Оффис интерьер – 2024 / ХУД
                        </li>
                        <li className="border-b border-white/5 pb-3">
                            • Зочид буудлын лобби шинэчлэлт
                        </li>
                        <li>• Резиденс орон сууцны тохижилт</li>
                    </ul>
                    <p className="text-xs text-white/40 mt-4">30+ төсөл амжилттай.</p>
                </div>
            </div>
        </section>
    );
}

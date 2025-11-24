import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="room-section relative min-h-screen w-full overflow-hidden bg-white text-slate-900 scroll-mt-24"
        >
            <div className="absolute inset-0">
                <Image
                    src="/5.jpg"
                    alt="Urban World walkthrough"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-100 zoom-in-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-b" />
            </div>
            <div className="relative z-10 flex min-h-screen flex-col justify-between">
                <div className="container mx-auto w-full px-4 pt-32 md:pt-40">
                    <div className="max-w-3xl space-y-6">
                        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.6em] text-slate-500">
                            <span className="h-px w-10 bg-slate-300" />
                            guided interior walk
                        </p>
                        <h1 className="text-4xl font-light leading-tight md:text-6xl">
                            Feel the space before you step inside.
                        </h1>
                        <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.4em] text-slate-500 md:flex-row md:items-center">
                            <span>Entrance → Lounge → Studio</span>
                            <span className="hidden h-px flex-1 bg-slate-200 md:block" />
                            <span className="text-slate-900">Urban World LLC</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

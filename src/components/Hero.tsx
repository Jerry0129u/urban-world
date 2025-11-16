import Image from "next/image";

const scenes = [
    {
        title: "Lobby glow",
        detail: "warm brass + velvet",
        image: "/hotel-2.jpg",
    },
    {
        title: "Residence hush",
        detail: "soft daylight",
        image: "/apartment-2.jpg",
    },
    {
        title: "Studio focus",
        detail: "graphite workspace",
        image: "/office-3.jpg",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="room-section relative min-h-screen w-full overflow-hidden bg-black text-white scroll-mt-24"
        >
            <div className="absolute inset-0">
                <Image
                    src="/office-4.jpg"
                    alt="Urban World walkthrough"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
            </div>
            <div className="relative z-10 flex min-h-screen flex-col justify-between">
                <div className="container mx-auto w-full px-4 pt-32 md:pt-40">
                    <div className="max-w-3xl space-y-6">
                        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.6em] text-white/70">
                            <span className="h-px w-10 bg-white/40" />
                            guided interior walk
                        </p>
                        <h1 className="text-4xl font-light leading-tight md:text-6xl">
                            Feel the space before you step inside.
                        </h1>
                        <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.4em] text-white/70 md:flex-row md:items-center">
                            <span>Entrance → Lounge → Studio</span>
                            <span className="hidden h-px flex-1 bg-white/30 md:block" />
                            <span className="text-white">Urban World LLC</span>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto w-full px-4 pb-12">
                    <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:flex-row">
                        {scenes.map((scene) => (
                            <div key={scene.title} className="flex flex-1 flex-col gap-3">
                                <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10">
                                    <Image
                                        src={scene.image}
                                        alt={scene.title}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <p className="absolute bottom-3 left-4 text-sm uppercase tracking-[0.3em] text-white">
                                        {scene.title}
                                    </p>
                                </div>
                                <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                                    {scene.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";

const journey = [
    {
        stop: "01",
        label: "Entrance briefing",
        description: "intention",
        image: "/office-1.jpg",
    },
    {
        stop: "02",
        label: "Living hush",
        description: "texture study",
        image: "/apartment-1.jpg",
    },
    {
        stop: "03",
        label: "Lounge glow",
        description: "lighting pass",
        image: "/hotel-3.jpg",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="room-section bg-black py-20 text-white scroll-mt-24"
        >
            <div className="container mx-auto flex w-full flex-col gap-12 px-4">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.6em] text-white/60">
                            Walkthrough route
                        </p>
                        <h2 className="text-3xl font-light md:text-5xl">Follow the rooms.</h2>
                    </div>
                    <p className="max-w-sm text-sm text-white/70">
                        Urban World choreographs each interior as a calm procession. Minimal text,
                        more feeling.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-[260px_1fr]">
                    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 p-6">
                        <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                            Start → End
                        </p>
                        <div className="space-y-2 text-sm">
                            <p className="text-white/90">Entrance briefing — Residence hush — Lounge glow.</p>
                            <p className="text-white/60">
                                We guide clients room by room, so each step feels like walking the finished space.
                            </p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.6em] text-white/40">
                            30+ walkthroughs
                        </span>
                    </div>
                    <div className="grid gap-8">
                        {journey.map((item) => (
                            <div
                                key={item.stop}
                                className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 60vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                                            {item.stop}
                                        </p>
                                        <h3 className="text-2xl font-light">{item.label}</h3>
                                    </div>
                                    <span className="text-xs uppercase tracking-[0.5em] text-white/70">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

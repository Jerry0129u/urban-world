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
        <section id="about" className="room-section relative overflow-hidden text-slate-900 scroll-mt-24">
            <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" aria-hidden="true" />
            <div className="relative z-10 container mx-auto flex w-full flex-col gap-12 px-4 py-12 lg:py-16">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.6em] text-slate-500">
                            Walkthrough route
                        </p>
                        <h2 className="text-3xl font-light md:text-5xl">Follow the rooms.</h2>
                    </div>
                    <p className="max-w-sm text-sm text-slate-600">
                        Urban World choreographs each interior as a calm procession. Minimal text,
                        more feeling.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                    <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/60">
                        <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
                            Start → End
                        </p>
                        <div className="space-y-2 text-sm">
                            <p className="text-slate-900">Entrance briefing — Residence hush — Lounge glow.</p>
                            <p className="text-slate-600">
                                We guide clients room by room, so each step feels like walking the finished space.
                            </p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.6em] text-slate-400">
                            30+ walkthroughs
                        </span>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {journey.map((item) => (
                            <div
                                key={item.stop}
                                className="relative h-[260px] overflow-hidden rounded-[32px] border border-slate-200 bg-white md:h-[300px]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 768px) 60vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent mix-blend-multiply" />
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

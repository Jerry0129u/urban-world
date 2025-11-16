import Image from "next/image";

const rooms = [
    {
        label: "plan",
        title: "Briefing table",
        image: "/office-2.jpg",
    },
    {
        label: "render",
        title: "Mood study",
        image: "/apartment-4.jpg",
    },
    {
        label: "build",
        title: "Finish pass",
        image: "/hotel-6.jpg",
    },
];

export default function Services() {
    return (
        <section id="services" className="room-section relative overflow-hidden text-slate-900 scroll-mt-24">
            <div className="container mx-auto flex w-full flex-col gap-10 px-4 py-12 lg:py-16">
                <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
                        Three gestures
                    </p>
                    <h2 className="text-3xl font-light md:text-4xl">Plan. Render. Build.</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {rooms.map((room) => (
                        <div
                            key={room.title}
                            className="group relative h-[300px] overflow-hidden rounded-[30px] border border-slate-200 bg-white md:h-[360px]"
                        >
                            <Image
                                src={room.image}
                                alt={room.title}
                                fill
                                className="object-cover object-center transition duration-700 group-hover:scale-105"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent mix-blend-multiply" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                                    {room.label}
                                </p>
                                <h3 className="text-2xl font-light text-white">{room.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-xs uppercase tracking-[0.6em] text-slate-400">
                    touch every surface • light every corner
                </p>
            </div>
        </section>
    );
}

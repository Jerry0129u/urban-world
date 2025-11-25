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
        <section id="about" className="room-section relative overflow-hidden text-[#001517] scroll-mt-24">
            <div className="container mx-auto flex w-full flex-col items-center gap-10 px-4 py-12 text-center lg:py-16">
                <div className="flex max-w-3xl flex-col gap-3 items-center">
                    <p className="text-xs uppercase tracking-[0.6em] text-[#001517]/60">Walkthrough route</p>
                    <h2 className="text-3xl font-light md:text-5xl text-[#001517]">Follow the rooms.</h2>
                    <p className="max-w-2xl text-sm text-[#001517]/70">
                        Urban World choreographs each interior as a calm procession. Minimal text, more feeling.
                    </p>
                </div>
                <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {journey.map((item) => (
                        <figure key={item.stop} className="flex flex-col gap-3 bg-white border border-[#0015171f]">
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover object-center transition duration-500 hover:scale-[1.03]"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                            <figcaption className="flex flex-col gap-1 px-3 pb-4 text-left text-[#001517]">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-[#001517]/60">
                                    {item.stop} • {item.description}
                                </p>
                                <h3 className="text-xl font-light">{item.label}</h3>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";

const gallery = [
    {
        id: "office-2024",
        title: "Office drift",
        location: "ХУД, UB",
        image: "/office-4.jpg",
    },
    {
        id: "hotel-lobby",
        title: "Lobby glow",
        location: "Downtown",
        image: "/hotel-1.jpg",
    },
    {
        id: "apartment-1",
        title: "Residence calm",
        location: "СБД",
        image: "/apartment-1.jpg",
    },
    {
        id: "studio",
        title: "Studio hush",
        location: "Creative hub",
        image: "/office-3.jpg",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="room-section bg-gradient-to-b from-black via-[#040b0f] to-black py-20 text-white scroll-mt-24"
        >
            <div className="container mx-auto flex w-full flex-col gap-10 px-4">
                <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-[0.6em] text-white/50">
                        walk the work
                    </p>
                    <h2 className="text-3xl font-light md:text-5xl">Rooms in sequence.</h2>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex h-[480px] gap-6 pb-6 pr-6">
                        {gallery.map((project) => (
                            <div
                                key={project.id}
                                className="group relative min-w-[260px] flex-1 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 md:min-w-[380px]"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                                        {project.location}
                                    </p>
                                    <h3 className="text-3xl font-light">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-xs uppercase tracking-[0.6em] text-white/40">
                    swipe to keep walking →
                </p>
            </div>
        </section>
    );
}

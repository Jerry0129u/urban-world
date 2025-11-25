import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden bg-black text-white"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/mojon.jpg"
                    alt="Urban World walkthrough"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105 animate-slowZoom"
                />
                {/* Soft cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-16">
                <div className="max-w-3xl space-y-6">
                    <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-300">
                        <span className="h-px w-10 bg-gray-500" />
                        guided interior walk
                    </p>

                    <h1 className="text-4xl font-light leading-tight md:text-6xl">
                        Imagine the space <br /> before it becomes reality.
                    </h1>

                    <p className="max-w-xl text-gray-300 leading-relaxed text-base md:text-lg">
                        Urban World LLC — Интерьер дизайн, зураг төсөл,
                        дотоод засал, тохижилтын гүйцэтгэлийг цогцоор нь
                        үзүүлдэг орчин үеийн интерьер студи.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-4">
                        <Link
                            href="#services"
                            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 transition"
                        >
                            View Services
                        </Link>

                        <Link
                            href="#projects"
                            className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>

            {/* Zoom animation */}
            <style jsx>{`
                @keyframes slowZoom {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.2);
                    }
                }
                .animate-slowZoom {
                    animation: slowZoom 18s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    );
}
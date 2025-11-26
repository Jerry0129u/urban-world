import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
    const { language } = useLanguage();

    const copy = {
        tagline: {
            en: "interior",
            mn: "интерьер",
        },
        title: {
            en: ["Imagine the space", "before it becomes reality."],
            mn: ["Төсөөллөөс төгс шийдэл."],
        },
        description: {
            en: "Urban World LLC — full-service studio for interior consulting, design documentation, fit-out, and furnishing.",
            mn: "Urban World LLC — интерьер дизайны зөвлөгөө, зураг төсөл, дотоод засал, тохижилтын цогц үйлчилгээ үзүүлэгч компани.",
        },
        servicesCta: {
            en: "View Services",
            mn: "Үйлчилгээ үзэх",
        },
        projectsCta: {
            en: "View Projects",
            mn: "Төслүүд үзэх",
        },
    };

    const titleLines = copy.title[language];

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
                    <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-[#fffdef]">
                        <span className="h-px w-10 bg-gray-500" />
                        {copy.tagline[language]}
                    </p>

                    <h1 className="text-4xl font-light leading-tight md:text-6xl text-[#fffdef]">
                        {titleLines.map((line) => (
                            <span
                                key={line}
                                className="block whitespace-normal md:whitespace-nowrap"
                            >
                                {line}
                            </span>
                        ))}
                    </h1>

                    <p className="max-w-xl text-[#fffdef] leading-relaxed text-base md:text-lg">
                        {copy.description[language]}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-4">
                        <Link
                            href="#services"
                            className="bg-[#444444] px-6 py-3 text-sm font-medium text-[#fffdef] hover:bg-[#989898] transition"
                        >
                            {copy.servicesCta[language]}
                        </Link>

                        <Link
                            href="#projects"
                            className="border border-[#fffdef] px-6 py-3 text-sm font-medium text-[#fffdef] hover:bg-white/20 transition"
                        >
                            {copy.projectsCta[language]}
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

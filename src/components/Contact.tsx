import Image from "next/image";

export default function Contact() {
    return (
        <section
            id="contact"
            className="room-section relative min-h-screen overflow-hidden bg-black text-white scroll-mt-24"
        >
            <div className="absolute inset-0">
                <Image
                    src="/hotel-2.jpg"
                    alt="Urban World contact scene"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="relative z-10">
                <div className="container mx-auto flex min-h-screen flex-col justify-center px-4 py-20">
                    <div className="max-w-xl rounded-[32px] border border-white/15 bg-black/60 p-8 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.6em] text-white/60">
                            reach out
                        </p>
                        <h2 className="mt-3 text-3xl font-light">Step inside with us.</h2>
                        <div className="mt-8 space-y-4 text-sm uppercase tracking-[0.3em] text-white/80">
                            <p>+976 8888 7675</p>
                            <a href="mailto:info@urbanworld.mn" className="hover:text-white">
                                info@urbanworld.mn
                            </a>
                            <p>River Plaza 1403 · Хан-Уул</p>
                            <p>@urbanworld_llc</p>
                        </div>
                        <form className="mt-10 space-y-4 text-black">
                            <input
                                type="text"
                                placeholder="Нэр"
                                className="w-full rounded-full border border-white/20 bg-white/90 px-5 py-3 text-sm uppercase tracking-[0.3em]"
                            />
                            <input
                                type="email"
                                placeholder="И-мэйл"
                                className="w-full rounded-full border border-white/20 bg-white/90 px-5 py-3 text-sm uppercase tracking-[0.3em]"
                            />
                            <textarea
                                rows={3}
                                placeholder="Төслийн товч"
                                className="w-full rounded-[24px] border border-white/20 bg-white/90 px-5 py-4 text-sm uppercase tracking-[0.3em]"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm uppercase tracking-[0.4em] text-white"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { type CSSProperties, type FormEvent } from "react";

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <circle
            cx="12"
            cy="12"
            r="4.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
            fill="currentColor"
            d="M6.5 9h2.8v9H6.5zM5.9 6.5a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0zm5.7 2.5h2.7V13h.04c.38-.7 1.32-1.44 2.72-1.44 2.9 0 3.44 1.9 3.44 4.4V18h-2.8v-2.6c0-1.2-.02-2.8-1.72-2.8-1.72 0-1.99 1.3-1.99 2.7V18h-2.39z"
        />
    </svg>
);

const socialLinks = [
    {
        name: "Instagram",
        username: "@urbanworld_llc",
        url: "https://www.instagram.com/urbanworld_llc",
        Icon: InstagramIcon,
    },
    {
        name: "LinkedIn",
        username: "Urban World LLC",
        url: "https://www.linkedin.com/company/urban-world-llc",
        Icon: LinkedinIcon,
    },
];

export default function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        const data = new FormData(form);
        const name = (data.get("name") as string | null)?.trim() ?? "";
        const email = (data.get("email") as string | null)?.trim() ?? "";
        const brief = (data.get("brief") as string | null)?.trim() ?? "";

        const subject = encodeURIComponent("Urban World project inquiry");

        const bodyLines = [
            "New inquiry via urbanworld.mn",
            name && `Name: ${name}`,
            email && `Email: ${email}`,
            brief && `Project notes: ${brief}`,
        ].filter(Boolean);

        const body = encodeURIComponent(bodyLines.join("\n"));
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@urbanworld.mn&su=${subject}&body=${body}`;
        const mailtoFallback = `mailto:info@urbanworld.mn?subject=${subject}&body=${body}`;

        if (typeof window !== "undefined") {
            const newWindow = window.open(gmailUrl, "_blank");
            if (!newWindow) window.location.href = mailtoFallback;
        }

        form.reset();
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen w-full bg-[#222222] text-[#fffdef] scroll-mt-24"
        >
            <div className="mx-auto w-full max-w-7xl px-8 py-32">
                <h2 className="mb-16 text-3xl md:text-4xl font-light tracking-wide">
                    Contact Us
                </h2>

                <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
                    {/* LEFT CONTACT CARD */}
                    <div className="bg-white/5 p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.45)]">
                        <div className="space-y-2 text-sm tracking-wide text-[#fffdef]">
                            <p>+976 8888 7675</p>
                            <p>info@urbanworld.mn</p>
                            <p>River Plaza 1403 · Хан-Уул</p>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="mt-12">
                            <p className="text-xs uppercase tracking-[0.4em] text-[#fffdef]">
                                SOCIAL
                            </p>

                            <div className="mt-5 space-y-3">
                                {socialLinks.map(({ name, username, url, Icon }) => (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                            flex items-center gap-4
                                            bg-white/5 border border-white/10
                                            px-4 py-3
                                            hover:bg-white/10
                                            transition
                                        "
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center bg-white text-black">
                                            <Icon />
                                        </span>

                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
                                                {name}
                                            </span>
                                            <span className="text-sm tracking-[0.2em]">
                                                {username}
                                            </span>
                                        </div>

                                        <span className="ml-auto text-base text-[#fffdef]">
                                            →
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* FORM */}
                        <form className="mt-12 space-y-5" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Нэр"
                                className="
                                    w-full bg-white/5 px-5 py-3
                                    border border-white/10
                                    placeholder:text-[#fffdef]
                                    focus:border-white/40
                                    outline-none
                                "
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="И-мэйл"
                                className="
                                    w-full bg-white/5 px-5 py-3
                                    border border-white/10
                                    placeholder:text-[#fffdef]
                                    focus:border-white/40
                                    outline-none
                                "
                            />

                            <textarea
                                rows={3}
                                name="brief"
                                placeholder="Төслийн товч"
                                className="
                                    w-full bg-white/5 px-5 py-3
                                    border border-white/10
                                    placeholder:text-[#fffdef]
                                    focus:border-white/40
                                    outline-none
                                "
                            />

                            <button
                                type="submit"
                                className="
                                    w-full bg-[#444444] text-[#fffdef] py-3
                                    tracking-[0.3em]
                                    hover:bg-[#989898]
                                    transition
                                    shadow-lg
                                "
                            >
                                SEND
                            </button>
                        </form>
                    </div>

                    {/* RIGHT MAP CARD – CLICK = OPEN GOOGLE MAPS */}
                    <div
                        className="
                            relative overflow-hidden
                            bg-white/5 backdrop-blur-xl
                            shadow-[0_16px_40px_rgba(0,0,0,0.35)]
                            min-h-[440px]
                        "
                    >
                        {/* Бүх картыг дармагц Google Maps нээгдэнэ */}
                        <a
                            href="https://www.google.com/maps?q=River+Tower+Ulaanbaatar"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute inset-0 z-20"
                            aria-label="Open River Tower in Google Maps"
                        />

                        <iframe
                            title="River Tower location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.429391913642!2d106.9316439309526!3d47.88919682581851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693d9016da98f%3A0xb9bf4db197008fba!2sRiver%20Tower!5e0!3m2!1sen!2smn!4v1763289182079!5m2!1sen!2smn"
                            className="h-full w-full"
                            style={{ border: 0 } as CSSProperties}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
                    </div>
                </div>
            </div>
        </section>
    );
}
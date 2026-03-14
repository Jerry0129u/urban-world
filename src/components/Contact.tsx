"use client";

import { type CSSProperties, type FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

/* ------------ ICONS ------------ */

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
            fill="currentColor"
            d="M6.6 10.8c1.1 2.2 3 4.1 5.2 5.2l1.7-1.7c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.2.6 1.2 1.2V20c0 .7-.6 1.2-1.2 1.2C9.4 21.2 2.8 14.6 2.8 6.4 2.8 5.8 3.3 5.2 4 5.2H8c.7 0 1.2.6 1.2 1.2 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-1.7 1.7z"
        />
    </svg>
);

const GmailIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
            fill="currentColor"
            d="M12 13.2 3 6.75V18c0 .69.56 1.25 1.25 1.25h15.5A1.25 1.25 0 0 0 21 18V6.75L12 13.2Zm0-2.4 9-6.3A1.25 1.25 0 0 0 19.75 3H4.25A1.25 1.25 0 0 0 3 4.5l9 6.3Z"
        />
    </svg>
);

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
            fill="currentColor"
            d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" rx="4" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
            fill="currentColor"
            d="M6.5 9h2.8v9H6.5zM5.9 6.5a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0zm5.7 2.5h2.7V13h.04c.38-.7 1.32-1.44 2.72-1.44 2.9 0 3.44 1.9 3.44 4.4V18h-2.8v-2.6c0-1.2-.02-2.8-1.72-2.8-1.72 0-1.99 1.3-1.99 2.7V18h-2.39z"
        />
    </svg>
);

const MailIcon = GmailIcon;

/* ------------ SOCIAL ICON LIST ------------ */

const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/urbanworld_llc", Icon: InstagramIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/urban-world-llc", Icon: LinkedinIcon },
    { name: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=info@urbanworld.mn", Icon: MailIcon },
];

export default function Contact() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const isDark = theme === "dark";

    const copy = {
        social: { en: "SOCIAL", mn: "СОШИАЛ" },
        name: { en: "Name", mn: "Нэр" },
        email: { en: "Email", mn: "И-мэйл" },
        brief: { en: "Project notes", mn: "Төслийн товч" },
        send: { en: "Send", mn: "Илгээх" },
        connect: { en: "GET IN TOUCH", mn: "БИДЭНТЭЙ ХОЛБОГДОХ" },
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@urbanworld.mn`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <section
            id="contact"
            className={`min-h-screen py-32 ${
                isDark ? "bg-[#222] text-[#fffdef]" : "bg-[#ece8e1] text-[#111111]"
            }`}
        >
            <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-[420px_1fr]">
                <div
                    className={`p-12 ${
                        isDark
                            ? "bg-white/5 shadow-xl backdrop-blur-2xl"
                            : "border border-black/8 bg-[rgba(248,245,239,0.76)] shadow-[0_14px_36px_rgba(0,0,0,0.07)] backdrop-blur-2xl"
                    }`}
                >
                    <p
                        className={`mb-4 text-xs uppercase tracking-[0.35em] ${
                            isDark ? "text-[#fffdef]/80" : "text-[#111111]/62"
                        }`}
                    >
                        {copy.connect[language]}
                    </p>

                    <div className="space-y-4 text-base">
                        <div className="flex items-center gap-3">
                            <PhoneIcon />
                            <a
                                href="tel:+97688887675"
                                className={`transition ${isDark ? "hover:text-white/70" : "hover:text-black/60"}`}
                            >
                                +976 8888 7675
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <PhoneIcon />
                            <a
                                href="tel:+97698067777"
                                className={`transition ${isDark ? "hover:text-white/70" : "hover:text-black/60"}`}
                            >
                                +976 9806 7777
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <GmailIcon />
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@urbanworld.mn"
                                target="_blank"
                                rel="noreferrer"
                                className={`transition ${isDark ? "hover:text-white/70" : "hover:text-black/60"}`}
                            >
                                info@urbanworld.mn
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <LocationIcon />
                            <p>River Plaza 1403 · Хан-Уул</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p
                            className={`text-xs uppercase tracking-[0.35em] ${
                                isDark ? "text-white/60" : "text-[#111111]/55"
                            }`}
                        >
                            {copy.social[language]}
                        </p>

                        <div className="mt-4 flex gap-4">
                            {socialLinks.map(({ name, url, Icon }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
                                        isDark
                                            ? "border border-white/20 bg-white/10 hover:bg-white hover:text-black"
                                            : "border border-black/10 bg-[#f4f1eb] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1] hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]"
                                    }`}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-12 space-y-5">
                        <input
                            name="name"
                            placeholder={copy.name[language]}
                            className={`w-full border px-5 py-3 outline-none transition ${
                                isDark
                                    ? "border-white/10 bg-white/5 text-[#fffdef] placeholder:text-white/40"
                                    : "border-black/10 bg-[#f8f5ef] text-[#111111] placeholder:text-black/35 shadow-[0_4px_14px_rgba(0,0,0,0.05)] focus:border-black/20"
                            }`}
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder={copy.email[language]}
                            className={`w-full border px-5 py-3 outline-none transition ${
                                isDark
                                    ? "border-white/10 bg-white/5 text-[#fffdef] placeholder:text-white/40"
                                    : "border-black/10 bg-[#f8f5ef] text-[#111111] placeholder:text-black/35 shadow-[0_4px_14px_rgba(0,0,0,0.05)] focus:border-black/20"
                            }`}
                        />

                        <textarea
                            name="brief"
                            rows={3}
                            placeholder={copy.brief[language]}
                            className={`w-full border px-5 py-3 outline-none transition ${
                                isDark
                                    ? "border-white/10 bg-white/5 text-[#fffdef] placeholder:text-white/40"
                                    : "border-black/10 bg-[#f8f5ef] text-[#111111] placeholder:text-black/35 shadow-[0_4px_14px_rgba(0,0,0,0.05)] focus:border-black/20"
                            }`}
                        />

                        <button
                            className={`w-full py-3 tracking-[0.3em] transition ${
                                isDark
                                    ? "bg-[#444] text-[#fffdef] hover:bg-[#777]"
                                    : "border border-black/10 bg-[#f4f1eb] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1] hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]"
                            }`}
                        >
                            {copy.send[language].toUpperCase()}
                        </button>
                    </form>
                </div>

                <div
                    className={`relative min-h-[350px] p-4 ${
                        isDark
                            ? ""
                            : "border border-black/8 bg-[rgba(246,242,235,0.62)] shadow-[0_14px_36px_rgba(0,0,0,0.07)]"
                    }`}
                >
                    <iframe
                        className="h-full w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.429391913642!2d106.9316439309526!3d47.88919682581851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693d9016da98f%3A0xb9bf4db197008fba!2sRiver%20Tower!5e0!3m2!1sen!2smn!4v1763289182079!5m2!1sen!2smn"
                        style={{ border: 0 } as CSSProperties}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
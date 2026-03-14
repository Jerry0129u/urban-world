"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

type NavLink = {
    href: string;
    label: { en: string; mn: string };
};

const links: NavLink[] = [
    { href: "/#home", label: { en: "Home", mn: "Нүүр" } },
    { href: "/#about", label: { en: "About", mn: "Бидний тухай" } },
    { href: "/#services", label: { en: "Services", mn: "Үйлчилгээ" } },
    { href: "/#projects", label: { en: "Projects", mn: "Төслүүд" } },
    { href: "/#contact", label: { en: "Contact", mn: "Холбоо барих" } },
];

export default function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    const isDark = theme === "dark";
    const logoSrc = isDark ? "/uw-logo-Photoroom.png" : "/Unknown-3-Photoroom.png";

    const menuButtonClass = isDark
        ? "h-12 px-6 border border-white/20 bg-transparent text-[#fffdef] hover:bg-white/10 hover:border-white"
        : "h-12 px-6 border border-black/10 bg-[#f4f1eb] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1] hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] hover:border-black/20";

    const iconButtonClass = isDark
        ? "flex h-12 w-12 items-center justify-center border border-white/20 bg-transparent text-[#fffdef] hover:bg-white/10 hover:border-white transition"
        : "flex h-12 w-12 items-center justify-center border border-black/10 bg-[#f4f1eb] text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#ece8e1] hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] hover:border-black/20 transition";

    const panelClass = isDark
        ? "bg-[#333333] text-[#fffdef] border border-white/10"
        : "bg-[rgba(244,241,235,0.96)] text-[#111111] border border-black/8 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl";

    const panelHeaderBorder = isDark ? "border-white/15" : "border-black/8";

    const closeButtonClass = isDark
        ? "border border-white/30 hover:bg-white/10"
        : "border border-black/10 bg-[rgba(255,255,255,0.35)] hover:bg-[#ece8e1]";

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.pathname !== "/") return;

        const updateActive = () => {
            const scrollY = window.scrollY + 140;
            let newIndex = 0;

            links.forEach((link, i) => {
                const selector = link.href.replace("/#", "#");
                const section = document.querySelector(selector);
                if (!(section instanceof HTMLElement)) return;

                if (scrollY >= section.offsetTop) newIndex = i;
            });

            if (newIndex !== activeIndexRef.current) setActiveIndex(newIndex);
        };

        updateActive();
        window.addEventListener("scroll", updateActive);
        return () => window.removeEventListener("scroll", updateActive);
    }, []);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const handleNavSelect = (href: string, index: number) => {
        setActiveIndex(index);
        setOpen(false);

        if (typeof window !== "undefined" && window.location.pathname !== "/") {
            window.location.href = href;
            return;
        }

        const el = document.querySelector(href.replace("/#", "#"));
        if (el instanceof HTMLElement) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <img src={logoSrc} alt="Urban World logo" className="h-8 w-auto" />
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className={iconButtonClass}
                        aria-label={language === "mn" ? "Switch language to English" : "Switch language to Mongolian"}
                    >
                        <span className="text-[10px] uppercase tracking-[0.22em]">
                            {language === "mn" ? "EN" : "MN"}
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={iconButtonClass}
                        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDark ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.6"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.6"
                            >
                                <path d="M21 12.8A9 9 0 1111.2 3c0 .3 0 .6.05.9A7 7 0 0021 12.8z" />
                            </svg>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className={`text-sm font-medium transition ${menuButtonClass}`}
                    >
                        {language === "mn" ? "Цэс" : "Menu"}
                    </button>
                </div>
            </div>

            {open && (
                <div className={`fixed top-16 right-4 z-40 w-[min(calc(100vw-2rem),420px)] p-5 ${panelClass}`}>
                    <div className={`mb-5 flex items-center justify-between border-b pb-3 ${panelHeaderBorder}`}>
                        <span className="text-xs uppercase tracking-[0.3em] opacity-80">
                            {language === "mn" ? "Цэс" : "Menu"}
                        </span>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className={`flex h-8 w-8 items-center justify-center transition ${closeButtonClass}`}
                        >
                            ✕
                        </button>
                    </div>

                    <nav>
                        <ul className="flex flex-col gap-2">
                            {links.map((item, index) => {
                                const active = activeIndex === index;

                                const base =
                                    "w-full text-left px-3 py-2 text-[11px] uppercase tracking-[0.22em] border transition";

                                const normal = isDark
                                    ? "border-white/10 bg-[#333333] text-[#fffdef] hover:bg-white/10"
                                    : "border-black/8 bg-[rgba(248,245,239,0.72)] text-[#111111] hover:bg-[#ece8e1]";

                                const activeStyle = isDark
                                    ? "border-white bg-[#fffdef] text-[#222222] hover:bg-white/90"
                                    : "border-black/12 bg-[#111111] text-[#f4f1eb] hover:bg-[#222222]";

                                return (
                                    <li key={item.href}>
                                        <button
                                            type="button"
                                            onClick={() => handleNavSelect(item.href, index)}
                                            className={[base, active ? activeStyle : normal].join(" ")}
                                        >
                                            {item.label[language]}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
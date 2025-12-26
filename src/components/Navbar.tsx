"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    // Scroll tracking
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
        if (el instanceof HTMLElement) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3">

                <Link href="/" className="flex items-center gap-2">
                    <img src="/uwb.png" className="h-10 w-auto" />
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setOpen(!open)}
                        className="
                            bg-[#444444] px-6 py-3 h-10
                            text-sm font-medium text-[#fffdef]
                            hover:bg-[#989898] transition
                        "
                    >
                        {language === "mn" ? "Цэс" : "Menu"}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className="
                            flex h-10 w-10 items-center justify-center
                            border border-white/20
                            text-[10px] uppercase tracking-[0.22em]
                            bg-transparent text-[#fffdef]
                            hover:border-white
                        "
                    >
                        {language === "mn" ? "EN" : "MN"}
                    </button>
                </div>
            </div>

            {open && (
                <div
                    className="
                        fixed top-16 right-4 z-40
                        w-[min(100%-2rem,420px)]
                        bg-[#333333]
                        text-[#fffdef]
                        border border-white/10 p-5
                    "
                >
                    <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="text-xs tracking-[0.3em] uppercase opacity-80">
                            {language === "mn" ? "Цэс" : "Menu"}
                        </span>

                        <button
                            onClick={() => setOpen(false)}
                            className="flex h-8 w-8 items-center justify-center border border-white/30 hover:bg-white/10"
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

                                const normal =
                                    "border-white/10 bg-[#333333] text-[#fffdef] hover:bg-white/10";

                                const activeStyle =
                                    "border-white bg-[#fffdef] text-[#222222] hover:bg-white/90";

                                return (
                                    <li key={item.href}>
                                        <button
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
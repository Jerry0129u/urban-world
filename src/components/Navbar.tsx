"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = {
    href: string;
    label: string;
    variant?: "cta";
};

const links: NavLink[] = [
    { href: "#home", label: "Нүүр" },
    { href: "#about", label: "Бидний тухай" },
    { href: "#services", label: "Үйлчилгээ" },
    { href: "#projects", label: "Төслүүд" },
    { href: "#contact", label: "Холбоо барих" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    const navOptions = [
        ...links,
        { href: "#contact", label: "Санал илгээх", variant: "cta" as const },
    ];

    // Scroll → active highlight
    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateActive = () => {
            const scrollY = window.scrollY + 140;
            let newIndex = 0;

            links.forEach((link, i) => {
                const section = document.querySelector(link.href);
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

        const el = document.querySelector(href);
        if (el instanceof HTMLElement) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            {/* Floating toggle */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 shadow-lg backdrop-blur-md"
            >
                <div className="flex flex-col gap-1.5">
                    <span className="h-[2px] w-4 bg-white" />
                    <span className="h-[2px] w-4 bg-white" />
                    <span className="h-[2px] w-4 bg-white" />
                </div>
            </button>

            {open && (
                <div className="fixed top-16 right-4 z-40 w-[min(100%-2rem,420px)] rounded-2xl border border-white/15 bg-slate-900/85 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                    {/* Logo + close */}
                    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                        <Link
                            href="#home"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3"
                        >
                            <div className="rounded-md bg-white p-1">
                                <Image
                                    src="/urbanworld-logo.png"
                                    width={110}
                                    height={40}
                                    alt="UrbanWorld"
                                />
                            </div>
                        </Link>
                        <button
                            onClick={() => setOpen(false)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-gray-200 hover:bg-white/10"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Minimal Vertical Menu */}
                    <nav>
                        <ul className="flex flex-col gap-1.5">
                            {navOptions.map((item, index) => {
                                const active = activeIndex === index;

                                const baseClasses =
                                    "w-full text-left px-3 py-2 text-[11px] uppercase tracking-[0.22em] rounded-lg transition";
                                const normalItem =
                                    "border border-transparent bg-white/5 text-gray-100 hover:bg-white/10";
                                const activeItem =
                                    "border border-white bg-white text-slate-900 shadow-sm";
                                const ctaItem =
                                    "border border-sky-400/70 text-sky-100 bg-sky-500/10 hover:bg-sky-500/20";

                                return (
                                    <li key={`${item.href}-${item.label}`}>
                                        <button
                                            onClick={() =>
                                                handleNavSelect(
                                                    item.href,
                                                    index,
                                                )
                                            }
                                            className={[
                                                baseClasses,
                                                active
                                                    ? activeItem
                                                    : normalItem,
                                                item.variant === "cta"
                                                    ? ctaItem
                                                    : "",
                                            ].join(" ")}
                                        >
                                            {item.label}
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
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

    // scroll → active highlight
    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateActive = () => {
            const scrollY = window.scrollY + 140;
            let newIndex = 0;

            links.forEach((link, i) => {
                const section = document.querySelector(link.href);
                if (!(section instanceof HTMLElement)) return; // 🔹 type guard

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
                className="fixed top-4 right-4 z-50 h-10 w-10 flex items-center justify-center rounded-full border border-slate-300 bg-white/80 shadow backdrop-blur"
            >
                <div className="flex flex-col gap-1">
                    <span className="w-4 h-[2px] bg-black" />
                    <span className="w-4 h-[2px] bg-black" />
                    <span className="w-4 h-[2px] bg-black" />
                </div>
            </button>

            {open && (
                <div className="fixed top-16 right-4 w-[min(100%-2rem,420px)] rounded-xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur z-40 p-4 animate-in fade-in slide-in-from-top-2">

                    {/* Logo + close */}
                    <div className="flex justify-between items-center mb-4">
                        <Link
                            href="#home"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3"
                        >
                            <Image
                                src="/urbanworld-logo.png"
                                width={110}
                                height={40}
                                alt="UrbanWorld"
                            />
                        </Link>
                        <button
                            onClick={() => setOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-300 text-slate-500"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Minimal Vertical Menu */}
                    <nav>
                        <ul className="flex flex-col gap-[6px]">
                            {navOptions.map((item, index) => {
                                const active = activeIndex === index;

                                return (
                                    <li key={`${item.href}-${item.label}`}>
                                        <button
                                            onClick={() =>
                                                handleNavSelect(item.href, index)
                                            }
                                            className={[
                                                "w-full text-left px-3 py-2 text-[12px] uppercase tracking-[0.2em] border rounded-md transition",
                                                active
                                                    ? "border-slate-900 bg-slate-900 text-white"
                                                    : "border-slate-200 hover:bg-slate-50",
                                                item.variant === "cta"
                                                    ? "border-sky-300 text-sky-700 hover:bg-sky-50"
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

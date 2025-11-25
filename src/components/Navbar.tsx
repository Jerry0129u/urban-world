/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = {
    href: string;
    label: string;
    variant?: "cta";
};

const links: NavLink[] = [
    { href: "/#home", label: "Нүүр" },
    { href: "/#about", label: "Бидний тухай" },
    { href: "/#services", label: "Үйлчилгээ" },
    { href: "/#projects", label: "Төслүүд" },
    { href: "/#contact", label: "Холбоо барих" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    const navOptions = [...links, { href: "/#contact", label: "Санал илгээх", variant: "cta" as const }];

    // Track active link by scroll
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
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.location.href = href;
        }
    };

    return (
        <>
            {/* MENU BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center
                bg-[#333333] border border-white/20"
            >
                <div className="flex flex-col gap-1.5">
                    <span className="h-[2px] w-4 bg-[#fffdef]" />
                    <span className="h-[2px] w-4 bg-[#fffdef]" />
                    <span className="h-[2px] w-4 bg-[#fffdef]" />
                </div>
            </button>

            {/* DRAWER */}
            {open && (
                <div
                    className="
                        fixed top-16 right-4 z-40
                        w-[min(100%-2rem,420px)]
                        bg-[#333333]
                        text-[#fffdef]
                        border border-white/10
                        p-5
                    "
                >
                    {/* HEADER */}
                    <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="text-xs tracking-[0.3em] uppercase opacity-80">
                            MENU
                        </span>

                        <button
                            onClick={() => setOpen(false)}
                            className="flex h-8 w-8 items-center justify-center
                            border border-white/30 hover:bg-white/10"
                        >
                            ✕
                        </button>
                    </div>

                    {/* MENU LIST */}
                    <nav>
                        <ul className="flex flex-col gap-2">
                            {navOptions.map((item, index) => {
                                const active = activeIndex === index;

                                const base =
                                    "w-full text-left px-3 py-2 text-[11px] uppercase tracking-[0.22em] border transition";

                                const normal =
                                    "border-white/10 bg-[#333333] text-[#fffdef] hover:bg-white/10";

                                const activeStyle =
                                    "border-white bg-[#fffdef] text-[#222222] hover:bg-white/90";

                                const cta =
                                    "border-white/20 bg-white/10 text-[#fffdef] hover:bg-white/20";

                                return (
                                    <li key={item.href}>
                                        <button
                                            onClick={() => handleNavSelect(item.href, index)}
                                            className={[
                                                base,
                                                active ? activeStyle : normal,
                                                item.variant === "cta" ? cta : "",
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
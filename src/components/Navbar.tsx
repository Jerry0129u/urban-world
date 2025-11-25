/* eslint-disable @next/next/no-img-element */
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

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.pathname !== "/") return;

        const updateActive = () => {
            const scrollY = window.scrollY + 140;
            let newIndex = 0;

            links.forEach((link, i) => {
                const section = document.querySelector(link.href.replace("/#", "#"));
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
        } else if (typeof window !== "undefined") {
            window.location.href = href;
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/80 text-white shadow backdrop-blur"
                aria-label="Toggle navigation"
                style={{ fontFamily: "Lato, sans-serif" }}
            >
                <div className="flex flex-col gap-1">
                    <span className="h-[2px] w-4 bg-white" />
                    <span className="h-[2px] w-4 bg-white" />
                    <span className="h-[2px] w-4 bg-white" />
                </div>
            </button>

            {open && (
                <div className="animate-in fade-in slide-in-from-top-2 fixed top-16 right-4 z-40 w-[min(100%-2rem,420px)] rounded-xl border border-white/20 bg-black/90 p-4 shadow-xl backdrop-blur">
                    <div className="mb-4 flex items-center justify-between text-white">
                        <Link href="/#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
                            <Image src="/urbanworld-logo.png" width={110} height={40} alt="UrbanWorld" />
                        </Link>
                        <button
                            onClick={() => setOpen(false)}
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-white/30 text-white"
                            aria-label="Close navigation"
                        >
                            ✕
                        </button>
                    </div>

                    <nav>
                        <ul className="flex flex-col gap-[6px]">
                            {navOptions.map((item, index) => {
                                const active = activeIndex === index;
                                return (
                                    <li key={`${item.href}-${item.label}`}>
                                        <button
                                            onClick={() => handleNavSelect(item.href, index)}
                                            className={[
                                                "w-full rounded-md border px-3 py-2 text-left text-[12px] uppercase tracking-[0.2em] transition text-white",
                                                active
                                                    ? "border-white bg-white/10"
                                                    : "border-white/20 hover:bg-white/10",
                                                item.variant === "cta"
                                                    ? "border-white/40 text-white hover:bg-white/15"
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

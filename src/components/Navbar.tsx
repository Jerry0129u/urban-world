"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const links = [
    { id: "home", label: "Нүүр" },
    { id: "about", label: "Бидний тухай" },
    { id: "services", label: "Үйлчилгээ" },
    { id: "projects", label: "Төслүүд" },
    { id: "contact", label: "Холбоо барих" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const sectionIds = useMemo(() => links.map((link) => link.id), []);
    const { activeSection, setActiveSection } = useSectionObserver(sectionIds);

    const linkClass = (id: string) =>
        `group relative flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            activeSection === id ? "text-[#f10459]" : "text-slate-500"
        }`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 pointer-events-none">
            <div className="pointer-events-auto mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-[46px] border border-white/25 bg-white/20 px-6 py-3 shadow-[0_45px_80px_rgba(15,23,42,0.2)] backdrop-blur-[40px]">
                <Link
                    href="#home"
                    className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/30 bg-white/40 px-3 py-2 text-[#0f172a] shadow-[0_25px_45px_rgba(15,23,42,0.12)]"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-80" />
                    <Image
                        src="/urbanworld-logo.png"
                        alt="Urban World"
                        width={110}
                        height={36}
                        priority
                    />
                    <div className="relative hidden sm:flex flex-col text-[10px] tracking-[0.3em] text-white/70">
                        <span>URBAN</span>
                        <span className="text-white">WORLD</span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-3 rounded-full border border-white/30 bg-white/35 px-4 py-2 shadow-[0_25px_45px_rgba(15,23,42,0.18)] backdrop-blur-[30px]">
                    {links.map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className={`${linkClass(item.id)} relative`}
                            aria-current={activeSection === item.id ? "page" : undefined}
                            onClick={() => {
                                setActiveSection(item.id);
                                setOpen(false);
                            }}
                        >
                                <span
                                className={`absolute inset-0 rounded-[30px] transition duration-500 ${
                                    activeSection === item.id
                                        ? "border border-white/60 bg-gradient-to-b from-white/90 via-white/70 to-white/35 shadow-[0_30px_70px_rgba(7,9,20,0.3)] backdrop-blur-[35px]"
                                        : "border border-white/10 bg-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                                }`}
                            />
                            <span
                                className={`absolute inset-0 rounded-[30px] opacity-0 pointer-events-none transition duration-500 ${
                                    activeSection === item.id
                                        ? "opacity-100 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.85),transparent_45%)]"
                                        : ""
                                }`}
                            />
                            <span className="absolute -inset-3 rounded-full bg-white/30 blur-2xl opacity-0 group-hover:opacity-60 transition duration-500" />
                            <span className="relative z-[1]">{item.label}</span>
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#fbc2d3] via-[#fef0da] to-[#f8ffcc] px-5 py-2 text-[#0f172a] text-sm font-semibold shadow-[0_25px_50px_rgba(249,180,210,0.45)] transition hover:-translate-y-0.5"
                    >
                        <span className="absolute inset-0 bg-white/70 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:scale-110" />
                        <span className="relative z-10">Санал илгээх</span>
                    </Link>
                </nav>
                <button
                    onClick={() => setOpen((p) => !p)}
                    className="md:hidden inline-flex items-center justify-center rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[#0f172a] shadow-[0_15px_30px_rgba(15,23,42,0.18)]"
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>
            {open && (
                <div className="md:hidden mt-3 rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_30px_60px_rgba(15,23,42,0.2)]">
                    <div className="px-4 py-4 flex flex-col gap-2">
                        {links.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className={`group relative overflow-hidden rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur transition ${
                                    activeSection === item.id ? "text-[#f10459]" : "text-white/80"
                                }`}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setOpen(false);
                                }}
                            >
                                <span
                                    className={`absolute inset-0 rounded-[30px] transition duration-500 ${
                                        activeSection === item.id
                                            ? "border border-white/80 bg-gradient-to-b from-[#fff0f5] via-white to-white/80 shadow-[0_20px_50px_rgba(7,9,20,0.35)] backdrop-blur-[18px]"
                                            : "border border-white/20 bg-white/5 opacity-0 group-hover:opacity-100"
                                    }`}
                                />
                                <span
                                    className={`absolute inset-0 rounded-[30px] opacity-0 pointer-events-none transition duration-500 ${
                                        activeSection === item.id
                                            ? "opacity-100 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.85),transparent_45%)]"
                                            : ""
                                    }`}
                                />
                                <span className="absolute -inset-3 bg-white/10 blur-2xl opacity-0 group-hover:opacity-70 transition duration-500" />
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#f9b4d2] via-[#fdf1d6] to-[#f4ffb9] px-4 py-3 text-[#0f172a] text-sm font-semibold shadow-[0_20px_45px_rgba(249,180,210,0.4)]"
                        >
                            <span className="absolute inset-0 bg-white/60 opacity-0 blur-lg transition duration-500 group-hover:opacity-100" />
                            <span className="relative z-10">Санал илгээх</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

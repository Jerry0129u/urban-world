"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
    { href: "#home", label: "Нүүр" },
    { href: "#about", label: "Бидний тухай" },
    { href: "#services", label: "Үйлчилгээ" },
    { href: "#projects", label: "Төслүүд" },
    { href: "#contact", label: "Холбоо барих" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
            <div className="container mx-auto px-4 flex items-center justify-between py-3 gap-4">
                <Link href="#home" className="flex items-center gap-2">
                    {/* put /public/urbanworld-logo.png */}
                    <Image
                        src="/urbanworld-logo.png"
                        alt="Urban World"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {links.map((item) => (
                        <a key={item.href} href={item.href} className="hover:text-[#001517]">
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-lg bg-[#001517] px-4 py-2 text-white text-sm"
                    >
                        Санал илгээх
                    </a>
                </nav>
                <button
                    onClick={() => setOpen((p) => !p)}
                    className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
                >
                    ☰
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="container mx-auto px-4 py-2 flex flex-col gap-2">
                        {links.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="py-1"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center justify-center rounded-lg bg-[#001517] px-4 py-2 text-white text-sm"
                        >
                            Санал илгээх
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
    type CSSProperties,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

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
    const [scrolled, setScrolled] = useState(false);
    const switcherRef = useRef<HTMLFieldSetElement | null>(null);
    const optionRefs = useRef<(HTMLLabelElement | null)[]>([]);
    const [indicator, setIndicator] = useState({ width: 84, left: 4 });
    const prevIndexRef = useRef(0);
    const activeIndexRef = useRef(0);

    const navOptions: NavLink[] = [
        ...links,
        { href: "#contact", label: "Санал илгээх", variant: "cta" as const },
    ];

    const updateIndicator = useCallback(
        (index: number) => {
            const option = optionRefs.current[index];
            const switcher = switcherRef.current;
            if (!option || !switcher) return;
            const optionRect = option.getBoundingClientRect();
            const switcherRect = switcher.getBoundingClientRect();
            if (optionRect.width === 0 || switcherRect.width === 0) return;
            const left = optionRect.left - switcherRect.left + 4;
            setIndicator({ width: optionRect.width - 8, left });
        },
        []
    );

    useLayoutEffect(() => {
        updateIndicator(activeIndex);
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => updateIndicator(activeIndex));
        return () => window.cancelAnimationFrame(frame);
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const onResize = () => updateIndicator(activeIndex);
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const switcher = switcherRef.current;
        if (!switcher || typeof ResizeObserver === "undefined") return;
        const resizeObserver = new ResizeObserver(() => {
            if (switcher.offsetWidth === 0) return;
            updateIndicator(activeIndex);
        });
        resizeObserver.observe(switcher);
        return () => resizeObserver.disconnect();
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const switcher = switcherRef.current;
        if (!switcher) return;
        const onScroll = () => updateIndicator(activeIndex);
        switcher.addEventListener("scroll", onScroll, { passive: true });
        return () => switcher.removeEventListener("scroll", onScroll);
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const switcher = switcherRef.current;
        if (!switcher) return;
        const previous = prevIndexRef.current;
        const direction = activeIndex >= previous ? "forward" : "backward";
        switcher.setAttribute("data-previous", String(previous));
        switcher.setAttribute("data-active", String(activeIndex));
        switcher.setAttribute("data-direction", direction);
        prevIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        let frameId: number | null = null;

        const calculateSectionIndex = () => {
            const scrollPos = window.scrollY + window.innerHeight * 0.35;
            let newIndex = 0;
            links.forEach((link, idx) => {
                const section = document.querySelector(link.href);
                if (!(section instanceof HTMLElement)) return;
                if (scrollPos >= section.offsetTop - 60) {
                    newIndex = idx;
                }
            });
            if (newIndex !== activeIndexRef.current) {
                setActiveIndex(newIndex);
            }
        };

        const onScroll = () => {
            if (frameId) return;
            frameId = window.requestAnimationFrame(() => {
                frameId = null;
                calculateSectionIndex();
            });
        };

        calculateSectionIndex();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            if (frameId) window.cancelAnimationFrame(frameId);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleNavSelect = (href: string, index: number) => {
        setActiveIndex(index);
        setOpen(false);
        if (typeof window === "undefined") return;
        const target = document.querySelector(href);
        if (target instanceof HTMLElement) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.location.assign(href);
        }
    };

    return (
        <header
            className={`liquid-nav-header fixed top-0 left-0 right-0 z-40 ${
                scrolled ? "scrolled" : ""
            }`}
        >
            <div className="container mx-auto px-4 pt-4 flex items-center justify-between gap-4 text-slate-500">
                <Link href="#home" className="flex items-center gap-3 whitespace-nowrap text-slate-900">
                    <Image
                        src="/urbanworld-logo.png"
                        alt="Urban World"
                        width={120}
                        height={40}
                        priority
                    />
                    <span className="hidden text-xs uppercase tracking-[0.4em] text-slate-500 md:inline-flex">
                        urbanworld
                    </span>
                </Link>
                <div className="hidden min-w-0 flex-1 justify-center md:flex">
                    <fieldset
                        ref={switcherRef}
                        aria-label="Site navigation"
                        className="liquid-switcher w-full max-w-4xl"
                        style={
                            {
                                "--indicator-width": `${indicator.width}px`,
                                "--indicator-x": `${indicator.left}px`,
                            } as CSSProperties
                        }
                    >
                        <legend className="liquid-switcher__legend">Site navigation</legend>
                        {navOptions.map((item, index) => (
                            <label
                                key={`${item.href}-${item.label}`}
                                className={`liquid-switcher__option ${
                                    item.variant === "cta" ? "liquid-switcher__option--cta" : ""
                                }`}
                                ref={(el) => {
                                    optionRefs.current[index] = el;
                                    if (index === activeIndex && el) {
                                        requestAnimationFrame(() => updateIndicator(index));
                                    }
                                }}
                            >
                                <input
                                    className="liquid-switcher__input"
                                    type="radio"
                                    name="nav-switcher"
                                    value={item.href}
                                    data-option={index}
                                    checked={activeIndex === index}
                                    onChange={() => handleNavSelect(item.href, index)}
                                />
                                <span>{item.label}</span>
                            </label>
                        ))}
                        <div className="liquid-switcher__filter" aria-hidden="true">
                            <svg>
                                <filter id="liquidNavFilter" primitiveUnits="objectBoundingBox">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise" />
                                    <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
                                    <feDisplacementMap in="SourceGraphic" in2="blur" scale="0.5" xChannelSelector="R" yChannelSelector="G" />
                                </filter>
                            </svg>
                        </div>
                    </fieldset>
                </div>
                <button
                    onClick={() => setOpen((p) => !p)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-slate-700 shadow-sm md:hidden"
                >
                    ☰
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
                    <div className="container mx-auto px-4 py-3 flex flex-col gap-3 text-slate-900">
                        {links.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="py-1 text-sm uppercase tracking-[0.3em] whitespace-nowrap"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-sm whitespace-nowrap text-white"
                        >
                            Санал илгээх
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

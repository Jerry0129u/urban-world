"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <footer
            className={`py-8 ${
                isDark
                    ? "border-t border-white/12 bg-[#333333] text-[#fffdef]"
                    : "border-t border-black/8 bg-[#ece8e1] text-[#111111]"
            }`}
        >
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs uppercase tracking-[0.3em] md:flex-row">
                <p className={isDark ? "text-[#fffdef]" : "text-[#111111]"}>
                    © {new Date().getFullYear()} Urban World LLC
                </p>

                <p
                    className={
                        isDark
                            ? "text-[#fffdef]/80"
                            : "text-[#111111]/60"
                    }
                >
                    {language === "mn" ? "интерьер" : "interiors"}
                </p>
            </div>
        </footer>
    );
}
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const label = language === "mn" ? "MN" : "EN";

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            aria-pressed={language === "en"}
            style={{ fontFamily: language === "mn" ? "'Noto Sans', 'Lato', sans-serif" : undefined }}
            className="
                fixed left-4 top-4 z-[60]
                flex h-10 w-10 items-center justify-center
                border border-white/20 bg-[#333333]
                text-[10px] uppercase tracking-[0.2em]
                text-[#fffdef]
                shadow-[0_6px_16px_rgba(0,0,0,0.24)]
                transition-colors
                hover:bg-[#444444]
            "
        >
            {label}
        </button>
    );
}

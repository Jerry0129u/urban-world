import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "mn" | "en";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "urbanworld-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("mn");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "mn" || stored === "en") {
            setLanguageState(stored);
        }
    }, []);

    const setLanguage = (value: Language) => {
        setLanguageState(value);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, value);
        }
    };

    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            setLanguage,
            toggleLanguage: () => setLanguage(language === "mn" ? "en" : "mn"),
        }),
        [language]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
}

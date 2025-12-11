import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import "@/styles/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const previousPathRef = useRef(router.asPath);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // prevent browser restoring old scroll on navigation
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const handleRouteStart = () => {
            previousPathRef.current = router.asPath;
        };

        const scrollToProjects = () => {
            const projectsSection = document.querySelector<HTMLElement>("#projects");
            if (!projectsSection) return false;
            projectsSection.scrollIntoView({ behavior: "auto", block: "start" });
            return true;
        };

        const handleRouteComplete = (url: string) => {
            const isHomeRoute = url === "/" || url.startsWith("/#");
            const cameFromProjectDetail = previousPathRef.current.startsWith("/projects/");

            if (isHomeRoute && cameFromProjectDetail) {
                // Returning from a project detail page should land on the projects section, not the top.
                window.requestAnimationFrame(() => {
                    if (!scrollToProjects()) {
                        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                    }
                });
                return;
            }

            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        };

        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteComplete);
        return () => {
            router.events.off("routeChangeStart", handleRouteStart);
            router.events.off("routeChangeComplete", handleRouteComplete);
        };
    }, [router]);

    return (
        <LanguageProvider>
            <LanguageToggle />
            <Component {...pageProps} />
        </LanguageProvider>
    );
}

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        if (typeof window === "undefined") return;

        // prevent browser restoring old scroll on navigation
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const handleRoute = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        };

        router.events.on("routeChangeStart", handleRoute);
        router.events.on("routeChangeComplete", handleRoute);
        return () => {
            router.events.off("routeChangeStart", handleRoute);
            router.events.off("routeChangeComplete", handleRoute);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
}

import Head from "next/head";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>(".room-section"));
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    } else {
                        entry.target.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.35 }
        );

        const activeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle("is-active", entry.intersectionRatio > 0.6);
                });
            },
            { threshold: [0.3, 0.6, 0.9] }
        );

        sections.forEach((section, index) => {
            section.style.setProperty("--room-index", index.toString());
            observer.observe(section);
            activeObserver.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
                activeObserver.unobserve(section);
            });
            observer.disconnect();
            activeObserver.disconnect();
        };
    }, []);

    return (
        <>
            <Head>
                <title>Urban World LLC</title>
                <meta
                    name="description"
                    content="Интерьер дизайн, зураг төсөл, дотоод засал, тохижилт - Urban World LLC"
                />
            </Head>
            <div className="flex min-h-screen flex-col bg-black text-white">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

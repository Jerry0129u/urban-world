import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Urban World LLC</title>
                <meta
                    name="description"
                    content="Интерьер дизайн, зураг төсөл, дотоод засал, тохижилт - Urban World LLC"
                />
            </Head>
            <div className="min-h-screen flex flex-col bg-white">
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

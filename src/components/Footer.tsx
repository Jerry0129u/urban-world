export default function Footer() {
    return (
        <footer className="bg-black py-8 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs uppercase tracking-[0.3em] text-white/50 md:flex-row">
                <p>© {new Date().getFullYear()} Urban World LLC</p>
                <p>walkthrough interiors</p>
            </div>
        </footer>
    );
}

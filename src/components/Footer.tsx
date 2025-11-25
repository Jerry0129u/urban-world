export default function Footer() {
    return (
        <footer className="border-t border-white/12 bg-[#001517] py-8 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs uppercase tracking-[0.3em] md:flex-row">
                <p>© {new Date().getFullYear()} Urban World LLC</p>
                <p className="text-white/70">walkthrough interiors</p>
            </div>
        </footer>
    );
}

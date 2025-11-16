export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-8 text-slate-500">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs uppercase tracking-[0.3em] md:flex-row">
                <p>© {new Date().getFullYear()} Urban World LLC</p>
                <p className="text-slate-400">walkthrough interiors</p>
            </div>
        </footer>
    );
}

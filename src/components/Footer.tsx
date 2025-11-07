export default function Footer() {
    return (
        <footer className="border-t bg-white py-6 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <p>
                    © {new Date().getFullYear()} Urban World LLC. Бүх эрх хуулиар
                    хамгаалагдсан.
                </p>
                <p className="text-slate-400">
                    Интерьер • Зураг төсөл • Дотоод засал
                </p>
            </div>
        </footer>
    );
}

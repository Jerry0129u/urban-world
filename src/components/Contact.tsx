import { type CSSProperties, type FormEvent } from "react";

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
            fill="currentColor"
            d="M6.5 9h2.8v9H6.5zM5.9 6.5a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0zm5.7 2.5h2.7V13h.04c.38-.7 1.32-1.44 2.72-1.44 2.9 0 3.44 1.9 3.44 4.4V18h-2.8v-2.6c0-1.2-.02-2.8-1.72-2.8-1.72 0-1.99 1.3-1.99 2.7V18h-2.39z"
        />
    </svg>
);

const socialLinks = [
    {
        name: "Instagram",
        username: "@urbanworld_llc",
        url: "https://www.instagram.com/urbanworld_llc",
        Icon: InstagramIcon,
    },
    {
        name: "LinkedIn",
        username: "Urban World LLC",
        url: "https://www.linkedin.com/company/urban-world-llc",
        Icon: LinkedinIcon,
    },
];

export default function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = (data.get("name") as string | null)?.trim() ?? "";
        const email = (data.get("email") as string | null)?.trim() ?? "";
        const brief = (data.get("brief") as string | null)?.trim() ?? "";

        const subject = encodeURIComponent("Urban World project inquiry");
        const bodyLines = [
            "New inquiry via khanllc.mn",
            name ? `Name: ${name}` : "",
            email ? `Email: ${email}` : "",
            brief ? `Project notes: ${brief}` : "",
        ].filter(Boolean);
        const body = encodeURIComponent(bodyLines.join("\n"));
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@urbanworld.mn&su=${subject}&body=${body}`;
        const mailtoUrl = `mailto:info@urbanworld.mn?subject=${subject}&body=${body}`;

        if (typeof window !== "undefined") {
            const newWindow = window.open(gmailUrl, "_blank");
            if (!newWindow) {
                window.location.href = mailtoUrl;
            }
        }

        form.reset();
    };

    return (
        <section
            id="contact"
            className="room-section relative min-h-screen overflow-hidden text-slate-900 scroll-mt-24"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]">
                    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/80">
                        <p className="text-xs uppercase tracking-[0.6em] text-slate-500">reach out</p>
                        <h2 className="mt-3 text-3xl font-light">Step inside with us.</h2>
                        <div className="mt-8 space-y-4 text-sm uppercase tracking-[0.3em] text-slate-600">
                            <p>+976 8888 7675</p>
                            <a href="mailto:info@urbanworld.mn" className="hover:text-slate-900">
                                info@urbanworld.mn
                            </a>
                            <p>River Plaza 1403 · Хан-Уул</p>
                            <div className="pt-4">
                                <p className="text-[0.6rem] uppercase tracking-[0.5em] text-slate-400">Social</p>
                                <div className="mt-3 flex flex-col gap-3">
                                    {socialLinks.map(({ name, username, url, Icon }) => (
                                        <a
                                            key={name}
                                            href={url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center gap-4 rounded-3xl border border-slate-200 px-4 py-3 text-slate-800 transition hover:border-slate-400 hover:bg-white hover:text-slate-900"
                                        >
                                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-inner shadow-white/20">
                                                <Icon />
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-[0.6rem] uppercase tracking-[0.5em] text-slate-400">{name}</span>
                                                <span className="text-sm uppercase tracking-[0.3em]">{username}</span>
                                            </div>
                                            <span className="ml-auto text-lg text-slate-300 transition group-hover:text-slate-900">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <form className="mt-10 space-y-4 text-slate-900" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Нэр"
                                name="name"
                                className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm uppercase tracking-[0.3em]"
                            />
                            <input
                                type="email"
                                placeholder="И-мэйл"
                                name="email"
                                className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm uppercase tracking-[0.3em]"
                            />
                            <textarea
                                rows={3}
                                placeholder="Төслийн товч"
                                name="brief"
                                className="w-full rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-sm uppercase tracking-[0.3em]"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm uppercase tracking-[0.4em] text-white transition hover:bg-slate-800"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-50 pointer-events-none" />
                        <iframe
                            title="River Tower location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.429391913642!2d106.9316439309526!3d47.88919682581851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693d9016da98f%3A0xb9bf4db197008fba!2sRiver%20Tower!5e0!3m2!1sen!2smn!4v1763289182079!5m2!1sen!2smn"
                            className="h-full w-full rounded-[32px]"
                            style={{ border: 0 } as CSSProperties}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="pointer-events-none absolute inset-4 rounded-[28px] border border-white/60" />
                    </div>
                </div>
            </div>
        </section>
    );
}

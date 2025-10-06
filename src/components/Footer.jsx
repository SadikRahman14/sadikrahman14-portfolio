// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

// Edit these without touching the design:
const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/your-username", Icon: FaGithub },
    { label: "X", href: "https://x.com/your-handle", Icon: FaXTwitter },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-id", Icon: FaLinkedin },
    { label: "Email", href: "mailto:you@example.com", Icon: FiMail },
];

const Footer = () => {
    return (
        <footer className="relative mt-20 border-t border-white/10">
            {/* soft background accents */}
            <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-emerald-700/10 blur-3xl" />
            {/* thin emerald highlight */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center md:items-start gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-800 bg-clip-text text-transparent">
                            Sadik Rahman
                        </div>
                        <p className="mt-2 text-sm text-gray-400"> Backend Developer.</p>
                    </div>

                    {/* Nav */}
                    <nav className="order-3 md:order-none">
                        <ul className="flex justify-center flex-wrap gap-4">
                            {NAV_LINKS.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-emerald-2 00/80 hover:text-emerald-200 transition">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Socials */}
                    <div className="flex justify-center md:justify-end gap-3">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                           text-emerald-200/80 hover:text-emerald-200 hover:border-emerald-500/40 transition
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-gray-400">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                        {/* left spacer for desktop */}
                        <div className="hidden md:block" />

                        {/* centered name */}
                        <span className="justify-self-center">
                            {new Date().getFullYear()} @SadikRahman14. All rights reserved.
                        </span>

                        {/* right-aligned link */}
                        <a
                            href="#home"
                            className="justify-self-center md:justify-self-end inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition"
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

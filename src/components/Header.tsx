"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 border-b">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <Link href="/" className="font-extrabold text-xl">
                    <span className="px-1.5 py-0.5 bg-primary text-white mr-1 rounded">M</span>
                    uhammmad
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {nav.map(i => (
                        <a key={i.label} href={i.href} className="hover:text-primary transition-colors">
                            {i.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="/cv.pdf"
                        className="rounded-md bg-primary px-4 py-2 text-white text-sm hover:opacity-90"
                        download
                    >
                        Download CV
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

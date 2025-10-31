"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "@/components/ui/Buttons";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const handleDownloadCv = () => {
    const a = document.createElement("a");
    a.href = "/cv.pdf";
    a.download = "cv.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-neutral-200 bg-white/95 text-black
        backdrop-blur transition-colors
        dark:border-neutral-800 dark:bg-[#0b0b0b]/90 dark:text-white
      "
    >
      <div className="container px-5 mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-1 font-extrabold">
          <img src="/images/M.svg" alt="" className="h-[54px] w-[54px]" />
          <span className="text-3xl leading-none md:text-4xl">uhammad</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className="text-[18px] font-normal leading-none tracking-[0.03em] text-black transition-colors hover:text-primary dark:text-white/90"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            title="Download CV"
            className="px-5 py-3 text-white rounded-md hover:opacity-90 cursor-pointer"
            onClick={handleDownloadCv}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

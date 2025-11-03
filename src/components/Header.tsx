"use client";
import ThemeToggle from "./ThemeToggle";
import Button from "@/components/ui/Buttons";
import Logo from "@/components/Logo";
import NavBarMenu from "@/components/ui/NavBarMenu";

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
                <Logo/>
                <NavBarMenu/>
                <div className="flex items-center gap-3">
                    <Button
                        title="Download CV"
                        className="px-5 py-3 text-white rounded-md hover:opacity-90 cursor-pointer"
                        onClick={handleDownloadCv}
                    />
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}

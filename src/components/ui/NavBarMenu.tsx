import {navMenu} from "@/data";
import {navItem} from "@/types/content";

export default function NavBarMenu({className}: { className?: string }) {
    return (
        <nav className={`justify-center hidden items-center gap-6 md:flex ${className}`}>
            {navMenu.map((i: navItem) => (
                <a
                    key={i.label}
                    href={i.href}
                    className="text-[18px] font-normal leading-none tracking-[0.03em] text-black transition-colors hover:text-primary dark:text-white/90"
                >
                    {i.label}
                </a>
            ))}
        </nav>
    );
}
"use client";
import {enumTags, type Tag} from "@/types/content";

type Props = {
    active: Tag | "All";
    onSelectAction: (value: Tag | "All") => void;
    className?: string;
};

const items: (Tag | "All")[] = ["All", ...Object.values(enumTags)];

export default function ProjectsFilter({active, onSelectAction, className = ""}: Props) {
    return (
        <div className={`flex justify-center gap-4 overflow-x-auto pb-1 ${className}`}>
            {items.map((label) => {
                const isActive = active === label;
                return (
                    <button
                        key={label}
                        type="button"
                        onClick={() => onSelectAction(label)}
                        className={[
                            "rounded-lg px-4 md:px-4 py-2.5 md:py-[10px] text-[20px] md:text-[21px] leading-none",
                            "transition-colors border border-transparent cursor-pointer",
                            isActive ? "bg-primary text-white" : "bg-[#F3F3F3] text-black",
                        ].join(" ")}
                        aria-pressed={isActive}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}

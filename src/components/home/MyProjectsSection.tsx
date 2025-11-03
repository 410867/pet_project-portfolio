"use client";
import Image from "next/image";
import Section from "@/components/Section";
import ProjectsFilter from "@/components/home/ProjectsFilter";
import {projects} from "@/data";
import {type Project, type Tag} from "@/types/content";
import {useMemo, useState} from "react";

export default function MyProjectsSection() {
    const [active, setActive] = useState<Tag | "All">("UI/UX");
    const subTitle = "Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.";

    const filtered: Project[] = useMemo(
        () => (active === "All" ? projects : projects.filter((p) => p.tag === active)),
        [active]
    );

    return (
        <Section id="projects" title="My Projects" subtitle={subTitle}>
            <ProjectsFilter active={active} onSelectAction={setActive} className="mb-6"/>

            <div className="grid gap-6 md:grid-cols-3">
                {filtered.map((p: Project) => (
                    <div key={p.title} className="overflow-hidden">
                        <div
                            className="relative w-full h-auto aspect-[9/10] bg-gray-100 overflow-hidden">
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-contain"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                        </div>


                        <div className="p-4">
                            <span className="text-primary text-xs">
                                {p.tag}
                            </span>
                            <h4 className="mt-3 font-semibold">{p.title}</h4>
                        </div>
                    </div>

                ))}
            </div>
        </Section>
    );
}

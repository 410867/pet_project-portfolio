import Image from "next/image";
import SkillBar from "@/components/home/SkillBar";

type Skill = {
    label: string;
    value: number;
};

export default function AboutSection() {
    const skills: Skill[] = [
        {label: "UX", value: 100},
        {label: "Website Design", value: 92},
        {label: "App Design", value: 86},
        {label: "Graphic Design", value: 90},
    ];

    return (
        <section id="about">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <Image
                    src="/images/home/about-me-image.png"
                    alt="About"
                    width={420}
                    height={420}
                    className="mx-auto rounded-3xl"
                />
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-[65px] font-semibold">About me</h2>
                        <p className="text-[21px]">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
                            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
                            consectetur lacus
                        </p>
                    </div>
                    {skills.map((s: Skill) => (
                        <SkillBar key={s.label} label={s.label} value={s.value}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

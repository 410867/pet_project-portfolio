import Section from "@/components/Section";
import {services} from "@/data";
import Image from "next/image";

export default function ServicesSection() {
    const subtitle = "Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.";

    return (
        <Section id="services" title="Services" subtitle={subtitle}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                    <div
                        key={s.title}
                        className="rounded-2xl bg-[#F3F3F3] p-6 w-[330px]"
                    >
                        <div className="text-primary mb-3 text-3xl max-h-80px">
                            <Image src={`/images/home/services/${s.icon}`} alt={s.title} width={40} height={40}/>
                        </div>
                        <h3 className="text-lg font-semibold dark:text-[#000000]">{s.title}</h3>
                        <p className="mt-2 text-sm opacity-80 dark:text-[#000000]">{s.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
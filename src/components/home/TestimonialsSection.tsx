import Image from "next/image";
import Section from "@/components/Section";
import Carousel from "@/components/ui/Carousel";
import {commentList} from "@/data";
import {comment} from "@/types/content";

export default function TestimonialsSection() {
    const subTitle = "Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.";

    return (
        <Section id="testimonials" title="Testimonials" subtitle={subTitle}>
            <Carousel className="testimonials" bulletsTopMargin={32}>
                {commentList.map((it: comment) => (
                    <figure
                        key={it.name}
                        className="mx-auto w-full max-w-[1100px] rounded-2xl border-black/10 bg-black/[.03] p-12 dark:border-white/10 dark:bg-white/5 md:p-8"
                    >
                        <div className="grid gap-6 md:grid-cols-[235px_1fr] md:items-start">
                            <div className="mx-auto md:mx-0">
                                <Image
                                    src={it.avatar}
                                    alt={it.name}
                                    width={235}
                                    height={235}
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <div>
                                <div className="relative mb-4">
                                    <span
                                        className="absolute -left-4 -top-2 text-[32px] font-bold text-[var(--color-primary,#FF7A00)]">
                                        “
                                    </span>
                                    <p className="m-0 text-[21px] leading-8 text-[#424242] dark:text-white/90">
                                        {it.text}
                                        <span
                                            className="ml-1 text-[32px] font-bold text-[var(--color-primary,#FF7A00)]">
                                          “
                                        </span>
                                    </p>
                                </div>
                                <figcaption>
                                    <div className="text-2xl font-semibold">{it.name}</div>
                                    <div className="text-[19px]"> {it.role}</div>
                                </figcaption>
                            </div>
                        </div>
                    </figure>
                ))}
            </Carousel>
        </Section>
    );
}

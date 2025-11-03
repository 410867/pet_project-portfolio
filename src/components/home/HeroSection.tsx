import {Mail} from "lucide-react";
import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:py-24"
        >
            <div className="max-w-[518px] flex flex-col justify-center gap-7">
                <div className="flex flex-col gap-1">
                    <p className="text-[21px] font-sans font-semibold">Hi I am</p>
                    <p className="text-[32px] text-primary font-sans font-semibold">
                        Muhammad Bin Jameel
                    </p>
                    <h1 className="m-0 text-5xl leading-tight font-extrabold md:text-7xl">
                        UI &amp; UX
                        <br/>
                        <span className="w-full flex flex-row-reverse">Designer</span>
                    </h1>
                    <p className="m-0 text-[21px] w-full">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
                        felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
                        consectetur lacus
                    </p>
                </div>

                <a
                    href="#contact"
                    className="w-[188px] bg-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-white"
                >
                    <Mail size={18}/> Hire Me
                </a>
            </div>

            <div className="relative">
                <div className="bg-primary/10 absolute inset-0 -z-10 rounded-full blur-3xl"/>
                <Image
                    src="/images/home/hero-image.png"
                    alt="Portrait"
                    width={520}
                    height={520}
                    priority
                    className="mx-auto rounded-[32px] object-cover"
                />

                <SocialLinks className="mt-5"/>
            </div>
        </section>
    );
}

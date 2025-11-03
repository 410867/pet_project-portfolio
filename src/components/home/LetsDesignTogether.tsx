import Section from "@/components/Section";

export default function LetsDesignTogether() {
    const subTitle = "Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.";

    return (
        <Section id="contact" title="Lets Design Together" subtitle={subTitle}>
            <form className="mx-auto flex max-w-xl gap-3">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 rounded-md border-[1px] border-[#AFAFAF] bg-transparent px-4 py-3"
                />
                <button
                    type="submit"
                    className="bg-primary rounded-md px-5 py-3 text-white cursor-pointer"
                >
                    Contact Me
                </button>
            </form>
        </Section>
    );
}
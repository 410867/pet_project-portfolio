import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex justify-center items-center gap-1 font-extrabold">
            <img src="/images/M.svg" alt="" className="h-[54px] w-[54px]"/>
            <span className="text-3xl leading-none md:text-4xl">uhammad</span>
        </Link>
    );
}
import Logo from "@/components/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import NavBarMenu from "@/components/ui/NavBarMenu";

export default function Footer() {
    return (
        <footer className="w-full pt-10 bg-[#F8F8F8] dark:bg-[#000000]">
            <div className="w-full flex flex-col justify-center gap-[55px]">
                <Logo/>
                <NavBarMenu/>
                <SocialLinks/>
                <div className="w-full flex justify-center bg-[#545454] dark:bg-[#121212] p-[26px]">
                    <p className="m-0 text-sm text-center text-[#FFFFFF] dark:text-[#FFFFFF]">
                        © 2023 <b className="text-primary">Muhammad</b> All Rights Reserved., Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}

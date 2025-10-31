import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function HomePage() {
    return (
        <>
            <Header/>

            <div className="px-5">
                <HeroSection/>
                <AboutSection/>
                <ServicesSection/>
            </div>
        </>
    );
}

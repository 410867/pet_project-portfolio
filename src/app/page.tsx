import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import MyProjectsSection from "@/components/home/MyProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LetsDesignTogether from "@/components/home/LetsDesignTogether";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col items-center">
            <Header/>

            <div className="max-w-[1452px] px-5">
                <HeroSection/>
                <AboutSection/>
                <ServicesSection/>
                <MyProjectsSection/>
                <TestimonialsSection/>
                <LetsDesignTogether/>
            </div>

            <Footer/>
        </div>
    );
}

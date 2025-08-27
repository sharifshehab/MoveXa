import Container from "@/components/Container";
import AboutSection from "@/components/modules/HomePage/AboutSection";
import BlogSection from "@/components/modules/HomePage/BlogSection";
import FactsSection from "@/components/modules/HomePage/FactsSection";
import FaqSection from "@/components/modules/HomePage/FaqSection";
import HeroSection from "@/components/modules/HomePage/HeroSection";
// import NewsletterSection from "@/components/modules/HomePage/NewsletterSection";
import ServiceSection from "@/components/modules/HomePage/ServiceSection";
import TestimonialSection from "@/components/modules/HomePage/TestimonialSection";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";


const HomePage = () => {
    useEffect(() => {
        TabTitle('MoveXa | Home');
    }, []);
    return (
        <>
            <HeroSection />
            <Container>
                <AboutSection />
                <FactsSection />
                <ServiceSection />
                <TestimonialSection />
                <FaqSection />
                <BlogSection />
            </Container>
            {/* <NewsletterSection /> */}
        </>
    );
};

export default HomePage;
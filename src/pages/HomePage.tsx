import Container from "@/components/Container";
import AboutSection from "@/components/modules/HomePage/AboutSection";
import BlogSection from "@/components/modules/HomePage/BlogSection";
import FactsSection from "@/components/modules/HomePage/FactsSection";
import FaqSection from "@/components/modules/HomePage/FaqSection";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import NewsletterSection from "@/components/modules/HomePage/NewsletterSection";
import ServiceSection from "@/components/modules/HomePage/ServiceSection";
import TestimonialSection from "@/components/modules/HomePage/TestimonialSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Container>
                <AboutSection />
                <ServiceSection />
                <FactsSection />
                <TestimonialSection />
                <FaqSection />
                <BlogSection />
            </Container>
            <div className="bg-primary border-b border-b-neutral-500">
                <NewsletterSection />
            </div>
        </>
    );
};

export default HomePage;
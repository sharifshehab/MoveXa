import Container from "@/components/Container";
import BreadCrumb from "@/components/modules/About/BreadCrumb";
import Team from "@/components/modules/About/Team";
import AboutSection from "@/components/modules/HomePage/AboutSection";
import FactsSection from "@/components/modules/HomePage/FactsSection";
import TestimonialSection from "@/components/modules/HomePage/TestimonialSection";

const About = () => {
    return (
        <>
            <BreadCrumb heading="About Us" />
            <Container>
                <AboutSection />
                <FactsSection />
                <Team />
                <TestimonialSection/>
            </Container>
        </>
    );
};

export default About;
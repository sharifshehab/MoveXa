import Container from "@/components/Container";
import AboutSection from "@/components/modules/HomePage/AboutSection";
import HeroSection from "@/components/modules/HomePage/HeroSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Container>
                <AboutSection/>
            </Container>
        </>
    );
};

export default HomePage;
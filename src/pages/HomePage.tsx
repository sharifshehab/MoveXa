import Container from "@/components/Container";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import { Button } from "@/components/ui/button";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Container>
                <div className="bg-primary">
                    <Button className="bg-primary">Click</Button>
                </div>
                <div className="bg-secondary">
                    <Button className="bg-primary">Click</Button>
                </div>
            </Container>
        </>
    );
};

export default HomePage;
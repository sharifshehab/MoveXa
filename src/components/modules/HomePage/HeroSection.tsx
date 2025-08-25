import { Button } from "@/components/ui/button";
import bannerImage from "../../../assets/images/hero-bg.webp";
import Container from "@/components/Container";
const HeroSection = () => {
    return (
        <div className="relative w-full h-full">
            <img src={bannerImage} alt="" />
            <div className="absolute inset-0 flex items-center">
                <Container>
                    <div className="text-white max-w-2xl space-y-2 mb-6">
                        <h1 className="font-yantramanav font-black text-3xl md:text-7xl leading-24">FAST AND RELIABLE MOVERS</h1>
                        <p>Professionally strategize stand-alone functionalities and cooperative total linkage. Objectively predominate vi
                            quality vectors with orthogonal.</p>
                    </div>
                    <div className="space-x-6">
                        <Button className="rounded-none px-8 py-6 text-lg mxa-btn">Explore Services</Button>
                        <Button className="rounded-none px-8 py-6 text-lg mxa-btn bg-white text-primary hover:bg-white hover:opacity-95">Contact Us</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default HeroSection;

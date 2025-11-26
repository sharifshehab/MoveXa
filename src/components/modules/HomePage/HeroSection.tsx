import { Button } from "@/components/ui/button";
import bannerImage from "../../../assets/images/hero-bg.webp";
import Container from "@/components/Container";
const HeroSection = () => {
    return (
        <div className="relative w-full h-full">
            <img src={bannerImage} alt="" className="w-full" />
            <div className="absolute inset-0 flex items-center">
                <Container>
                    <div className="text-white max-w-2xl space-y-2 mb-6">
                        <h1 className="font-yantramanav font-black text-2xl md:text-7xl" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-sine">FAST AND RELIABLE</h1>
                        <h1 className="font-yantramanav font-black text-2xl md:text-7xl" data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-in-sine">MOVERS</h1>
                        <p data-aos="zoom-in" data-aos-duration="1600" className="text-sm md:text-base">Seamlessly deliver secure and efficient parcel solutions. Professionally enhance customer trust with innovative logistics systems and reliable end-to-end service.</p>
                    </div>
                    <div className="space-x-6">
                        <Button variant={"primary"} className="px-8 py-6 dark:bg-secondary" data-aos="fade-up-right" data-aos-duration="1200">Explore Services</Button>
                        <Button variant={"secondary"} className="px-8 py-6" data-aos="fade-up-left" data-aos-duration="1200">Contact Us</Button>
                        {/* data-aos-delay={300} */}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default HeroSection;

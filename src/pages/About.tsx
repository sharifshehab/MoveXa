import Container from "@/components/Container";
import BreadCrumb from "@/components/modules/About/breadcrumb";
import Team from "@/components/modules/About/Team";
import AboutSection from "@/components/modules/HomePage/AboutSection";
import FactsSection from "@/components/modules/HomePage/FactsSection";
import TestimonialSection from "@/components/modules/HomePage/TestimonialSection";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";


const About = () => {
        useEffect(() => {
            TabTitle('MoveXa | About');
        }, []);
    return (
        <>
            <BreadCrumb heading="About Us" />
            <Container>
                <AboutSection />
                <FactsSection />
                <Team />
                <div className="pb-52">
                    <TestimonialSection />
                </div>
            </Container>
        </>
    );
};

export default About;
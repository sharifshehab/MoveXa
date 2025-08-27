import Container from "@/components/Container";
import ContactForm from "@/components/modules/Contact/ContactForm";
import ContactInfo from "@/components/modules/Contact/ContactInfo";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";

const Contact = () => {
        useEffect(() => {
            TabTitle('MoveXa | Contact');
        }, []);
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-32">
                    <div className="bg-primary flex-center justify-center">
                        <ContactInfo />
                    </div>
                    <ContactForm />
                </div>
            </Container>
        </>
    );
};

export default Contact;
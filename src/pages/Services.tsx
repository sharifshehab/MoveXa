import Container from "@/components/Container";
import BreadCrumb from "@/components/modules/About/breadcrumb";
import Stepper from "@/components/modules/Services/Stepper";
import TitleSection from "@/components/TitleSection";

const Services = () => {
    return (
        <>
            <BreadCrumb heading="Services" />
            <Container>

                <TitleSection title="Service" size="xl"></TitleSection>
                <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14" data-aos="zoom-in">MoveXa – Fast & Reliable Parcel Delivery</h2>

                <div className="space-y-8">
                    <div className="breadcrumbImg">
                        <div className="bg-primary ps-16 py-28 next-cut">
                            <h3 className="heading text-white text-4xl">Sender</h3>
                            <p className="text-white">Reliable service building trust with every delivery.</p>
                        </div>
                    </div> {/* sender */}

                    <div className="breadcrumbImg">
                        <div className="bg-secondary pe-16 py-28 prev-cut">
                            <h3 className="heading text-white text-4xl text-right">Receiver</h3>
                            <p className="text-white text-right">Reliable service building trust with every delivery.</p>
                        </div>
                    </div> {/* receiver */}
                </div> {/* users wrap */}


                <TitleSection title="Keep in touch" size="xl"></TitleSection>
                <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14" data-aos="zoom-in">MoveXa – Fast & Reliable Parcel Delivery</h2>

                <div className="space-y-8">
                    <Stepper/>

                </div> {/* track wrap */}

            </Container>
        </>
    );
};

export default Services;
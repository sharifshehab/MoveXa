import aboutImage from "../../../assets/images/abt.jpg";
import aboutImage2 from "../../../assets/images/about-img-2.jpg";
import customerServiceIcon from "../../../assets/icons/customer-service.png";
import solutionIcon from "../../../assets/icons/solution.png";
import { Button } from "@/components/ui/button";
import TitleSection from "@/components/TitleSection";

const AboutSection = () => {
    return (
        <section className="spacing">
            <div className="flex-center flex-col lg:flex-row justify-between">
                <div className="flex-1 relative">
                    <img src={aboutImage} alt="" className="w-[580px] border-l-4 border-t-4 border-white"/>
                    <img src={aboutImage2} alt="" className="hidden lg:block shadow-xl absolute -bottom-12 right-20 border-r-4 border-b-4 border-white"/>
                </div>
                <div className="flex-1">
                    <TitleSection title="About" size="xl"></TitleSection>
                    <>
                        <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14">MoveXa – Fast & Reliable Parcel Delivery</h2>
                        <p className="py-5">MoveXa is your trusted parcel delivery solution, designed to make sending and receiving parcels simple, fast, and reliable. From instant booking to real-time tracking, we provide a transparent delivery process that ensures your packages arrive on time, every time. Whether for personal needs or business logistics, MoveXa keeps you connected with a secure and hassle-free delivery experience.</p>
                    </>
                    <div className="flex-center justify-between border-b dark:border-b-white pb-8 mb-8">
                        <div className="flex-center flex-col md:flex-row gap-3.5">
                            <img src={solutionIcon} alt="" />
                            <h4 className="title text-lg md:text-xl">Track. Send. Receive.<br /> Simplified & Seamless.</h4>
                        </div>
                        <div className="flex-center flex-col md:flex-row gap-3.5">
                            <img src={customerServiceIcon} alt="" />
                            <h4 className="title text-lg md:text-xl">Stand by team support, <br />24/7 Online</h4>
                        </div>
                    </div>
                    <div className="flex-center justify-between gap-20">
                        <Button variant={"primary"} className="px-8 py-6 dark:bg-secondary">Know More</Button>
                        <div className="flex-center gap-2.5">
                            <div className="bg-card rounded-full p-1 inline-flex drop-shadow-lg">
                                <img
                                    src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996"
                                    alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[22px] text-primary dark:text-secondary font-bold font-yantramanav italic">Ronni.M</h3>
                                <p className="text-sm">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
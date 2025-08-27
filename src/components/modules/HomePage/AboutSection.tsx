import aboutImage from "../../../assets/images/about-img.webp";
import customerServiceIcon from "../../../assets/icons/customer-service.png";
import solutionIcon from "../../../assets/icons/solution.png";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
    return (
        <section className="spacing">
            <div className="flex-center flex-col lg:flex-row justify-between">
                <div className="flex-1">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="flex-1">
                    <>
                        <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14">BEST WORLD’S LEADING LOGISTIC & TRANSPORT COMPANY</h2>
                        <p className="py-5">Objectively transition 24/365 e-tailers before cross functional collaboration and idea-sharing. Competently iterate
                            cross functional collaboration and idea-sharing. Competently iterate
                            cross functional collaboration and idea-sharing. Competently iterateplug-and-play deliverables vis-a-vis parallel relationships.</p>
                    </>
                    <div className="flex-center justify-between border-b dark:border-b-white pb-8 mb-8">
                        <div className="flex-center flex-col md:flex-row gap-3.5">
                            <img src={solutionIcon} alt="" />
                            <h4 className="title text-lg md:text-xl">Unlimited Revisions <br /> & Best Solutions</h4>
                        </div>
                        <div className="flex-center flex-col md:flex-row gap-3.5">
                            <img src={customerServiceIcon} alt="" />
                            <h4 className="title text-lg md:text-xl">Unlimited Revisions <br /> & Best Solutions</h4>
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
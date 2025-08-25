import { Lightbulb } from "lucide-react";
import aboutImage from "../../../assets/images/about-img.webp";

const AboutSection = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <img src={aboutImage} alt="" />
            </div>
            <div className="flex-1">
                <div className="border-b-2 my-3">
                    <h2 className="heading">BEST WORLD’S LEADING LOGISTIC & TRANSPORT COMPANY</h2>
                    <p className="pb-3">Objectively transition 24/365 e-tailers before cross functional collaboration and idea-sharing. Competently iterate plug-and-play deliverables vis-a-vis parallel relationships.</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-2">
                        <Lightbulb className="text-primary" size={30} />
                        <h4 className="title">Unlimited Revisions <br /> & Best Solutions</h4>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <Lightbulb className="text-primary" />
                        <h4 className="title">Unlimited Revisions <br /> & Best Solutions</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
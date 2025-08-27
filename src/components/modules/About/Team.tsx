import TitleSection from "@/components/TitleSection";
import img from "../../../assets/images/1.png"
import img1 from "../../../assets/images/1.jpg"
import img2 from "../../../assets/images//4.jpg"
import img3 from "../../../assets/images//5.jpg"
const Team = () => {
    return (
        <section className="spacing">
            <div className="mb-5 text-center">
                <TitleSection title="Our Team" size="3xl"></TitleSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <div className="bg-card">
                    <img src={img} alt="" className="w-full" />
                    <div className="bg-primary dark:bg-secondary text-center text-white py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Ethan Carter</h3>
                        <span className="opacity-90">Chief Executive Officer (CEO)</span>
                    </div>
                </div>
                <div className="bg-card">
                    <img src={img1} alt="" className="w-full" />
                    <div className="bg-primary text-center text-card py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Aryan Rahman</h3>
                        <span className="text-card opacity-90">Head of Operations</span>
                    </div>
                </div>
                <div className="bg-card">
                    <img src={img2} alt="" className="w-full" />
                    <div className="bg-primary text-center text-card py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Liam Nguyen</h3>
                        <span className="text-card opacity-90">Lead Software Engineer</span>
                    </div>
                </div>
                <div className="bg-card">
                    <img src={img3} alt="" className="w-full" />
                    <div className="bg-primary text-center text-card py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Sophia Kim</h3>
                        <span className="text-card opacity-90">Customer Support Manager</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
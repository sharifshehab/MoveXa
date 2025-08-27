import TitleSection from "@/components/TitleSection";
import { ArrowRight, ClipboardClock, Package, TruckElectric } from "lucide-react";
import { FaTimeline } from "react-icons/fa6";


const ServiceSection = () => {
    return (
        <section className="spacing">
            <div className="mb-5 text-center">
                <TitleSection title="Services" size="3xl"></TitleSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

                <div className="single-service bg-card px-8">
                    <div className="border-t-4 border-primary dark:border-white py-8">
                        <div className="border-b pb-4 space-y-4 relative">
                            <TruckElectric size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Express Delivery
                            </h3>
                            <p>Quickly optimize cooperative delivery networks for high-speed, reliable parcel transport. Drive innovative logistics and ensure on-time delivery across regions.</p>
                            <TruckElectric size={110} className="text-primary opacity-20 absolute -top-9 -right-9 R-icon transition-opacity duration-500 ease-in-out" />
                        </div>
                        <div className="pt-5 flex-center justify-between">
                            <h5 className="text-primary font-yantramanav text-base uppercase font-semibold">Read More</h5>
                            <span className="bg-primary rounded-full p-1 hover:opacity-90"><ArrowRight size={18} className="text-card" /></span>
                        </div>
                    </div>
                </div> {/* single service */}

                <div className="single-service bg-card px-8">
                    <div className="border-t-4 border-primary dark:border-white py-8">
                        <div className="border-b pb-4 space-y-4 relative">
                            <FaTimeline size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Parcel Tracking
                            </h3>
                            <p>Seamlessly monitor shipment progress in real-time for end-to-end visibility. Enhance customer satisfaction and operational efficiency with transparent tracking.</p>
                            <FaTimeline size={110} className="text-primary opacity-20 absolute -top-9 -right-8 R-icon transition-opacity duration-500 ease-in-out" />
                        </div>
                        <div className="pt-5 flex-center justify-between">
                            <h5 className="text-primary font-yantramanav text-base uppercase font-semibold">Read More</h5>
                            <span className="bg-primary rounded-full p-1 hover:opacity-90"><ArrowRight size={18} className="text-card" /></span>
                        </div>
                    </div>
                </div> {/* single service */}

                <div className="single-service bg-card px-8">
                    <div className="border-t-4 border-primary dark:border-white py-8">
                        <div className="border-b pb-4 space-y-4 relative">
                            <Package size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Secure Packaging
                            </h3>
                            <p>Strategically implement robust packaging solutions to safeguard parcels during transit. Elevate reliability and maintain quality standards throughout process.</p>
                            <Package size={110} className="text-primary opacity-20 absolute -top-9 -right-10 R-icon transition-opacity duration-500 ease-in-out" />
                        </div>
                        <div className="pt-5 flex-center justify-between">
                            <h5 className="text-primary font-yantramanav text-base uppercase font-semibold">Read More</h5>
                            <span className="bg-primary rounded-full p-1 hover:opacity-90"><ArrowRight size={18} className="text-card" /></span>
                        </div>
                    </div>
                </div> {/* single service */}

                <div className="single-service bg-card px-8">
                    <div className="border-t-4 border-primary dark:border-white py-8">
                        <div className="border-b pb-4 space-y-4 relative">
                            <ClipboardClock size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Scheduled Pickup
                            </h3>
                            <p>Efficiently coordinate parcel pickups at your preferred time and location. Streamline operations while providing a flexible, customer-focused service experience.</p>
                            <ClipboardClock size={110} className="text-primary opacity-20 absolute -top-9 -right-9 R-icon transition-opacity duration-500 ease-in-out" />
                        </div>
                        <div className="pt-5 flex-center justify-between">
                            <h5 className="text-primary font-yantramanav text-base uppercase font-semibold">Read More</h5>
                            <span className="bg-primary rounded-full p-1 hover:opacity-90"><ArrowRight size={18} className="text-card" /></span>
                        </div>
                    </div>
                </div> {/* single service */}


            </div>{/* grid wrap */}
        </section>
    );
};

export default ServiceSection;

/* 
    .nav-links li:hover ul.drop {
    display: block; <!-- "ul" will show when "li" is hover -->
    }
*/
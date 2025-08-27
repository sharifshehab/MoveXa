import { ArrowRight, Package } from "lucide-react";



const ServiceSection = () => {
    return (
        <section className="spacing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

                <div className="single-service bg-card px-8">
                    <div className="border-t-4 border-primary dark:border-white py-8">
                        <div className="border-b pb-4 space-y-4 relative">
                            <Package size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Title
                            </h3>
                            <p>Quickly optimize cooperative models for long-term high-impact ROI. Drive innovative e-commerce and distributed paradigms.</p>
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
                            <Package size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Title
                            </h3>
                            <p>Quickly optimize cooperative models for long-term high-impact ROI. Drive innovative e-commerce and distributed paradigms.</p>
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
                            <Package size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Title
                            </h3>
                            <p>Quickly optimize cooperative models for long-term high-impact ROI. Drive innovative e-commerce and distributed paradigms.</p>
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
                            <Package size={60} className="text-primary L-icon transition-opacity duration-500 ease-in-out" />
                            <h3 className="heading text-2xl">
                                Title
                            </h3>
                            <p>Quickly optimize cooperative models for long-term high-impact ROI. Drive innovative e-commerce and distributed paradigms.</p>
                            <Package size={110} className="text-primary opacity-20 absolute -top-9 -right-10 R-icon transition-opacity duration-500 ease-in-out" />
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
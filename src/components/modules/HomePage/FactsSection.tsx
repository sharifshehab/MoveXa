import TitleSection from "@/components/TitleSection";

const FactsSection = () => {
    return (
        <section className="spacing">
            <div className="mb-5 text-center">
                <TitleSection title="Our Track Record" size="3xl"></TitleSection>
            </div>
            <div className="bg-secondary border-t-8 border-primary dark:border-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 py-12">

                <div className="border-b-2 sm:border-b-0 sm:border-r-2 text-white space-y-1.5 pr-5">
                    <h3 className="heading text-primary text-4xl">2000+</h3>
                    <h4 className="text-lg">Parcels Delivered</h4>
                    <p className="text-base">Seamlessly connecting senders and receivers across the globe.</p>
                </div>
                <div className="border-b-2 sm:border-b-0 sm:border-r-2 text-white space-y-1.5 pr-5">
                    <h3 className="heading text-primary text-4xl">500+</h3>
                    <h4 className="text-lg">Trusted Clients</h4>
                    <p className="text-base">Reliable service building trust with every delivery.</p>
                </div>
                <div className="border-b-2 sm:border-b-0 sm:border-r-2 text-white space-y-1.5 pr-5">
                    <h3 className="heading text-primary text-4xl">90%</h3>
                    <h4 className="text-lg">On-Time Delivery</h4>
                    <p className="text-base">Ensuring your parcels reach on schedule, every time.</p>
                </div>
                <div className="text-white space-y-1.5 lg:border-r-0 sm:border-r-2 pr-5">
                    <h3 className="heading text-primary text-4xl">24/7</h3>
                    <h4 className="text-lg">Customer Assistance</h4>
                    <p className="text-base">Always available to track, guide, and support your deliveries.</p>
                </div>

            </div>
        </section>
    );
};

export default FactsSection;

import img from "../../../assets/images/team.png"
const Team = () => {
    return (
        <section className="spacing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <div className="bg-card">
                    <img src={img} alt="" className="w-full" />
                    <div className="bg-primary dark:bg-secondary text-center text-white py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Jhon mars</h3>
                        <span className="opacity-90">Founder</span>
                    </div>
                </div>
                <div className="bg-card">
                    <img src={img} alt="" className="w-full" />
                    <div className="bg-primary text-center text-card py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Jhon mars</h3>
                        <span className="text-card opacity-90">Founder</span>
                    </div>
                </div>
                <div className="bg-card">
                    <img src={img} alt="" className="w-full" />
                    <div className="bg-primary text-center text-card py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Jhon mars</h3>
                        <span className="text-card opacity-90">Founder</span>
                    </div>
                </div>
                <div className="bg-card">
                    <img src={img} alt="" className="w-full" />
                    <div className="bg-primary text-center text-card py-1">
                        <h3 className="text-2xl font-yantramanav capitalize">Jhon mars</h3>
                        <span className="text-card opacity-90">Founder</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
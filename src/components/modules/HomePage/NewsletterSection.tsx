import { IoIosSend } from "react-icons/io";

const NewsletterSection = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-primary lg:col-span-1 col-span-4 ">
                Logo
            </div>
            <div className="col-span-4 lg:col-span-3 bg-secondary py-14">

                <h2 className="heading text-card text-2xl lg:text-3xl leading-10">SUBSCRIBE OUR LATEST NEWS & ARTICLES.</h2>
                <div
                    className="flex-center justify-between  w-full sm:w-[65%] mx-auto">
                    <input placeholder="Enter your email..."
                        className="py-3 px-4 w-full bg-white outline-none" />

                    <button className="py-3 px-6 bg-primary"><IoIosSend size={28} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
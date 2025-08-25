const NewsletterSection = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-primary"></div>
            <div className="col-span-3 bg-secondary flex items-center">
                <h2>SUBSCRIBE OUR LATEST NEWS & ARTICLES.</h2>
                <div
                    className="flex lg:flex-row flex-col items-center justify-between gap-[20px] w-full sm:w-[65%] mx-auto mt-12">
                    <input placeholder="Enter your email..."
                        className="py-4 px-4 w-full bg-[#6C6F87] border-2 border-gray-400 outline-none" />

                    <button className="w-full lg:w-fit py-4 px-12 bg-white text-black">submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
import quoteImage from "../../../assets/icons/quote.png"
const TestimonialSection = () => {
    return (
        <section className="grid grid-cols-3 gap-4 spacing">

            <div className="p-8 bg-muted relative">
                <p className="text-justify my-3 text-secondary border-l-4 border-primary px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                </p>

                <div className="flex-center gap-4 mt-5">
                    <img
                        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                        alt="demo/image"
                        className="w-12 h-12 object-cover rounded-full bg-white p-1"
                    />
                    <div>
                        <h2 className="title text-xl">Jhone Dehon</h2>
                        <p className="text-sm text-primary">CEO of Miracle</p>
                    </div>
                </div>
                <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
            </div>


        </section>/* grid  */
    );
};

export default TestimonialSection;
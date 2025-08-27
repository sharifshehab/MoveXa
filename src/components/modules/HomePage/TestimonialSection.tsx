import quoteImage from "../../../assets/icons/quote.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const TestimonialSection = () => {
    return (
        <section className="spacing">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                        
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="testimonialSwiper"
            >

                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="text-justify my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
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
                                <h2 className="title dark:text-white text-xl">Shon Dehon</h2>
                                <p className="text-sm text-primary">CEO of Miracle</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="text-justify my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
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
                                <h2 className="title dark:text-white text-xl">Shon Dehon</h2>
                                <p className="text-sm text-primary">CEO of Miracle</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="text-justify my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
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
                                <h2 className="title dark:text-white text-xl">Shon Dehon</h2>
                                <p className="text-sm text-primary">CEO of Miracle</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="text-justify my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
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
                                <h2 className="title dark:text-white text-xl">Shon Dehon</h2>
                                <p className="text-sm text-primary">CEO of Miracle</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
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
                                <h2 className="title dark:text-white text-xl">Shon Dehon</h2>
                                <p className="text-sm text-primary">CEO of Miracle</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default TestimonialSection;
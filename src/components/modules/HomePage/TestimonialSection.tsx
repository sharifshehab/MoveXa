import quoteImage from "../../../assets/icons/quote.png"
import img from "../../../assets/images/tes-2.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import TitleSection from "@/components/TitleSection";

const TestimonialSection = () => {
    return (
        <section className="spacing">
            <div className="mb-5 text-center">
                <TitleSection title="Testimonials" size="3xl"></TitleSection>
            </div>
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
                        <p className=" my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
                            MoveXa has completely transformed the way we manage our deliveries. The tracking system is seamless, and our customers are happier than ever.
                        </p>

                        <div className="flex-center gap-4 mt-5">
                            <img
                                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                                alt="demo/image"
                                className="w-12 h-12 object-cover rounded-full bg-white p-1"
                            />
                            <div>
                                <h2 className="title dark:text-white text-xl">John Doe – </h2>
                                <p className="text-sm text-primary">CEO of Swift Logistics</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
                            I love how reliable and fast the deliveries are. The customer support team is always available and super helpful.
                        </p>

                        <div className="flex-center gap-4 mt-5">
                            <img
                                src={img}
                                alt="demo/image"
                                className="w-12 h-12 object-cover rounded-full bg-white p-1"
                            />
                            <div>
                                <h2 className="title dark:text-white text-xl">Sarah Lee –</h2>
                                <p className="text-sm text-primary">E-commerce Manager</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
                            Scheduling pickups has never been easier. MoveXa saves me hours each week and keeps my clients satisfied.
                        </p>

                        <div className="flex-center gap-4 mt-5">
                            <img
                                src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996"                                alt="demo/image"
                                className="w-12 h-12 object-cover rounded-full bg-white p-1"
                            />
                            <div>
                                <h2 className="title dark:text-white text-xl">Shon Dehon</h2>
                                <p className="text-sm text-primary">E-commerce Manager</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="my-3 text-secondary dark:text-white border-l-4 border-primary px-3">
                            Real-time tracking and status updates are a game-changer. I can now plan my logistics with much more efficiency.
                        </p>

                        <div className="flex-center gap-4 mt-5">
                            <img
                                src={img}
                                alt="demo/image"
                                className="w-12 h-12 object-cover rounded-full bg-white p-1"
                            />
                            <div>
                                <h2 className="title dark:text-white text-xl">Michael Smith –</h2>
                                <p className="text-sm text-primary">Small Business Owner</p>
                            </div>
                        </div>
                        <img src={quoteImage} alt="" className="absolute right-8 -top-12 w-12" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-8 bg-card relative mt-12">
                        <p className="my-3 text-secondary border-l-4 border-primary px-3">
                            The parcel packaging is secure and professional. I feel confident sending important documents without any worries.
                        </p>

                        <div className="flex-center gap-4 mt-5">
                            <img
                                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                                alt="demo/image"
                                className="w-12 h-12 object-cover rounded-full bg-white p-1"
                            />
                            <div>
                                <h2 className="title dark:text-white text-xl">Emily Johnson -</h2>
                                <p className="text-sm text-primary">Freelancer</p>
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
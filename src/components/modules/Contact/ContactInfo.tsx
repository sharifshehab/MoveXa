import { Phone } from "lucide-react";
// react icons
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const ContactInfo = () => {
    return (

        <aside className="w-full flex flex-col justify-between p-[25px]">

            <div>
                <h1 className="heading text-3xl md:text-[40px] leading-10 md:leading-14">Contact
                    Information</h1>
                <p className="text-[0.9rem] mt-1 mb-8 text-white">Say something to start a live
                    Have a question or need assistance? We’re here to help! Reach out to our team and we’ll get back to you as quickly as possible. Whether it’s a query, feedback, or partnership opportunity, your message matters to us.</p>
            </div>

            <div className="flex flex-col gap-[20px] text-card">
                <p className="flex items-center gap-[8px]">
                    <Phone size={18}/>
                    +8801305282768
                </p>
                <p className="flex items-center break-all gap-[8px]">
                    <MdOutlineEmail size={18}/>
                    zenuilibrary@gmail.com
                </p>
                <p className="flex items-center gap-[8px]">
                    <IoLocationOutline size={20}/>
                    Kulaura, Moulvibazar, Sylhet
                </p>
            </div>

            <div className="flex gap-4 flex-wrap mt-8">
                <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-secondary text-white hover:opacity-85 hover:text- transition-all duration-300  boxShadow">
                    <CgFacebook />
                </a>
                <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-secondary text-white hover:opacity-85 hover:text- transition-all duration-300 boxShadow">
                    <BsTwitter />
                </a>
                <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-secondary text-white hover:opacity-85 hover:text- transition-all duration-300  boxShadow">
                    <BsInstagram />
                </a>
                <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-secondary text-white hover:opacity-85 hover:text- transition-all duration-300 boxShadow">
                    <BsLinkedin />
                </a>
            </div>
            </aside>

    );
};

export default ContactInfo;
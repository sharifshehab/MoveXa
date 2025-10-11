import faqImage from "../../../assets/images/faq-img.webp";
import aboutImage2 from "../../../assets/images/about-img-2.jpg";
import TitleSection from "@/components/TitleSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const items = [
    {
        id: "1",
        title: "What makes coss.com ui different?",
        content:
            "coss.com ui focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
    },
    {
        id: "2",
        title: "How can I customize the components?",
        content:
            "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
    },
    {
        id: "3",
        title: "Is coss.com ui optimized for performance?",
        content:
            "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
    },
    {
        id: "4",
        title: "How accessible are the components?",
        content:
            "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
    },
]

const FaqSection = () => {

    return (
        <section className="spacing">
            <div className="grid grid-cols-12 place-items-center gap-14">

                <div className="col-span-full lg:col-span-6">
                    <img src={faqImage} alt="" className="border-l-4  border-primary " />
                </div>

                <div className="col-span-full lg:col-span-6">
                    <TitleSection title="FAQ" size="xl"></TitleSection>
                    <>
                        <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14">FREQUENTLY ASKED ANY QUESTION</h2>
                        <p className="py-5">MoveXa is your trusted parcel delivery solution, designed to make sending and receiving parcels simple, fast, and reliable. From instant booking to real-time tracking, we provide a transparent delivery process that ensures your packages arrive on time, every time. Whether for personal needs or business logistics, MoveXa keeps you connected with a secure and hassle-free delivery experience.</p>
                    </>

                        <div className="space-y-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full -space-y-px"
                                defaultValue="3"
                            >
                                {items.map((item) => (
                                    <AccordionItem
                                        value={item.id}
                                        key={item.id}
                                        className="relative border bg-background space-y-1 outline-none  has-focus-visible:z-10 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                                    >
                                        <AccordionTrigger className="text-[15px] text-white leading-6 hover:no-underline focus-visible:ring-0 bg-primary px-3 rounded-none">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-2 text-muted-foreground p-3">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
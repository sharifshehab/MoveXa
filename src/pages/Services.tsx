import Container from "@/components/Container";
import BreadCrumb from "@/components/modules/About/breadcrumb";
import Stepper from "@/components/modules/Services/Stepper";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { feeCalculator } from "@/lib/feeCalculator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Services = () => {
    const [fee, setFee] = useState<number | null>();

    const parcelFormSchema = z.object({
        weight: z.string(),
        insideDhaka: z.boolean(),

    });

    const form = useForm<z.infer<typeof parcelFormSchema>>({
        resolver: zodResolver(parcelFormSchema),
        defaultValues: {
            weight: "",
            insideDhaka: true,
        },
    })


    const onSubmit = async (data: z.infer<typeof parcelFormSchema>) => {
        const parcelFee = feeCalculator(Number(data.weight), data.insideDhaka);
        setFee(parcelFee);
        form.reset()
    }
    return (
        <>
            <BreadCrumb heading="Services" />
            <Container>

                <TitleSection title="Complete Delivery Services" size="xl"></TitleSection>
                <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14" data-aos="zoom-in">From You to Them — We Handle The Rest</h2>

                <div className="space-y-8">
                    <div className="senderImg">
                        <div className="bg-primary ps-16 py-28 next-cut">
                            <h3 className="heading text-white text-4xl">Sender</h3>
                            <p className="text-white w-[35%]">Sending a parcel has never been easier. With our streamlined sending process, you can schedule a pickup, track your shipment in real-time, and stay updated until it safely reaches your receiver. </p>
                        </div>
                    </div> {/* sender */}

                    <div className="receiverImg">
                        <div className="bg-secondary pe-16 py-28 prev-cut flex justify-end text-right">
                            <div className="w-[35%]">
                                <h3 className="heading text-white text-4xl mb-4">Receiver</h3>
                                <p className="text-white">
                                    We ensure that every parcel reaches its destination smoothly. Receivers can check delivery status,
                                    verify parcel details, and communicate with our support team when needed.
                                </p>
                            </div>
                        </div>

                    </div> {/* receiver */}
                </div> {/* users wrap */}


                <TitleSection title="Every Step of the Way" size="xl"></TitleSection>
                <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14" data-aos="zoom-in">Track Your Parcel Instantly.</h2>

                <div className="space-y-8">
                    <Stepper />

                </div> {/* track wrap */}


                <TitleSection title="Parcel Fee Calculator" size="xl"></TitleSection>
                <h2 className="heading text-3xl md:text-[40px] leading-10 md:leading-14" data-aos="zoom-in">Estimate Before You Send.</h2>

                <div className="space-y-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="insideDhaka"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-yantramanav text-secondary text-base p-1">Inside Dhaka</FormLabel>
                                                <Select
                                                    onValueChange={(val) => field.onChange(val === "true")}
                                                    defaultValue={field.value ? "true" : "false"}>
                                                    <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select a user role" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="true">Yes</SelectItem>
                                                        <SelectItem value="false">No</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="dark:text-white" />
                                            </FormItem>
                                        )}
                                    />
                                </div>{/* role */}

                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="weight"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-yantramanav text-secondary text-base p-1">Parcel Weight</FormLabel>
                                                <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                                    <Input type="number" min={1} placeholder="Write receiver address" {...field} />
                                                </FormControl>
                                                <FormMessage className="dark:text-white" />
                                            </FormItem>
                                        )}
                                    />
                                </div>{/* parcel weight */}

                            </div>{/* 2nd row */}


                            <Button type="submit" className="rounded-none dark:bg-secondary cursor-pointer">Calculate fee</Button>

                            <Button
                                type="button"
                                className="rounded-none dark:bg-secondary cursor-pointer ms-3"
                                onClick={() => {
                                    form.reset();
                                    setFee(null);
                                }}
                            >
                                Clear
                            </Button>
                        </form>
                    </Form>
                    {
                        fee && <h4>{fee}</h4>
                    }

                </div> {/* calculator wrap */}



            </Container>
        </>
    );
};

export default Services;
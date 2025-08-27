import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useCreateParcelMutation } from "@/redux/features/sender/senderApi";
import { useGetUserQuery } from "@/redux/features/auth/authApi";

const ParcelForm = () => {
    const ParcelType = ["DOCUMENT", "FRAGILE", "CLOTHING", "OTHER"]
    const navigate = useNavigate()
    const { data: user } = useGetUserQuery();
    const [createParcel] = useCreateParcelMutation();

    const parcelFormSchema = z.object({
        senderID: z.string(),
        receiverEmail: z.email(),
        senderAddress: z.string(),
        receiverAddress: z.string(),
        weight: z.string(),
        insideDhaka: z.boolean(),
        type: z.enum(ParcelType)
    });

    const form = useForm<z.infer<typeof parcelFormSchema>>({
        resolver: zodResolver(parcelFormSchema),
        defaultValues: {
            senderID: "",
            receiverEmail: "",
            senderAddress: "",
            receiverAddress: "",
            weight: "",
            insideDhaka: true,
            type: "OTHER"
        },
    })


    const onSubmit = async (data: z.infer<typeof parcelFormSchema>) => {
        if (!user?._id) {
            toast.error("User not found. Please log in again.")
            return;
        }
        try {
            const weight = Number(data.weight)
            const parcelData = { ...data, weight, senderID: user?._id }
            const res = await createParcel(parcelData).unwrap();

            if (res.success) {
                form.reset();
                toast.success("Parcel created successfully.");
                navigate('/sender/all-parcels')
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message)
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="receiverEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-secondary text-base p-1">Receiver Email</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write receiver email" {...field} />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* receiver email */}
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="receiverAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-secondary text-base p-1">Receiver Address</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write receiver address" {...field} />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* receiver address */}
                    </div>{/* 1st row */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="senderAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-secondary text-base p-1">Sender Address</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write sender address" {...field} />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* sender address */}
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
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-secondary text-base p-1">Parcel Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select parcel type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {ParcelType.map((type, idx) => <SelectItem key={idx} value={type}>{type}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* parcel type */}
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
                    </div>{/* 2nd row */}
                    <Button type="submit" className="rounded-none dark:bg-secondary cursor-pointer">Create Parcel</Button>
                </form>
            </Form>
        </>
    );
};

export default ParcelForm;
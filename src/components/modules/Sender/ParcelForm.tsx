import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useGetUserQuery } from "@/redux/features/user/userApi";

const ParcelForm = () => {
    const ParcelType = ["DOCUMENT", "FRAGILE", "CLOTHING", "OTHER"]
    const navigate = useNavigate()
    const { data: user} = useGetUserQuery();

    const parcelFormSchema = z.object({
        senderID: z.string(),
        receiverEmail: z.email(),
        senderAddress: z.string(),
        receiverAddress: z.string(),
        weight: z.coerce.number().nonnegative(),
        insideDhaka: z.boolean(),
        type: z.enum(ParcelType)
    });

    const form = useForm<z.infer<typeof parcelFormSchema>>({
        resolver: zodResolver(parcelFormSchema),
        defaultValues: {
            senderID: user?._id,
            receiverEmail: "",
            senderAddress: "",
            receiverAddress: "",
            weight: 0,
            insideDhaka: true,
            type: "OTHER"
        },
    })

    //: SubmitHandler<IUser>
    const onSubmit = async (data: z.infer<typeof parcelFormSchema>) => {
        try {
            console.log(data);
            // const res = await registerUser(data).unwrap();

            // if (res.success) {
            //     form.reset();
            //     toast.success("Parcel created successfully.");
            //     navigate('/sender/all-parcels')
            // }

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
                                        <FormLabel>Receiver Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write receiver email" {...field} />
                                        </FormControl>
                                        <FormMessage />
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
                                        <FormLabel>Receiver Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write receiver address" {...field} />
                                        </FormControl>
                                        <FormMessage />
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
                                        <FormLabel>Sender Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write sender address" {...field} />
                                        </FormControl>
                                        <FormMessage />
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
                                        <FormLabel>Parcel Weight</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Write receiver address" {...field} />
                                        </FormControl>
                                        <FormMessage />
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
                                        <FormLabel>Parcel Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select parcel type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {ParcelType.map((type, idx) => <SelectItem key={idx} value={type}>{type}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
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
                                        <FormLabel>Inside Dhaka</FormLabel>
                                        <Select
                                            onValueChange={(val) => field.onChange(val === "true")}
                                            defaultValue={field.value ? "true" : "false"}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a user role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="true">Yes</SelectItem>
                                                <SelectItem value="false">No</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>{/* role */}
                    </div>{/* 2nd row */}
                    <Button type="submit">Register</Button>
                </form>
            </Form>
        </>
    );
};

export default ParcelForm;
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const ParcelTrackForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const loginFormSchema = z.object({
        trackingId: z.string(),
    });

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            trackingId: "",
        },
    })

    const params = new URLSearchParams(searchParams);
    const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
        params.set("trackingId", data?.trackingId);
        setSearchParams(params);
    }

    useEffect(() => {
        params.delete("trackingId");
        setSearchParams(params);
    }, []);

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="trackingId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tracking ID</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write parcel tracking id" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <Button type="submit">Track Parcel</Button>
                </form>
            </Form>
        </>
    );
};

export default ParcelTrackForm;
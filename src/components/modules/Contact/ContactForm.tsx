import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
    first_name: z.string().nonempty({ message: "First Name cannot be empty" }),
    last_name: z.string().nonempty({ message: "Last Name cannot be empty" }),
    email: z.email(),
    query: z.string().nonempty({ message: "Query cannot be empty" }),
    message: z.string().nonempty({ message: "Message cannot be empty" }),

});

const ContactForm = () => {

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            query: "",
            message: "",
        },
    })

    const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
        console.log(data);
        form.reset()
        toast.success("Email send successfully")
    }
    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card p-14">
                    <h2 className="text-primary text-2xl mb-10 text-center">Get In Touch</h2>
                    <div className="flex flex-col md:flex-row justify-between gap-14">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary dark:text-white text-base p-1">First Name</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write your first name" {...field} className="dark:text-white dark:placeholder:text-white"/>
                                        </FormControl>
                                         <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* password */}
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary dark:text-white text-base p-1">Last Name</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write your last name" {...field} className="dark:text-white dark:placeholder:text-white" />
                                        </FormControl>
                                         <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* email */}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-14">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary dark:text-white text-base p-1">Email</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write your email address" {...field} className="dark:text-white dark:placeholder:text-white" />
                                        </FormControl>
                                         <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* email */}
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="query"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary dark:text-white text-base p-1">Query</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write your query" {...field} className="dark:text-white dark:placeholder:text-white" />
                                        </FormControl>
                                         <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* query */}
                    </div>
                    <div className="flex">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary dark:text-white text-base p-1">Message</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Textarea placeholder="Write your message" className="h-40 pt-2 resize-none dark:text-white dark:placeholder:text-white" {...field} />
                                        </FormControl>
                                         <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* email */}
                    </div>
                <Button type="submit" variant={"primary"} className="px-8 py-6 cursor-pointer">Send</Button>
                </form>
            </Form>
    );
};

export default ContactForm;

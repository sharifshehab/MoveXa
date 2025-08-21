import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Password from "@/components/ui/Password";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRegisterUserMutation } from "@/redux/features/User/userApi";
import { toast } from "sonner";

const Registration = () => {

    const Role = ["Sender", "Receiver"]

    const registrationFormSchema = z.object({
        name: z.string()
            .min(5, { message: "Name must be at least 5 characters long." })
            .max(50, { message: "Name cannot exceed 50 characters." }),
        email: z.email(),
        password: z.string()
            .min(8, { message: "Password must be at least 8 characters long." }),
        role: z.enum(Role)
    });

    const form = useForm<z.infer<typeof registrationFormSchema>>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "Sender",
        },
    })

    const [registerUser] = useRegisterUserMutation();

    const onSubmit = async (data: z.infer<typeof registrationFormSchema>) => {
        try {
            await registerUser(data).unwrap();
            toast.success("User created successfully.")
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <Container>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex justify-between gap-4">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* name */}
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write your email address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* email */}
                        </div>{/* 1st row */}
                        <div className="flex justify-between gap-4">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Role</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a user role" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {Role.map(role => <SelectItem value={role}>{role}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* role */}
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write a password" {...field} />
                                                {/* <Password {...field}></Password> */}
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* password */}
                        </div>{/* 2nd row */}
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </Container>
    );
};

export default Registration;
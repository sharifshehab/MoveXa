import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { IUser } from "@/types";
import { Link, useNavigate } from "react-router";
import Logo from "@/assets/icons/Logo";

const RegisterForm = () => {
    const Role = ["Sender", "Receiver"]
    const [registerUser] = useRegisterUserMutation();
    const navigate = useNavigate()

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

    const onSubmit: SubmitHandler<IUser> = async (data: z.infer<typeof registrationFormSchema>) => {
        try {
            const res = await registerUser(data).unwrap();
            if (res.success) {
                form.reset();
                toast.success("User created successfully.");
                navigate('/login')
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message)
        }
    }
    return (
        <div className="grid place-content-center place-items-center sm:h-screen py-16">
            <>
                <Link to={"/"} className="flex-center flex-col text-2xl text-secondary font-semibold mb-6">
                    <Logo />
                    MoveXa
                </Link>
            </>            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-5xl md:w-xl bg-card p-14">
                    <h2 className="text-primary text-3xl mb-10 text-center dark:text-white">Sign Up</h2>
                    <div className="flex flex-col md:flex-row justify-between gap-14">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Name:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write your name" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary dark:text-white dark:placeholder:text-white" />
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
                                        <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Email:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write your email address" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary dark:text-white dark:placeholder:text-white" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>{/* email */}
                    </div>{/* 1st row */}
                    <div className="flex flex-col md:flex-row justify-between gap-14">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Role:</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                                <SelectTrigger className="w-full dark:text-white dark:placeholder:text-white">
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
                                        <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Password:</FormLabel>
                                        <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                            <Input placeholder="Write a password" className="dark:text-white dark:placeholder:text-white" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>{/* password */}
                    </div>{/* 2nd row */}
                    <Button type="submit" variant={"primary"} className="p-5">Sign Up</Button>
                </form>
            </Form>
            <h3 className="text-lg text-secondary mt-6">Already a user? <span className="underline underline-offset-4 hover:opacity-70"><Link to={"/login"}>Login</Link></span></h3>

        </div>
    );
};

export default RegisterForm;

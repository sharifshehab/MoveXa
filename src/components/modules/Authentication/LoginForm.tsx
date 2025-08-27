import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import Logo from "@/assets/icons/Logo";

const LoginForm = () => {
        const navigate = useNavigate()
        const [loginUser] = useLoginUserMutation();

        const loginFormSchema = z.object({
            email: z.email(),
            password: z.string()
                .min(8, { message: "Password must be at least 8 characters long." }),
        });

        const form = useForm<z.infer<typeof loginFormSchema>>({
            resolver: zodResolver(loginFormSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        })

        const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
            try {
                const res = await loginUser(data).unwrap();
                // console.log(res);
                switch (res.role) {
                    case "Super_Admin":
                        form.reset();
                        navigate('/admin');
                        break;
                    default:
                        form.reset();
                        navigate(`/${res.role.toLowerCase()}`);
                        break;
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
                </>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-5xl md:w-xl bg-card p-14">
                        <h2 className="text-primary dark:text-white text-3xl mb-10 text-center">Login</h2>
                        <div className="flex flex-col md:flex-row justify-between gap-14">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Email</FormLabel>
                                            <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                                <Input placeholder="Write your email address" className="dark:text-white dark:placeholder:text-white" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* email */}
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Password</FormLabel>
                                            <FormControl className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-secondary">
                                                <Input type="password" placeholder="Write your password"  className="dark:text-white dark:placeholder:text-white"{...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* password */}
                        </div>
                        <Button variant={"primary"} className="p-5" type="submit">Login</Button>
                    </form>
                </Form>
                <h3 className="text-lg text-secondary mt-6">Don't have an account? <span className="underline underline-offset-4 hover:opacity-70"><Link to={"/register"}>Sign Up</Link></span></h3>
            </div>
        );
    };

export default LoginForm;

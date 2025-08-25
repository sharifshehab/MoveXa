import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import Password from "@/components/ui/Password";           // TO DO
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const
    LoginForm = () => {
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
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
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
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write your password" {...field} />
                                                {/* <Password {...field}></Password> */}
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* password */}
                        </div>
                        <Button type="submit">Log In</Button>
                    </form>
                </Form>
            </>
        );
    };

export default LoginForm;

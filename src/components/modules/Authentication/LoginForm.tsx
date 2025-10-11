import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import logo from "../../../assets/images/logo.png"

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


    /*  Other user:
        --------------

        Sender:
        -------
        email: sv@gmail.com
        password: Shuvo696

        Receiver:
        ---------
        email: sharif@gmail.com
        password: sharif696
    */

    // Handle Preset Supper Admin Login
    const supperAdminLogin = async () => {

        const presetCredentials = {
            email: "super@gmail.com",
            password: "12345678",
        }

        try {
            await loginUser(presetCredentials).unwrap();
            form.reset();
            navigate('/admin');
        } catch (error) {
            toast.error(`Login error: error?.data?.message`);
        }
    }

    // Handle Preset Admin Login
    const adminLogin = async () => {

        const presetCredentials = {
            email: "admin@gmail.com",
            password: "admin696",
        }

        try {
            await loginUser(presetCredentials).unwrap();
            form.reset();
            navigate('/admin');
        } catch (error) {
            toast.error(`Login error: error?.data?.message`);
        }
    }

    // Handle Preset sender Login
    const senderLogin = async () => {

        const presetCredentials = {
            email: "aryan@gmail.com",
            password: "aryan696",
        }

        try {
            await loginUser(presetCredentials).unwrap();
            form.reset();
            navigate('/sender');
        } catch (error) {
            toast.error(`Login error: error?.data?.message`);
        }
    }

    // Handle receiver Login
    const receiverLogin = async () => {

        const presetCredentials = {
            email: "rohan@gmail.com",
            password: "rohan696",
        }

        try {
            await loginUser(presetCredentials).unwrap();
            form.reset();
            navigate('/receiver');
        } catch (error) {
            toast.error(`Login error: error?.data?.message`);
        }
    }

    // Handle Preset User Login

    return (
        <div className="grid place-content-center place-items-center sm:h-screen py-16">
            <>
                <Link to={"/"} className="flex-center flex-col text-2xl text-secondary font-semibold mb-6">
                    <img src={logo} alt="" className="w-20" />
                    MoveXa
                </Link>
            </>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-5xl md:w-xl bg-secondary p-14">
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
                                            <Input placeholder="Write your email address" className="text-white dark:placeholder:text-white" {...field} />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
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
                                            <Input type="password" placeholder="Write your password" className="text-white dark:placeholder:text-white"{...field} />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* password */}
                    </div>
                    <Button variant={"primary"} className="p-5 cursor-pointer" type="submit">Login</Button>
                </form>
            </Form>
            <h3 className="text-lg text-secondary mt-6">Don't have an account? <span className="underline underline-offset-4 hover:opacity-70"><Link to={"/register"}>Sign Up</Link></span></h3>

            {/* Preset credentials */}
            <div className="my-10 space-y-5">
                <h3 className="text-primary dark:text-white text-2xl underline underline-offset-4 decoration-secondary text-center">Demo Credentials</h3>
                <div className="flex items-center flex-col md:flex-row justify-center gap-2">
                    {/* sender user */}
                    <Button variant={"primary"} className="p-5 cursor-pointer dark:bg-secondary" type="submit" onClick={senderLogin}>Login As Sender</Button>
                    {/* Separator */}
                    <span className="w-px h-10 bg-white mx-2"></span>

                    {/* Supper Admin */}
                    <Button variant={"primary"} className="p-5 cursor-pointer dark:bg-secondary" type="submit" onClick={supperAdminLogin}>Login As Supper Admin</Button>
                    {/* Separator */}
                    <span className="w-px h-10 bg-white mx-2"></span>

                    {/* Admin */}
                    <Button variant={"primary"} className="p-5 cursor-pointer dark:bg-secondary" type="submit" onClick={adminLogin}>Login As Admin</Button>
                    {/* Separator */}
                    <span className="w-px h-10 bg-white mx-2"></span>

                    {/* receiver user */}
                    <Button variant={"primary"} className="p-5 cursor-pointer dark:bg-secondary" type="submit" onClick={receiverLogin}>Login As Receiver</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

import Container from "@/components/Container";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";
import { NavLink } from "react-router";

const Login = () => {
        useEffect(() => {
            TabTitle('MoveXa | Login');
        }, []);
    return (
        <Container>
                <LoginForm />
                <br />
                <NavLink to={'/register'}>Register here</NavLink>
                <br />
                <NavLink to={'/'}>Home</NavLink>
            </Container>
    );
};

export default Login;
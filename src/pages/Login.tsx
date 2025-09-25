import Container from "@/components/Container";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";

const Login = () => {
        useEffect(() => {
            TabTitle('MoveXa | Login');
        }, []);
    return (
        <Container>
                <LoginForm />
            </Container>
    );
};

export default Login;
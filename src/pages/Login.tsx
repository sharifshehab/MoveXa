import Container from "@/components/Container";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import { NavLink } from "react-router";

const Login = () => {
    return (
        <Container>
            <div>
                <LoginForm />
            </div>
            <br />
            <NavLink to={'/register'}>Register here</NavLink>
            <br />
            <NavLink to={'/'}>Home</NavLink>

        </Container>
    );
};

export default Login;
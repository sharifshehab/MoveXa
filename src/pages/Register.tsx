import Container from "@/components/Container";
import RegisterForm from "@/components/modules/Authentication/RegisterForm";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";


const Register = () => {
    useEffect(() => {
        TabTitle('MoveXa | Register');
    }, []);
    return (
            <Container>
                <RegisterForm />
            </Container>
    );
};
export default Register;

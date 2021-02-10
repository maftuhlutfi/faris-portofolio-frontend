import Form from "../../App/Form";
import Logo from "../../shared/Logo";
import Wrapper from "./Wrapper";

const LoginRegisterPage = ({type}) => {

    return (
        <Wrapper>
            <Logo dark/>
            <Form type={type} />
        </Wrapper>
    );
}
 
export default LoginRegisterPage;
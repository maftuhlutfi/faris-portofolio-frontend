import Title from "../../shared/Title";
import Body from "./Body";
import Desc from "../../shared/DescTitle"
import TextInput from "../../shared/input/TextInput";
import Checkbox from "../../shared/input/CheckBox";
import StyledButton from "../../shared/StyledButton";
import InputGroup from "../../shared/input/InputGroup";
import StyledLink from "../../shared/StyledLink";

import words from "./words";

const Form = ({type}) => {
    return (
        <Body>
            <Title>{words[type].title}</Title>
            <Desc>{words[type].desc}</Desc>
            <InputGroup>
                <TextInput type='text' placeholder='Email' name='email'/>
                <TextInput type='password' placeholder='Password' name='password'/>
                {type === 'signup' && <TextInput type='password' placeholder='Confirm Password' name='confirmPassword'/>}
                {type === 'login' && <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
                    <Checkbox label='Ingat saya' />
                    <StyledLink>Lupa password?</StyledLink>
                </div>}
            </InputGroup>
            <StyledButton style={{marginBottom: '20px'}} primary>Masuk</StyledButton>
            <Desc mb='0px'>
                {words[type].footerDesc} 
                <StyledLink>{words[type].link}</StyledLink>
            </Desc>
        </Body>
    );
}
 
export default Form;
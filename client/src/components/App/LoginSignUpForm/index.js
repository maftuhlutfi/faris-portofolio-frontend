import Title from "../../shared/text/Title";
import Body from "./Body";
import Desc from "../../shared/text/DescTitle"
import TextInput from "../../shared/input/TextInput";
import Checkbox from "../../shared/input/CheckBox";
import StyledButton from "../../shared/StyledButton";
import InputGroup from "../../shared/input/InputGroup";
import StyledLink from "../../shared/StyledLink";

import words from "./words";

const Form = ({type}) => {
    const {title, desc, footerDesc, link, href, btnText} = words[type]

    return (
        <Body>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <InputGroup>
                <TextInput type='text' placeholder='Email' name='email'/>
                <TextInput type='password' placeholder='Password' name='password'/>
                {type === 'signup' && <TextInput type='password' placeholder='Confirm Password' name='confirmPassword'/>}
                {type === 'login' && <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
                    <Checkbox label='Ingat saya' />
                    <StyledLink>Lupa password?</StyledLink>
                </div>}
            </InputGroup>
            <StyledButton style={{marginBottom: '30px'}} primary>{btnText}</StyledButton>
            <Desc mb='0px'>
                {footerDesc} 
                <StyledLink to={href}>{link}</StyledLink>
            </Desc>
        </Body>
    );
}
 
export default Form;
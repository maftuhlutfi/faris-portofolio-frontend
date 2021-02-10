import styled from "styled-components";

const StyledLogo = styled.span`
    @font-face {
        font-family: 'Cream Cake';
        src: url('./assets/font/Cream%20Cake.ttf');
    }

    font-family: 'Cream Cake';
    font-size: 100px;
    color: ${props => props.dark ? 'white' : '#332c2c'};
    margin-bottom: 20px;
`

const Logo = ({dark}) => {
    return (
        <StyledLogo dark={dark}>
            ResTol
        </StyledLogo>
    );
}
 
export default Logo;
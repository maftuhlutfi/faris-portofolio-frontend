import styled from "styled-components";

const StyledLogo = styled.span`
    @font-face {
        font-family: 'Cream Cake';
        src: url('./assets/font/Cream%20Cake.ttf');
    }

    font-family: 'Cream Cake';
    font-size: 100px;
    color: ${props => props.dark ? 'white' : '#FF274A'};
    margin-bottom: 30px;
`

const Logo = ({dark, short}) => {
    return (
        <StyledLogo dark={dark}>
            {short ? 'R' : 'ResTol'}
        </StyledLogo>
    );
}
 
export default Logo;
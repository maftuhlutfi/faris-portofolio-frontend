import styled from "styled-components";

const StyledLogo = styled.span`
    @font-face {
        font-family: 'Cream Cake';
        src: url('./assets/font/Cream%20Cake.ttf');
    }

    font-family: 'Cream Cake';
    font-size: ${props => props.short ? '75px' : '100px'};
    color: ${props => props.dark ? 'white' : '#FF274A'};
    margin-bottom: ${props => props.mb ? props.mb : '30px'};
`

const Logo = ({dark, short, mb}) => {
    return (
        <StyledLogo mb={mb} dark={dark} short={short}>
            {short ? 'R' : 'ResTol'}
        </StyledLogo>
    );
}
 
export default Logo;
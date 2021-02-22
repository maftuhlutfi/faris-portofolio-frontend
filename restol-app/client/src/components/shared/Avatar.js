import styled from "styled-components";

const Avatar = styled.img`
    width: ${props => props.size ? props.size : '45px'};
    height: ${props => props.size ? props.size : '45px'};
    border-radius: 50%;

    @media (max-width: 600px) {
        width: ${props => props.size ? props.size * 0.8 : `${45 * 0.8}px`};
        height: ${props => props.size ? props.size * 0.8 : `${45 * 0.8}px`}; 
    }
`

export default Avatar
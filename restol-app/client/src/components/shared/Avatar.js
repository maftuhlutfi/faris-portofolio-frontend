import styled from "styled-components";

const Avatar = styled.img`
    width: ${props => props.size ? props.size : '45px'};
    height: ${props => props.size ? props.size : '45px'};
    border-radius: 50%;
`

export default Avatar
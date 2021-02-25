import styled from "styled-components"

const Heading = styled.span`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: ${props => props.mb ? props.mb : '25px'};

    @media (max-width: 768px) {
        font-size: 48px;
    }
`

export default Heading
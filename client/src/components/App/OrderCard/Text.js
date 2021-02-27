import styled from "styled-components"

const Text = styled.span`
    font-size: ${props => props.size ? props.size : '14px'};
    font-weight: ${props => props.weight ? props.weight : '400'};
    ${props => props.color && `color: ${props.color};`}
`

export default Text
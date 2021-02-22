import styled from "styled-components"

const Card = styled.div`
    background-color: ${props => props.bg ? props.bg : 'white'};
    padding: ${props => props.padding ? props.padding : '15px'};
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0px 0px 30px ${props => props.bg ? props.bg : 'rgba(0, 0, 0, 0.05)'};

    &:hover {
        cursor: pointer;
        box-shadow: 0px 5px 30px ${props => props.bg ? props.bg : 'rgba(0, 0, 0, 0.1)'};
    }

    ${props => props.width && `width: ${props.width}`};
    height: fit-content;
`

export default Card
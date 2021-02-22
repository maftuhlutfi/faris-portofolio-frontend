import styled from "styled-components"

const InfoWrapper = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    padding: 10px 0;
    flex-direction: column;
    position: absolute;
    z-index: 5;
    top: 120%;
    right: 1px;
    background-color: white;
    border-radius: 10px;
`

export default InfoWrapper
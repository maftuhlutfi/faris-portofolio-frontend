import styled from "styled-components"

const Photo = styled.img`
    width: 100%;
    margin-bottom: 15px;

    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }
`

export default Photo
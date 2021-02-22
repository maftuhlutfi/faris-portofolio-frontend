import styled from "styled-components"

const Wrapper = styled.span`
    font-size: 14px;
    position: relative;
    display: flex;
    align-items: center;

    & > span {
        margin-right: 10px;
    }

    &:hover {
        cursor: pointer;
    }

    svg {
        ${props => !props.collapse && 'transform: rotate(180deg);'}
    }
`

export default Wrapper
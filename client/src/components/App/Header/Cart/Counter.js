import styled from "styled-components"

const Wrapper = styled.span`
    position: absolute;
    right: 0px;
    top: -3px;
    background-color: #FF274A;
    color: white;
    height: 20px;
    min-width: 20px;
    border-radius: 10px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Counter = ({content}) => {
    return (
        <Wrapper>
            {content < 10 ? content : '9+'}
        </Wrapper>
    )
}

export default Counter
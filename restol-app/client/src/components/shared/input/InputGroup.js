import styled from "styled-components";

const InputGroup = styled.div`
    margin: 0px;
    margin-bottom: 30px;
    line-height: 20px;
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin-bottom: 15px;
    }
`

export default InputGroup
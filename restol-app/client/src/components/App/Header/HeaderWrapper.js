import styled from "styled-components";

const HeaderWrapper = styled.section`
    display: flex;
    margin-bottom: 30px;
    padding-left: 10px;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: 20px;
    }
`

export default HeaderWrapper
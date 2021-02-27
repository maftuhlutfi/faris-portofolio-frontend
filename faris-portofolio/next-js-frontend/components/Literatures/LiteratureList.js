import styled from "styled-components"

const LiteratureList = styled.div`
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin-bottom: 40px;
    }
`

export default LiteratureList
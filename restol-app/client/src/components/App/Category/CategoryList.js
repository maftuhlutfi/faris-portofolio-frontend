import styled from "styled-components"

const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > div {
        margin-bottom: 25px;
    }

    & > div:not(:last-child) {
        margin-right: 25px;
    }
`

export default CategoryList
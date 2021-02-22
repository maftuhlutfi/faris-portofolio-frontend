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

    @media (max-width: 600px) {
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`

export default CategoryList
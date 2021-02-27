import styled from "styled-components"

const CategoryList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 30px;

    @media (max-width: 600px) {
        display: flex;
        overflow-x: scroll;

        & > div {
            margin-right: 10px;
        }
    }
`

export default CategoryList
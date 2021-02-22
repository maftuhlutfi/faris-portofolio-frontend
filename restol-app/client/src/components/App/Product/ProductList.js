import styled from "styled-components"

const ProductList = styled.div`
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 20px;

        & > div {
            margin-bottom: 0;
        }

        & > div:not(:last-child) {
            margin-right: 0;
        }
    }
`

export default ProductList
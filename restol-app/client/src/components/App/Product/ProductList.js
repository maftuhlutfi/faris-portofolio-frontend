import styled from "styled-components"

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 30px;

        & > div {
            margin-bottom: 0;
        }

        & > div:not(:last-child) {
            margin-right: 0;
        }
    }
`

export default ProductList
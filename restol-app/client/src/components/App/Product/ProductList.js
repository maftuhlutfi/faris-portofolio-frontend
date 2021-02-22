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
`

export default ProductList
import styled from "styled-components"

const CategoryList = styled.div`
    display: flex;
    overflow-x: auto;
    
    & > span:not(:last-child) {
        margin-right: 25px;
    }
`

export default CategoryList
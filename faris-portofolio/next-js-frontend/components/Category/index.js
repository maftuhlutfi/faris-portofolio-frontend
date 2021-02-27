import { useState } from "react";
import CategoryItem from "./CategoryItem";
import CategoryList from "./CategoryList";
import styled from "styled-components"

const Wrapper = styled.div`
    margin-bottom: 50px;
`

const Category = ({categories, active, setActive}) => {
    

    const handleClick = name => {
        setActive(name)
    }

    return (
        <Wrapper>
            <CategoryList>
                {categories.map((category, index) => <CategoryItem active={active} handleClick={handleClick} key={index} name={category.name} />)}
            </CategoryList>
        </Wrapper>
    );
}
 
export default Category;
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import CategoryList from "./CategoryList";
import categories from './categories'

const Category = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(index) {
        setActiveIndex(index)
    }

    return (
        <CategoryList>
            {categories.map((category, index) => <CategoryItem index={index} onClick={handleClick} active={activeIndex} key={index} {...category} />)}
        </CategoryList>
    );
}
 
export default Category;
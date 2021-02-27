import styled from "styled-components"

const Wrapper = styled.span`
    background-color: ${props => props.active ? '#FFE073' : '#e5e5e5'};
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;

    &:hover {
        cursor: pointer;
        background-color: '#d5d5d5';
    }
`

const CategoryItem = ({name, active, handleClick}) => {
    return (
        <Wrapper onClick={() => handleClick(name)} active={name === active}>
            {name}
        </Wrapper>
    );
}
 
export default CategoryItem;
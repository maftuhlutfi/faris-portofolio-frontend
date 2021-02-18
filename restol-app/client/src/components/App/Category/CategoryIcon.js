import styled from "styled-components"

const CategoryIcon = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 85px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1.5px #e5e5e5;
    ${props => props.active === 'true' && 'border: none;'}
    margin-bottom: 10px;

    svg {
        width: 50px;

        path {
            fill: ${props => props.active === 'true' ? '#262626' : '#B5B5B5'};
        }
    }
`

export default CategoryIcon
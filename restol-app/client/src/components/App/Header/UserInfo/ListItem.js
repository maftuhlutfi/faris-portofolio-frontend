import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Wrapper = styled.span`
    color: #c0c0c0;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items:center;
    font-size: 12px;

    &:hover {
        background-color: #FF617A;
        color: white;

        svg {path, rect{fill:white}}
    }

    svg {
        width: 30px;  
    }

    span {
        margin-left: 15px;
        ${props => props.active === 'true' && 'font-weight: 600;'};
    }
`

const ListItem = ({icon, name, link}) => {
    return (
        <Wrapper>
            <ReactSVG src={`./assets/icon/${icon}`} />
            <span>{name}</span>
        </Wrapper>
    );
}
 
export default ListItem;
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Wrapper = styled(Link)`
    background-color: ${props => props.active === 'true' ? '#FF617A' : 'white'};
    color: ${props => props.active === 'true' ? 'white' : '#C0C0C0'};
    padding: 5px 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items:center;
    font-size: 14px;
    min-width: 120px;

    ${props => props.active === 'true' && 'box-shadow: 0px 2px 10px rgba(255, 39, 74, 0.5);'};

    svg {
        width: 35px;

        path {
            fill: ${props => props.active === 'true' ? 'white' : '#C0C0C0'};
        }
    }

    div {
        height: 45px;
    }
    span {
        margin-left: 15px;
        ${props => props.active === 'true' && 'font-weight: 600;'};
    }

    @media (max-width: 600px) {
        font-size: 12px;
        box-sizing: border-box;
        flex-direction: column;
        padding: 5px 15px;
        min-width: 50px;

        & > svg {
            width: 20px;
        }

        span {
            margin: 0;
        }
    }
`

const NavItem = ({icon, name, link}) => {
    const location = useLocation();

    return (
        <Wrapper to={link} active={location.pathname === link ? 'true' : 'false'}>
            <ReactSVG src={`./assets/icon/${icon}`} />
            <span>{name}</span>
        </Wrapper>
    );
}
 
export default NavItem;
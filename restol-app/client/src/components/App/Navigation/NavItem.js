import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Wrapper = styled(Link)`
    background-color: ${props => props.active ? '#FF617A' : 'white'};
    color: ${props => props.active ? 'white' : '#C0C0C0'};
    padding: 5px 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items:center;
    font-size: 14px;
    width: 120px;

    ${props => props.active && 'box-shadow: 0px 2px 10px rgba(255, 39, 74, 0.5);'};

    svg {
        width: 35px;

        path {
            fill: ${props => props.active ? 'white' : '#C0C0C0'};
        }
    }

    div {
        height: 45px;
    }
    span {
        margin-left: 15px;
    }

    @media (max-width: 600px) {
        width: 19vw;
        font-size: 12px;
        box-sizing: border-box;
        flex-direction: column;
        padding: 5px;

        & > svg {
            width: 20px;
        }

        span {
            margin: 0;
        }
    }
`

const NavItem = ({icon, nama, link}) => {
    const location = useLocation();

    return (
        <Wrapper to={link} active={location.pathname === link && 'active'}>
            <ReactSVG src={`./assets/icon/${icon}`} />
            <span>{nama}</span>
        </Wrapper>
    );
}
 
export default NavItem;
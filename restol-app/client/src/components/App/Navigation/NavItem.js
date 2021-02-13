import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
    background-color: ${props => props.active ? '#FF617A' : 'white'};
    color: ${props => props.active ? 'white' : '#C0C0C0'};
    padding: 10px 5px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    width: 75px;

    ${props => props.active && 'box-shadow: 0px 5px 15px rgba(255, 39, 74, 0.5);'};

    & > img {
        width: 35px;
    }

    @media (max-width: 600px) {
        width: 20vw;
        font-size: 12px;
        box-sizing: border-box;

        & > img {
            width: 25px;
        }
    }
`

const NavItem = ({icon, nama, link}) => {
    const location = useLocation();

    return (
        <Wrapper to={link} active={location.pathname === link}>
            <img src={`./assets/icon/${icon}`} />
            <span style={{marginTop: '5px'}}>{nama}</span>
        </Wrapper>
    );
}
 
export default NavItem;
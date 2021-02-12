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
    font-size: 14px;
    width: 75px;

    ${props => props.active && 'box-shadow: 0px 5px 25px rgba(255, 39, 74, 0.5);'};
`

const NavItem = ({icon, nama, link}) => {
    const location = useLocation();

    return (
        <Wrapper to={link} active={location.pathname === link}>
            <img src={`./assets/icon/${icon}`} width='35px' />
            <span style={{marginTop: '5px'}}>{nama}</span>
        </Wrapper>
    );
}
 
export default NavItem;
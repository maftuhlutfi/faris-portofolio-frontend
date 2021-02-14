import styled from "styled-components";
import menus from './menu'
import NavItem from "./NavItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    & > *:not(:last-child) {
        margin-bottom: 20px;
    }

    @media (max-width: 600px) {
        flex-direction: row;
        flex-grow: 0;

        & > *:not(:last-child) {
            margin-bottom: 0px;
        }
    }
`

const NavList = () => {
    return (
        <Wrapper>
            {menus.map((menu, index) => <NavItem key={index} {...menu} />)}
        </Wrapper>
    );
}
 
export default NavList;
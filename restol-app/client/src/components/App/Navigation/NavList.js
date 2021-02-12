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
`

const NavList = () => {
    return (
        <Wrapper>
            {menus.map(menu => <NavItem {...menu} />)}
        </Wrapper>
    );
}
 
export default NavList;
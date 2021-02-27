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
        display: grid;
        grid-template-columns: ${props => `repeat(${props.length}, 1fr)`};
        flex-grow: 0;
        grid-column-gap: 10px;

        & > *:not(:last-child) {
            margin-bottom: 0px;
        }
    }
`

const NavList = () => {
    return (
        <Wrapper length={menus.length}>
            {menus.map((menu, index) => <NavItem key={index} {...menu} />)}
        </Wrapper>
    );
}
 
export default NavList;
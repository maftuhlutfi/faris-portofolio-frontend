import Logo from "../../shared/Logo";
import NavItem from "./NavItem";
import NavList from "./NavList";
import Wrapper from "./Wrapper";

const Navigation = () => {
    return (
        <Wrapper>
            <Logo short classname='logo' />
            <NavList />
            <NavItem nama='Logout' icon='logout.svg' classname='logout' />
        </Wrapper>
    );
}
 
export default Navigation;
import Logo from "../../shared/Logo";
import NavItem from "./NavItem";
import NavList from "./NavList";
import Wrapper from "./Wrapper";

const Navigation = () => {
    return (
        <Wrapper>
            <Logo short />
            <NavList />
        </Wrapper>
    );
}
 
export default Navigation;
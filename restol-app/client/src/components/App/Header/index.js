import HeaderTitle from "./HeaderTitle";
import HeaderWrapper from "./HeaderWrapper";
import TextInputIcon from "../../shared/input/TextInputIcon";
import { ReactSVG } from "react-svg";
import UserInfo from "./UserInfo";

const Header = ({title, desc, search}) => {
    return (
        <HeaderWrapper>
            <HeaderTitle title={title} />
            <TextInputIcon type='text' placeholder={search} name='search' icon={`./assets/icon/search.svg`} />
            <UserInfo image='./assets/profile-2.jpg' margin='0 0 0 20px' />
        </HeaderWrapper>
    );
}
 
export default Header;
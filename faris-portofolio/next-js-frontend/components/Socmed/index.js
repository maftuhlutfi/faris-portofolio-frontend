import SocmedItem from "./SocmedItem";
import SocmedList from "./SocmedList";

const Socmed = ({socmed}) => {
    return (
        <SocmedList>
            {socmed.map((item, index) => <SocmedItem key={index} {...item} />)}
        </SocmedList>
    );
}
 
export default Socmed;
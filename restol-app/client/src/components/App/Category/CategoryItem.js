import { ReactSVG } from "react-svg";
import Card from "../../shared/Card";
import DescTitle from "../../shared/text/DescTitle";
import CategoryIcon from "./CategoryIcon";

const CategoryItem = ({index, active, title, icon, onClick}) => {
    return (
        <Card onClick={() => onClick(index)} bg={active === index ? '#FFDB6D' : '#fff'}>
            <CategoryIcon active={active === index ? 'true' : 'false'}>
                <ReactSVG src={`./assets/icon/${icon}`} />
            </CategoryIcon>
            <DescTitle mb='0'>
                {title}
            </DescTitle>
        </Card>
    );
}
 
export default CategoryItem;
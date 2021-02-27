import { useState } from "react"
import { ReactSVG } from "react-svg"
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import Wrapper from "./Wrapper";

const Dropdown = ({text, list}) => {
    const [collapse, setCollapse] = useState(true)
    const [active, setActive] = useState(list[0])

    const handleCollapse = () => {
        setCollapse(prev => !prev)
    }

    const handleClick = li => {
        setActive(li)
    }

    return (
        <Wrapper onClick={handleCollapse} collapse={collapse}>
            <span>{text} <b>{active}</b></span>
            <ReactSVG src='./assets/icon/drop.svg' />
            {!collapse && <ListContainer>
                {list.filter(li => li !== active).map((li, index) => <ListItem key={index} onClick={() => handleClick(li)}>{li}</ListItem>)}
            </ListContainer>}
        </Wrapper>
    );
}
 
export default Dropdown;
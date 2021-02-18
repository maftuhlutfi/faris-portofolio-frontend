import styled from "styled-components"
import ListItem from "./ListItem";

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ListInfo = ({list}) => {
    return (
        <ListWrapper>
            {list.map((li, index) => <ListItem key={index} {...li} />)}
        </ListWrapper>
    );
}
 
export default ListInfo;
import styled from "styled-components"
import Avatar from "../../../shared/Avatar";
import ListInfo from "./ListInfo";
import list from './list'
import InfoWrapper from "./InfoWrapper";
import { useState } from "react";

const Wrapper = styled.div`
    cursor: pointer;
    position: relative;
    ${props => props.margin && `margin: ${props.margin}`}
`

const UserInfo = ({image, margin}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <Wrapper margin={margin} onClick={() => setShowInfo(prev => !prev)}>
            <Avatar src={image} />
            <InfoWrapper show={showInfo}>
                <ListInfo list={list} />
            </InfoWrapper>
        </Wrapper>
    );
}
 
export default UserInfo;
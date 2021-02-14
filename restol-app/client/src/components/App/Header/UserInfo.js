import styled from "styled-components"

const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`

const Wrapper = styled.div`
    cursor: pointer;
    position: relative;
    ${props => props.margin && `margin: ${props.margin}`}
`

const UserInfo = ({image, margin}) => {
    return (
        <Wrapper margin={margin}>
            <Avatar src={image} />
        </Wrapper>
    );
}
 
export default UserInfo;
import styled from "styled-components"

const Title = styled.span`
    font-size: 32px;
    flex-grow: 1;

    span {
        font-weight: 600;
    }
`

const HeaderTitle = ({title}) => {
    const titleArray = title.split(" ")
    return (
        <Title>
            <span>{titleArray[0]}</span> {titleArray[1]}
        </Title>
    );
}
 
export default HeaderTitle;
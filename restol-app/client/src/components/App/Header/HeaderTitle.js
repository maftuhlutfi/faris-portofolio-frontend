import styled from "styled-components"

const Title = styled.span`
    font-size: ${props => props.size ? props.size : '32px'};
    flex-grow: 1;
    font-weight: 300;

    span {
        font-weight: 500;
    }

    @media (max-width: 600px) {
        font-size: 110%;
    }
`

const HeaderTitle = ({title, size}) => {
    const titleArray = title.split(" ")
    return (
        <Title size={size}>
            <span>{titleArray[0]}</span> {titleArray[1]}
        </Title>
    );
}
 
export default HeaderTitle;
import styled from "styled-components"

const Wrapper = styled.a`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

const Icon = styled.span`
    width: 50px;
    height: 50px;
    background-color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`

const Text = styled.span`
    padding: 8px 15px;
    font-size: 14px;
    border: 1px solid #222222;
    border-radius: 5px;
    position: relative;
    left: -5px;
    font-weight: 500;
    display:none;
    transition: .25s ease-in-out;

    ${Wrapper}:hover & {
        display: block;
    }
`

const SocmedItem = ({icon, href, name}) => {
    return (
        <Wrapper href={href}>
            <Icon>
                <img src={icon.url} />
            </Icon>
            <Text>
                {name}
            </Text>
        </Wrapper>
    );
}
 
export default SocmedItem;
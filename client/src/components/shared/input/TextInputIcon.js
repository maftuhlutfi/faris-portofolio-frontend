import { ReactSVG } from "react-svg";
import styled from "styled-components"

const SearchInput = styled.input`
    height: ${props => props.height ? props.height : '45px'};
    width: 280px;
    padding: 2px 20px 2px 55px;
    border-radius: 20px;
    box-sizing: border-box;
    border: none;
    font-size: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);

    &:focus {
        box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.15);
        outline: none;
    }

    & + div {
        position: absolute;
        top: 55%;
        left: 15px;
        transform: translateY(-50%);

        svg {
            width: 28px;
        }
    }
`

const Wrapper = styled.div`
    position: relative;
`

const TextInputIcon = ({icon, ...inputProps}) => {
    return (
        <Wrapper>
            <SearchInput autoComplete='off'  {...inputProps} />
            <ReactSVG src={icon} />
        </Wrapper>
    );
}
 
export default TextInputIcon;
import styled from "styled-components"

const NavIcon = styled.div`
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 2;
    
    display:none;

    @media (max-width: 768px) {
        display: block;
    } 

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

    & > span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: #3d3d3d;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    & > span:nth-child(1) {
    top: 0px;
    }

    & > span:nth-child(2), & > span:nth-child(3) {
    top: 8px;
    }

    & > span:nth-child(4) {
    top: 16px;
    }

    ${props => props.open && `& > span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
    }

    & > span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    }

    & > span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    }

    & > span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
    }`}
`

const Hamburger = ({open, handleClick}) => {
    return (
        <NavIcon onClick={handleClick} open={open}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </NavIcon>
    );
}
 
export default Hamburger;
import styled from "styled-components"
import NavItem from './NavItem'
import navitems from './navitems'

const Wrapper = styled.div`
    display: flex;
    position: relative;

    & > a:not(:last-child) {
        margin-right: 50px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        background-color: white;
        right: ${props => props.show ? '0px' : '-100%'};
        height: 100%;
        top: 0px;
        z-index: 1;
        padding: 130px 80px;
        box-shadow: -5px 0px 30px rgba(0, 0, 0, 0.1);
        

        & > a:not(:last-child) {
            margin-right: 0px;
            margin-bottom: 30px;
        }
    }

    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
`

const NavList = ({show}) => {
    return (
        <Wrapper show={show}>
            {navitems.map((item, index) => <NavItem key={index} {...item} />)}
        </Wrapper>
    );
}
 
export default NavList
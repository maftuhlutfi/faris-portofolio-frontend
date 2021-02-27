import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import NavList from "./NavList"

const Wrapper = styled.section`
    padding: 40px 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        padding: 50px;
    }
`

const Logo = styled.span`
    font-size: 48px;
    font-weight: 600;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 36px;
    }
`

const Header = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(prev => !prev)
    }

    return (
        <Wrapper>
            <Link href='/'>
                <Logo>Faris</Logo>
            </Link>
            <Hamburger handleClick={handleClick} open={show} />
            <NavList show={show} />
        </Wrapper>
    );
}
 
export default Header;
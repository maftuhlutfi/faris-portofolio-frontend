import styled from "styled-components"
import Link from "next/link";
import { useRouter } from 'next/router' 

const Wrapper = styled.a`
    font-size: 16px;
    font-weight: ${props => props.active ? '600' : '400'};
    ${props => !props.active && 'color: #707070;'};

    &:hover {
        cursor: pointer;
        color: #212121;
    }

    @media (max-width: 768px) {
        font-size: 22px;
    }
`

const NavItem = ({name, href}) => {
    const router = useRouter()
    console.log(router.pathname === href)
    return (
        <Link href={href}>
            <Wrapper active={router.pathname == href}>
                {name}
            </Wrapper>
        </Link>
    );
}
 
export default NavItem;
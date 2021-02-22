import styled from "styled-components"

const CartWrapper = styled.div`
    position: relative;
    display: none;
    
    @media (max-width: 600px) {
        display: block;

        svg {
            width: 40px;
        }
    }
`

export default CartWrapper
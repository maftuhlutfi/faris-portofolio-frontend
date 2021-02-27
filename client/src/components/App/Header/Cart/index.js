import { ReactSVG } from "react-svg";
import CartWrapper from "./CartWrapper";
import Counter from "./Counter";

const Cart = () => {
    return (
        <CartWrapper>
            <ReactSVG src='./assets/icon/cart.svg' />
            <Counter content='8' />
        </CartWrapper>
    );
}
 
export default Cart;
import {useState} from 'react'
import HeaderTitle from "../Header/HeaderTitle";
import { ReactSVG } from "react-svg";
import StyledButton from "../../shared/StyledButton";
import Wrapper from './Wrapper'
import Header from './Header'
import IconWrapper from './IconWrapper'
import OrderList from './OrderList'
import OrderItem from './OrderItem'
import Detail from './Detail'
import styled from 'styled-components'
import items from './items'

const Button = styled(StyledButton)`
    margin-top: 20px;
`

const OrderCard = () => {
    const [edit, setEdit] = useState(false)
    return (
        <Wrapper>
            <Header>
                <HeaderTitle size='22px' title='Add Order' />
                <IconWrapper onClick={() => setEdit(prev => !prev)}>
                    <ReactSVG src='./assets/icon/edit.svg' />
                </IconWrapper>
            </Header>
            <OrderList>
                {items.map((item, index) => <OrderItem key={index} {...item} edit={edit} />)}
            </OrderList>
            <Detail />
            <Button primary>Add to order</Button>
        </Wrapper>
    );
}
 
export default OrderCard;
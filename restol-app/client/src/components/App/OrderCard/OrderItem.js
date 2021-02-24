import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import IconWrapper from './IconWrapper'
import Text from './Text'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
`

const Picture = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
`

const Name = styled.span`
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
`

const Qty = styled.span`
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    ${props => props.edit && 'padding: 2px 5px;border: solid 1px #5b5b5b;background-color: #f0f0f0;'}
`

const NamePriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Delete = styled(IconWrapper)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    opacity: .9;

    svg {
        width: 30px;
        margin-top: 5px;
    }
`

const OrderItem = ({picture, name, price, qty, edit}) => {
    return (
        <Wrapper>
            {edit && <Delete><ReactSVG src='./assets/icon/delete.svg' /></Delete>}
            <Picture url={picture} />
            <NamePriceWrapper>
                <Name>{name}</Name>
                <Text>Rp. {price}</Text>
            </NamePriceWrapper>
            <Qty edit={edit}>{!edit && 'x'}<span contentEditable={edit}>{qty}</span></Qty>
            <Text>Rp. {price*qty}</Text>
        </Wrapper>
    );
}
 
export default OrderItem;
import Card from "../../shared/Card";

import styled from "styled-components"
import StyledButton from "../../shared/StyledButton";

const Picture = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-image: url(${props => props.foto});
    background-position: center;
    background-size: cover;
    margin: auto;
    margin-bottom: 15px;
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 7px;
    text-align: center;
`

const Price = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
    text-align: center;
`

const ProductItem = ({name, price, foto}) => {
    return (
        <Card padding='25px' width='155px'>
            <Picture foto={foto} />
            <Name>{name}</Name>
            <Price>Rp. {price}</Price>
            <StyledButton sm primary>ADD</StyledButton>
        </Card>
    );
}
 
export default ProductItem;
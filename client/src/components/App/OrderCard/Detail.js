import styled from 'styled-components'
import Text from './Text'

const DetailWrapper = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Detail = () => {
    return (
        <>
            <DetailWrapper>
                <Text color='#b5b5b5'>Sub Total</Text>
                <Text color='#5b5b5b' weight='600'>Rp. 15.000</Text>
            </DetailWrapper>
            <DetailWrapper>
                <Text color='#b5b5b5'>PPn (10%)</Text>
                <Text weight='500' color='#b5b5b5'>Rp. 1.500</Text>
            </DetailWrapper>
            <DetailWrapper>
                <Text>Total Payment</Text>
                <Text color='#5b5b5b' weight='600' size='16px'>Rp. 16.500</Text>
            </DetailWrapper>
        </>
    );
}
 
export default Detail;
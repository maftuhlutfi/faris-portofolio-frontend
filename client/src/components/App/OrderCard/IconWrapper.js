import styled from 'styled-components'

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    svg {
        path {fill: #2a2a2a;}
    }

    &:hover {
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    }
`

export default IconWrapper
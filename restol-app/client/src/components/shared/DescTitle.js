import styled from "styled-components";

const DescTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #5b5b5b;
    line-height: 16 * 1.618;
    margin-top: 0px;
    margin-bottom: ${props => props.mb || '25px'};
    text-align: center;
`

export default DescTitle
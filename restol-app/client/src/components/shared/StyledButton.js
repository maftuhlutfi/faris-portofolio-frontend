import styled, { css } from "styled-components";

const size = {
    sm: css`
        font: 16px;
        height: 35px;
    `,
    md: css`
        font: 18px;
        height: 50px;
    `,
    lg: css`
        font: 24px;
        height: 60px;
    `
}

const color = {
    primary: css`
        background: #ff2454;
        color: white;
    `,
    secondary: css`
        background: #ffdb6d;
        color: #5b5b5b;
    `,
    disabled: css`
        background: #e5e5e5;
        color: #5b5b5b;
    `,
}

const StyledButton = styled.button`
    padding: 5px;
    text-align: center;
    font-size: 18px;
    height: 50px;
    font-weight: 600;
    border-radius: 10px;
    filter: drop-shadow(0px 8px 15px rgba(255, 36, 84, 0.6));
    border: none;
    font-family: "Poppins";
    cursor: pointer;

    &:hover {
        transform: translateY(2px);
        filter: drop-shadow(0px 10px 12px rgba(255, 36, 84, 0.6));
    }

    ${props => props.sm && size.sm}
    ${props => props.md && size.md}
    ${props => props.lg && size.lg}

    ${props => props.primary && color.primary}
    ${props => props.secondary && color.secondary}
    ${props => props.disabled && color.disabled}
`

export default StyledButton;
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        cursor: pointer;
    }
`

const Input = styled.input`
    ${Container} & {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
`

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid #b5b5b5;

    ${Container}:hover ${Input} ~ & {
        background-color: #ece6e6;
    }

    ${Container} ${Input}:checked ~ & {
        background-color: #ff2454;
    }

    &::after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 4px;
        width: 2px;
        height: 4px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    ${Container} ${Input}:checked ~ &::after {
        display: block;
    }
`

const Checkbox = ({label}) => {
    return ( 
        <Container>
            <label for="remember">{label}</label>
            <Input type="checkbox" name="remember" id="remember" />
            <Checkmark />
        </Container>
    );
}
 
export default Checkbox;
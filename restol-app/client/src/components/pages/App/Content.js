import styled from "styled-components";

const Content = styled.main`
    padding: 50px;
    box-sizing: border-box;
    width: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #b5b5b5;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #b0b0b0;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #FF617A;
    }
    ::-webkit-scrollbar-track {
    background: #dadada;
    border: 0px none #ffffff;
    }
    ::-webkit-scrollbar-track:hover {
    background: #cacaca;
    }
    ::-webkit-scrollbar-track:active {
    background: #cacaca;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }

    @media (max-width: 600px) {
        padding: 30px;
        padding-bottom: 130px;
        overflow-y: 
    }
`

export default Content
import styled from "styled-components";

const Wrapper = styled.aside`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white;
    box-sizing: border-box;

    @media (max-width: 600px) {
        position: fixed;
        bottom: 0px;
        flex-direction: row;
        width: 100%;
        height: auto;
        justify-content: center;
        padding: 10px;
        z-index: 1;

        & > span {
            display: none;
        }

        & > a {
            display: none;
        }
    }
`

export default Wrapper
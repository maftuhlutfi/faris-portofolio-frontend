import styled from "styled-components";

const Wrapper = styled.aside`
    width: 150px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
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

        & > span {
            display: none;
        }

        & > a {
            display: none;
        }
    }
`

export default Wrapper
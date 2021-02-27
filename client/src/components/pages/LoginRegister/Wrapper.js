import styled from "styled-components"

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #f5f5f5 url("./assets/background.jpg") no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
        padding: 10% 0;
    }
`

export default Wrapper
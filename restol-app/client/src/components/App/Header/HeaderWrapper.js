import styled from "styled-components";

const HeaderWrapper = styled.section`
    display: flex;
    margin-bottom: 30px;
    padding-left: 10px;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: 20px;
    }

    & > div:last-child {
        display: none;
    }

    @media (max-width: 600px) {
        flex-wrap: wrap;

        & > *:not(:last-child) {
            margin-right: 15px;
        }
        & > span {
            font-size: 140%;
        }
        & > div:nth-child(2) {
            display: none;
        }
        & > div:last-child {
            margin-left: -10px;
            display: block;
            flex-grow: 1;
            margin-top: 20px;

            input {
                width: 100%;
            }
        }
    }
`

export default HeaderWrapper
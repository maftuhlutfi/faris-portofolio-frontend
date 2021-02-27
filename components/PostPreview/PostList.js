import styled from "styled-components"

const PostList = styled.section`
    display: flex;
    overflow: visible;
    flex-direction: row;
    max-width: 540px;
    position: absolute;
    top: 28%;
    right: 0px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 50px 30px 30px 50px;
  
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px;
    }
    ::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb:hover{
    background: #FFE073;
    }
    ::-webkit-scrollbar-track{
    background: #ffffff;
    border-radius: 10px;
    }

    & > div {
        margin-right: 30px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export default PostList
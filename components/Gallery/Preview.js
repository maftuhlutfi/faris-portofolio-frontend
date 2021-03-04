import styled from "styled-components"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    left: 0px;
    padding: 10px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2001;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    background-color: rgba(0,0,0,0.8);

    ${props => !props.show && 'display: none;'}
`

const Photo = styled.img`
    width: auto;
    height: 80vh;
    margin-top: -5vh;
    z-index: 999;
`

const CloseBtn = styled.div`
    font-size: 32px;
    padding: 5px 10px;
    background-color: #000;
    border-radius: 5px;
    z-index: 1000;
    position: absolute;
    color: white;
    right: 5vw;
    top: 5vh;
    cursor: pointer;
`

const Preview = ({image, show, setShow}) => {
    return (
        <Wrapper onClick={() => setShow(false)} show={show}>
            <CloseBtn onClick={() => setShow(false)}>x</CloseBtn>
            <Photo src={image} />
        </Wrapper>
    );
}
 
export default Preview;
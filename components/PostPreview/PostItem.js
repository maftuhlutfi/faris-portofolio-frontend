import Link from "next/link";
import styled from "styled-components"
import Card from "../Card";

const Wrapper = styled(Card)`
    min-width: 210px;
    height: 280px;
    background: url(${props => props.image}) no-repeat center center;
    background-size: cover;
    position: relative;
    padding: 0;
    overflow: hidden;
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.3));

    &:hover {
        min-width: 240px;
        height: 320px;
        cursor: pointer;
    }

    transition: .5s ease-in-out;
`

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    position: absolute;
    bottom: -100%;
    width: 100%;
    transition: .5s ease-out;

    ${Wrapper}:hover & {
        bottom: 0px;
    }
`

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`

const Content = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 14 * 1.618;

    a {
        font-weight: 600;
    }
`

const Type = styled.span`
    background-color: #FFE073;
    padding: 5px 10px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;
`

const PostItem = ({title, content, image, slug}) => {
    return (
        <Link href={title ? `/literature/${slug}` : '/photograph'}>
            <Wrapper image={image}>
                <Type>{title ? 'Literature' : 'Photograph'}</Type>
                {title && <Detail>
                    <Title>{title}</Title>
                    <Content>{content.slice(0, 30)}... <a>Read more</a></Content>
                </Detail>}
            </Wrapper>
        </Link>
    );
}
 
export default PostItem;
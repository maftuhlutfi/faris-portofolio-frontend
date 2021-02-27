import Link from "next/link"
import styled from "styled-components"
import CategoryItem from "../Category/CategoryItem"
import CategoryList from "../Category/CategoryList"

const Wrapper = styled.a`
    padding: 40px;
    background-color: white;
    border-radius: 10px;
    filter: drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.1));
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
`

const Image = styled.div`
    width: 100%;
    height: 315px;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    border-radius: 5px;
    margin-bottom: 30px;
`

const Title = styled.span`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 25px;
`

const Content = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;
    line-height: calc(18px * 1.618);

    a {
        font-weight: 700;
    }
`

const LiteratureItem = ({title, content, slug, post_categories, image}) => {
    return (
        <Link href={`/literature/${slug}`}>
            <Wrapper>
                {image && <Image src={image.formats.large.url} />}
                <Title>{title}</Title>
                <Content>{content.slice(0, 500)}... <Link href={`/literature/${slug}`}><a>Read more</a></Link></Content>
                <CategoryList>
                    {post_categories.map((item, index) => <CategoryItem key={index} name={item.name} />)}
                </CategoryList>
            </Wrapper>
        </Link>
    );
}
 
export default LiteratureItem;
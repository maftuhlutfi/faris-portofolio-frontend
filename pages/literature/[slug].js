import axios from 'axios'
import Content from '../../components/Content'
import Header from '../../components/Header'
import styled from 'styled-components'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

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
    margin-bottom: 40px;
    text-align: center;
`

const ButtonWrapper = styled.span`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`

const Button = styled.button`
    background-color: ${props => props.bg};
    font-size: 16px;
    padding: 10px 20px;
    position: relative;
    width: fit-content;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

const Literature = ({post: {image, title, content}}) => {
    return (
        <>
            <Header />
            <Content>
                <Title>{title}</Title>
                {image && <Image src={image.formats.large.url} />}
                <ReactMarkdown>{content}</ReactMarkdown>
                <Link href='/literature'>
                    <ButtonWrapper>
                        <Button bg='#FFE073' as='a'>
                            Back
                        </Button>
                    </ButtonWrapper>
                </Link>
            </Content>
        </>
    );
}

// This function gets called at build time
export async function getStaticPaths() {
    try {
        const res = await axios.get(`${process.env.API}/posts`)
        const posts = await res.data
    
        // Get the paths we want to pre-render based on posts
        const paths = posts.map((post) => ({
            params: { slug: post.slug },
        }))
    
        // We'll pre-render only these paths at build time.
        // { fallback: false } means other routes should 404.
        return { paths, fallback: false }
    } catch (err) {
        return { err }
    }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await axios.get(`${process.env.API}/posts?slug=${params.slug}`)
    const post = await res.data[0]

    // Pass post data to the page via props
    return { props: { post } }
}
 
export default Literature;
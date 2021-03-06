import axios from 'axios'
import Content from '../../components/Content'
import Header from '../../components/Header'
import styled from 'styled-components'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

const Literature = ({post}) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const {image, title, content} = post
    
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

// This also gets called at build time
export async function getServerSideProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    console.log(params)
    const res = await axios.get(`${process.env.API}/posts?slug=${params.slug}`)
    const post = await res.data[0]

    // Pass post data to the page via props
    return { props: { post } }
}
 
export default Literature;
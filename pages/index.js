import Head from 'next/head'
import Header from '../components/Header'

import styled from "styled-components"
import Hero from '../components/HeroImage'
import Heading from '../components/Text/Heading'
import SubHeading from '../components/Text/SubHeading'
import PostPreview from '../components/PostPreview'

import axios from "axios";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const HeadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    top: 30%;
    transform: translateY(-30%);
  }
`

const Sub = styled(SubHeading)`
  width: 350px;

  @media (max-width: 768px) {
    width: 85vw;
  }
`

export default function Home({err, posts, photos, content}) {
  if (err) {
    return <div>An error occured: {err.message}</div>
  }

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero src='/hero.png' />
      <HeadingWrapper>
        <Heading mb='15px'>{content.heading}</Heading>
        <Sub>{content.subheading}</Sub>
      </HeadingWrapper>
      <PostPreview posts={posts} photos={photos} />
    </Wrapper>
  )
}

export async function getStaticProps() {
  try {
    // GET home content
    const rescontent = await axios.get(`${process.env.API}/home`)
    const content = rescontent.data

    // GET posts sort=createdAt limit=2
    const respost = await axios.get(`${process.env.API}/posts?image_null=0&_sort=createdAt:DESC&_limit=2`)
    const posts = respost.data

    // GET photograph sort=createdAt limit=2
    const resphoto = await axios.get(`${process.env.API}/photographs?_sort=createdAt:DESC&_limit=2`)
    const photos = resphoto.data

    // GET 3 newest post and photo
    if (new Date(posts[1].createdAt) > new Date(photos[1].createdAt)) {
      photos.pop()
    } else {
        posts.pop()
    }

    return { props: { posts, photos, content } }
  } catch (err) {
    return { err }
  }
}
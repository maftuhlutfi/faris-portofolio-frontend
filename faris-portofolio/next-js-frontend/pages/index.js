import Head from 'next/head'
import Header from '../components/Header'

import styled from "styled-components"
import Hero from '../components/HeroImage'
import Heading from '../components/Text/Heading'
import SubHeading from '../components/Text/SubHeading'

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

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero src='./hero.png' />
      <HeadingWrapper>
        <Heading mb='15px'>Hello there!</Heading>
        <Sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit gravida sem vel gravida.</Sub>
      </HeadingWrapper>
    </Wrapper>
  )
}

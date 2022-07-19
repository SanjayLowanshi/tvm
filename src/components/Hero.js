import React from 'react'
import styled from 'styled-components'
import bcg from '../assets/images/bcg.png'
import "./hero.css";
import Navbar from './Navbar';
import {Container} from '../globalStyles'

const Section = styled.section`
  background-image: url(${bcg});
  display : block;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 714px;
  
  `
  const Content = styled.div`
  padding-top: 151px;
  `
const HeroTop = styled.div`
  h1{
    color: #ffffff;
margin-bottom: 10px;
  }
  p{
    font-weight: 400;
font-size: 21px;
line-height: 30px;

color: #ffffff;
margin-bottom: 50px;
max-width: 475px;

  }
  /* display : flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 555px;
  h1{
    margin-bottom : 10px;
  }
  p{
    margin-bottom: 40px;
  } */

`
const HeroBottom = styled.div`
  padding-top: 25px;
  p{
  color: #ffffff;
  max-width: 555px;
  margin-left: auto;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  }
`
const Button = styled.button`
  height: 40px;
min-width: 168px;
border-color: #3c88b5;
color: #ffffff;
  
border-radius: 0px;
font-weight: 700;
font-size: 12px;
line-height: 16px;
letter-spacing: 1px;
text-transform: uppercase;
background-color: transparent;
display: inline-flex;
align-items: center;
justify-content: center;
box-shadow: inherit !important;
outline: 0;
text-decoration: none;

`




const Hero = () => {
  return (
    <>
    <Section>
    <Container>
    <Navbar />
        <Content>
      <HeroTop>
        <h1>Apache (incubating) TVM</h1>
        <p>An End to End Deep Learning Compiler Stack for CPUs, GPUs and accelerators</p>
        <Button>GET STARTED</Button>
      </HeroTop>
      <HeroBottom>
        <p>
        Apache (incubating) TVM is an open source deep learning compiler stack for CPUs, GPUs, and machine learning accelerators. It aims to enable machine learning engineers to optimize and run computations efficiently on any hardware backend.
        </p>
      </HeroBottom>
        </Content>
    </Container>
    </Section>
    </>
  )
}

export default Hero
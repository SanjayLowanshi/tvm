import React from 'react'
import styled from 'styled-components'
import { Container } from '../globalStyles'

const Section = styled.section`
  padding: 77px 0 87px;
    background: #003048;
`
const LinkBox = styled.div`
  color: #ffffff;

h3 {
    font-size: 38px;
    margin-bottom: 0;
}
p{
  margin-bottom: 0;
    padding-right: 40px;
    margin-top: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
   
  a{
    color: #0379b6;
    text-decoration: none;
    transition: 0.2s all;
    width: 100%;
    display: block;
    font-size: 24px;
    position: relative;
    line-height: 36px;
  &::after{
    content: '';
    height: 34px;
    display: block;
    width: 20px;
    background: url(../assets/icons/right.svg) no-repeat center;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  }
}
  `
const LinkWrapper = styled.div`
 display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);

`



const Links = () => {
  return (
    <Section>
     <Container>
      <LinkWrapper>
        <LinkBox>
        <h1>Docs</h1>
        <div>
          <p>
            <a href="/">Lorem ipsum dolor sit amet consectetur.</a>
          </p>
        </div>
        </LinkBox>
        <LinkBox>
        <h1>Docs</h1>
        <div>
          <p>
            <a href="/">Lorem ipsum dolor sit amet consectetur.</a>
          </p>
          
        </div>
        </LinkBox>
        <LinkBox>
        <h1>Docs</h1>
        <div>
          <p>
            <a href="/">Lorem ipsum dolor sit amet consectetur.</a>
          </p>
        </div>
        </LinkBox>

        
      </LinkWrapper>
     </Container>
    </Section>
  )
}

export default Links
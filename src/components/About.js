import React from 'react';
import styled from 'styled-components'
import ImgDesktop from '../assets/images/aboutDs.svg'
import ImgRes from '../assets/images/aboutRes.svg'
import { Container } from '../globalStyles'

const Section = styled.section``
const AboutImg = styled.div``
const Content = styled.div``
const AboutDetails = styled.div``
const DesktopImg = styled.img`
/* background: url(${ImgDesktop}); */

`
const ResImg = styled.img``


const About = () => {
  return (
      <Section>
      <Container>
        <Content>
          <AboutImg>
            <img src={ImgDesktop} alt="" />
          </AboutImg>
          <AboutDetails>
            <h4>About Apache TVM</h4>
            <p>
              TVM provides two levels of optimizations shown in the figure to
              the left.
            </p>
            <ul>
              <li>
                Compilation of deep learning models into minimum deployable
                modules.
              </li>
              <li>
                Infrastructure to automatic generate and optimize models on more
                backend with better performance.
              </li>
            </ul>
          </AboutDetails>
        </Content>
      </Container>
    </Section>
    
  )
}

export default About;

import React from 'react'
import logoImg from "../assets/logos/tvm-sm.svg";
import styled from 'styled-components';
import { Logo } from './Navbar';
 const Section = styled.section``
 const Container = styled.div``
 const FooterTop = styled.div``

const Footer = () => {
  return (
    <Section>
      <Container>
      <FooterTop>
        <div className="logo">
        <Logo />
        </div>
        <div className="copywrite">
          <h5>@ 2020 Apache Software Foundation | All Rights Reserved.</h5>
        </div>
      </FooterTop>
      </Container>
    </Section>
  )
}

export default Footer
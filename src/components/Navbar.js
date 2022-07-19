import React from "react";
import styled from "styled-components";
import logoImg from "../assets/logos/tvm-sm.svg";
import { Link } from "react-router-dom";


const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  
`;

const NavbarWrap = styled.div`
  /* width: 1200px; */
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  width: 128px;
  height: 22px;
  background: url(${logoImg}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav`

`;

const NavLink = styled(Link)`
  color: #fff;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;
const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">COMMUNITY</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">VTA</NavLink>
          <NavLink to="/">BLOG</NavLink>
          <NavLink to="/">DOCS</NavLink>
          <NavLink to="/">CONFERENCE</NavLink>
          <NavLink to="/">GITHUB</NavLink>
        </Nav>
        <Button>SignUp</Button>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;

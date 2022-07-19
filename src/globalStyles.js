import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  

  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    &.scroll-hide{
        overflow: hidden;
    }
}
/* deafult css */
img{
    max-width: 100%;
    height: auto;
}
ul{
    list-style: none;
    padding:0;
    margin:0;
}
h1 {
    font-weight: 400;
    font-size: 55px;
    line-height: 79px;
    margin: 0 0 20px;
    @media only screen and (max-width: 991px) {
        font-size: 45px;
        line-height: 52px;
    }
    @media only screen and (max-width: 767px) {
        font-size: 31px;
        line-height: 40px;
    }
}
h3{
    font-size:38px;
    margin-bottom:0;
    @media only screen and (max-width: 991px) {
        font-size: 28px;
    }
}
h4 {
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    @media only screen and (max-width: 767px) {
        font-size: 22px;
        line-height: 38px;
    }
}
p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    @media only screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 24px;
    }
}
`;
export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
export default GlobalStyle;

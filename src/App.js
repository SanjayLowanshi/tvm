
import About from "./components/About";
import Brands from "./components/Brands";
import Community from "./components/Community";
import Features from "./components/Features";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Links from "./components/Links";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
     <GlobalStyle />
     <Hero />
     <About />
     <Features />
     <Brands />
     <Community />
     <Follow />
     <Links />
     <Footer />
    </>
  );
}

export default App;

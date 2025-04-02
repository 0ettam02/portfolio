import Header from "./components/headerComponent";
import Hero from "./components/heroComponent";
import Competenze from "./components/competenzeComponent";
import Progetti from "./components/progettiComponent";
import Contact from "./components/contactComponent";
import Footer from "./components/footerComponent";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Competenze />
      <Progetti />
      <Contact />
      <Footer />
    </>
  );
}

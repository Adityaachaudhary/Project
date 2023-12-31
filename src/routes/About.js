import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../photos/12.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
    </>
  );
}

export default About;

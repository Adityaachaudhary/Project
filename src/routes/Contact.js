import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../photos/10.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../photos/night.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}

export default Service;

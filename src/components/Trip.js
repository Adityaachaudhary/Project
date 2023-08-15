import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../photos/5.jpg";
import Trip2 from "../photos/8.jpg";
import Trip3 from "../photos/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips </h1>
      <p>You can discover unique destination using Google maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="From the idyllic beaches of Bali to the chaotic melting pot of Jakarta, Indonesia is a diverse Southeast Asian gem. West Java and Sumatra are home to some of the most beautiful tropical forests in the world – perfect for jungle trekking. The Prambanan collection of Hindu temples in Yogyakarta will astound you with their architecture and aura of spirituality. Capital city Jakarta is a cultural and political hub that’s jam-packed with museums, performing arts centers, and traditional food stalls."
        />

        <TripData
          image={Trip2}
          heading="Trip to France"
          text="From the idyllic beaches of Bali to the chaotic melting pot of Jakarta, Indonesia is a diverse Southeast Asian gem. West Java and Sumatra are home to some of the most beautiful tropical forests in the world – perfect for jungle trekking. The Prambanan collection of Hindu temples in Yogyakarta will astound you with their architecture and aura of spirituality. Capital city Jakarta is a cultural and political hub that’s jam-packed with museums, performing arts centers, and traditional food stalls."
        />

        <TripData
          image={Trip3}
          heading="Trip to Malaysia"
          text="From the idyllic beaches of Bali to the chaotic melting pot of Jakarta, Indonesia is a diverse Southeast Asian gem. West Java and Sumatra are home to some of the most beautiful tropical forests in the world – perfect for jungle trekking. The Prambanan collection of Hindu temples in Yogyakarta will astound you with their architecture and aura of spirituality. Capital city Jakarta is a cultural and political hub that’s jam-packed with museums, performing arts centers, and traditional food stalls."
        />
      </div>
    </div>
  );
}

export default Trip;

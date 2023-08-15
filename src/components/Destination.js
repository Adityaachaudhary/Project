import Mountain1 from "../photos/1.jpg";
import Mountain2 from "../photos/2.jpg";
import Mountain3 from "../photos/5.jpg";
import Mountain4 from "../photos/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destinations </h1>
      <p> Tour gives you the opportunities to see a lot,within a time frame.</p>

      <DestinationData
        heading="Taal Volcano,Batangas"
        text="Taal Volcano (IPA: [taʔal]; Tagalog: Bulkang Taal) is a large
      caldera filled by Taal Lake in the Philippines.[1] Located in the
      province of Batangas, the volcano is second of the most active
      volcanoes in the country, with 38 recorded historical eruptions, all
      of which were concentrated on Volcano Island, near the middle of
      Taal Lake.[3] The caldera was formed by prehistoric eruptions
      between 140,000 and 5,380 BP.[4][5] The volcano is located about 50
      kilometers (31 mi) south of Manila, the capital of the Philippines.
      Taal Volcano has had several violent eruptions in the past, causing
      deaths on the island and the populated areas surrounding the lake,
      with an overall death toll of about 6,000. Because of its proximity
      to populated areas and its eruptive history, the volcano was
      designated a Decade Volcano, worthy of close study to prevent future
      natural disasters. All volcanoes in the Philippines are part of the
      Ring of Fire."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        heading="mt. Daguldul,Batangas"
        text="Taal Volcano (IPA: [taʔal]; Tagalog: Bulkang Taal) is a large
        caldera filled by Taal Lake in the Philippines.[1] Located in the
        province of Batangas, the volcano is second of the most active
        volcanoes in the country, with 38 recorded historical eruptions, all
        of which were concentrated on Volcano Island, near the middle of
        Taal Lake.[3] The caldera was formed by prehistoric eruptions
        between 140,000 and 5,380 BP.[4][5] The volcano is located about 50
        kilometers (31 mi) south of Manila, the capital of the Philippines.
        Taal Volcano has had several violent eruptions in the past, causing
        deaths on the island and the populated areas surrounding the lake,
        with an overall death toll of about 6,000. Because of its proximity
        to populated areas and its eruptive history, the volcano was
        designated a Decade Volcano, worthy of close study to prevent future
        natural disasters. All volcanoes in the Philippines are part of the
        Ring of Fire."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;

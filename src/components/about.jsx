import { useState } from "react";
import aboutImg from "../assets/about.jpg";
import "../styles/App.css";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`about ${expanded ? "about-expanded" : ""}`} id="about">
      {/* IMAGE */}
      <div className={`about-img ${expanded ? "img-left" : ""}`}>
        <img src={aboutImg} alt="About JourneyKart" />
      </div>

      {/* TEXT */}
      <div className={`about-text ${expanded ? "text-full" : ""}`}>
        <h2>About Us</h2>

        {!expanded ? (
          <>
            <p>
              JourneyKart is a professional tourism company dedicated to
              creating memorable and hassle-free travel experiences across
              India.
            </p>

            <p>
              Our mission is to help travelers explore India’s diverse
              geography.
            </p>

            <button className="expbu" onClick={() => setExpanded(true)}>
              Know More
            </button>
          </>
        ) : (
          <>
            <p>
              With years of experience, JourneyKart partners with trusted
              hotels, guides, and transport services to ensure smooth journeys.
            </p>

            <p>
              We specialize in custom travel plans for adventure lovers,
              families, solo travelers, and honeymooners.
            </p>

            <p>
              From planning to execution, our expert team takes care of every
              detail so you can enjoy stress-free travel.
            </p>

            <button className="expbu" onClick={() => setExpanded(false)}>
              Show Less
            </button>
          </>
        )}
      </div>
    </section>
  );
}

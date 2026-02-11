import { useState } from "react";
import aboutImg from "../assets/about.jpg";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Us</h2>

        {showMore ? (
          <>
            <p>
              With years of experience in the travel industry, JourneyKart works
              with trusted partners, premium hotels, and local experts to ensure
              smooth and memorable journeys.
            </p>

            <p>
              From solo trips to family vacations, adventure tours to luxury
              escapes, we personalize every trip to fit your travel goals.
            </p>

            <button className="expbu" onClick={() => setShowMore(false)}>
              Show Less
            </button>
          </>
        ) : (
          <>
            <p>
              JourneyKart is a professional tourism company dedicated to
              creating hassle-free and memorable travel experiences across
              India.
            </p>

            <p>
              Our mission is to help travelers explore India’s diverse
              landscapes — mountains, beaches, heritage cities, and more.
            </p>

            <button className="expbu" onClick={() => setShowMore(true)}>
              Know More
            </button>
          </>
        )}
      </div>

      <div className="about-img">
        <img src={aboutImg} alt="About JourneyKart" />
      </div>
    </section>
  );
}

export default About;

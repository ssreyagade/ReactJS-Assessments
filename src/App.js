import "./styles/App.css";
import { useState } from "react";

import About from "./components/aboutus";
import Abb from "./components/about";
import Package from "./components/package";

import logo from "./assets/logo.webp";
import north from "./assets/north.jpg";
import east from "./assets/east.jpg";
import west from "./assets/west.jpg";
import south from "./assets/south.jpg";
import aboutImg from "./assets/about.jpg";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import banner4 from "./assets/banner4.jpg";
import banner5 from "./assets/banner5.jpeg";
import banner6 from "./assets/banner6.jpeg";

function App() {
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  return (
    <div className="app-wrapper">
      {/* HEADER */}
      <header className="nav">
        <div className="nav-logo">
          <img src={logo} alt="MYTOURIST Logo" />
          <h4>JourneyKart</h4>
        </div>

        <div className="nav-links">
          <button className="nav-buttons">
            <a href="#home">Home</a>
          </button>
          <button className="nav-buttons">
            <a href="#about">About Us</a>
          </button>
          <button className="nav-buttons">
            <a href="#packages">Packages</a>
          </button>
          <button className="nav-buttons">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </header>

      {/* SEARCH */}
      <div className="search-box">
        <input type="text" placeholder="Search destinations, packages..." />
        <button>Search</button>
      </div>

      {/*Home*/}
      {/* HOME */}
      <section className="home" id="home">
        {/* CAROUSEL */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner5} className="d-block w-100" alt="Slide 1" />
            </div>

            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="Slide 2" />
            </div>

            <div className="carousel-item">
              <img src={banner4} className="d-block w-100" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src={banner6} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* HOME TEXT */}
        <div className="home-text">
          <h2>Explore Incredible India</h2>
          <p>
            Discover breathtaking landscapes, rich culture, historical
            landmarks, serene beaches, and unforgettable travel experiences
            across India.
          </p>
          <a href="#packages">
            <button className="expbu">Explore More</button>
          </a>
        </div>
      </section>

      {/* ABOUT */}

      {/* ABOUT – COMPONENT */}
      <About />

      {/*<section className="about" id="about">
        <div className="about-text">
          <h2>About Us</h2>

          <p>
            JourneyKart is a professional tourism company dedicated to creating
            memorable and hassle-free travel experiences across India. We
            specialize in carefully curated travel packages that combine
            comfort, affordability, and adventure.
          </p>

          <p>
            Our mission is to help travelers explore India’s diverse geography —
            from the snow-covered mountains of the north to the peaceful
            backwaters of the south, from vibrant western cities to the rich
            cultural heritage of the east.
          </p>

          <button className="expbu">Know More</button>
        </div>

        <div className="about-img">
          <img src={aboutImg} alt="About MYTOURIST" />
        </div>
      </section>*/}

      {/*extra*/}

      {/* PACKAGES */}
      <section className="packages" id="packages">
        <h2>Tour Packages</h2>

        <div className="package-grid">
          <div className="package-card">
            <img src={north} alt="North India Package" />
            <h3>North India</h3>
            <p className="duration">6 Nights / 7 Days</p>
            <p className="price">₹38,177 per person</p>
            <p>
              Explore snow-clad mountains, royal palaces, hill stations, and
              iconic destinations.
            </p>
            <button
              className="book"
              onClick={() => {
                setSelectedPackage("North India Package");
                setShowPackageModal(true);
              }}
            >
              Book Now
            </button>
          </div>

          <div className="package-card">
            <img src={east} alt="East India Package" />
            <h3>East India</h3>
            <p className="duration">5 Nights / 6 Days</p>
            <p className="price">₹34,999 per person</p>
            <p>
              Discover wildlife sanctuaries, cultural heritage, hills, and
              spiritual destinations.
            </p>
            <button className="book">Book Now</button>
          </div>

          <div className="package-card">
            <img src={west} alt="West India Package" />
            <h3>West India</h3>
            <p className="duration">5 Nights / 6 Days</p>
            <p className="price">₹36,500 per person</p>
            <p>
              Experience deserts, beaches, historic forts, nightlife, and
              vibrant cities.
            </p>
            <button className="book">Book Now</button>
          </div>

          <div className="package-card">
            <img src={south} alt="South India Package" />
            <h3>South India</h3>
            <p className="duration">5 Nights / 6 Days</p>
            <p className="price">₹34,999 per person</p>
            <p>
              Relax among lush greenery, hill stations, temples, and scenic
              backwaters.
            </p>
            <button className="book">Book Now</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-box">
          <h2>Contact Us</h2>

          <p> Address: Pune, India</p>
          <p> Phone: +91 9876543210</p>
          <p>✉ Email: journeykart@gmail.com</p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="button">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 JourneyKart. All Rights Reserved.</p>
        <p>Facebook | Instagram | Twitter</p>
      </footer>
      <Package
        show={showPackageModal}
        title={selectedPackage}
        onClose={() => setShowPackageModal(false)}
      />
    </div>
  );
}

export default App;

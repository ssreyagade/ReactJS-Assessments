import React from "react";
import "../styles/App.css";

/* IMPORT IMAGES FOR CAROUSEL */
import img1 from "../assets/north1.jpg";
import img2 from "../assets/north2.webp";

import img4 from "../assets/rooms.jpg";

function Package({ show, title, onClose }) {
  if (!show) return null;

  return (
    <>
      {/* MODAL */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            {/* HEADER */}
            <div className="modal-header">
              <h4 className="modal-title">{title} Tour Package</h4>
              <button type="button" className="close" onClick={onClose}>
                &times;
              </button>
            </div>

            {/* BODY */}
            <div className="modal-body">
              <div className="container-fluid">
                {/* ===== CAROUSEL ===== */}
                <div
                  id="packageCarousel"
                  className="carousel slide carousel-fade mb-4"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} className="d-block w-100" alt="Slide 1" />
                    </div>

                    <div className="carousel-item">
                      <img src={img2} className="d-block w-100" alt="Slide 2" />
                    </div>

                    <div className="carousel-item">
                      <img src={img4} className="d-block w-100" alt="Slide 3" />
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-target="#packageCarousel"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-target="#packageCarousel"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="row">
                  {/* LEFT SIDE */}
                  <div className="col-md-7">
                    <h5>Itinerary</h5>
                    <p>
                      1N Srinagar • 1N Sonmarg • 2N Pahalgam • 1N Gulmarg • 1N
                      Srinagar
                    </p>

                    <h5 className="mt-3">Package Includes</h5>
                    <ul>
                      <li>Round Trip Flights</li>
                      <li>3 Star Hotels</li>
                      <li>11 Activities</li>
                      <li>Intercity Car Transfers</li>
                      <li>Airport Transfers</li>
                      <li>Selected Meals</li>
                    </ul>

                    <h5 className="mt-3">✔ Highlights</h5>
                    <ul>
                      <li>Gulmarg Gondola Tickets – Phase 1</li>
                      <li>Tour of Pahalgam Valley</li>
                      <li>
                        Visit to Avantipura Ruins, Nishat Bagh, Cheshma Shahi
                      </li>
                    </ul>

                    <h5 className="mt-4 text-success">
                      No Cost EMI at ₹12,408 / month
                    </h5>

                    <h4 className="mt-2">
                      ₹38,177 <small>/ Person</small>
                    </h4>
                    <p className="text-muted">Total Price ₹76,354</p>
                  </div>

                  {/* RIGHT SIDE FORM */}
                  <div className="col-md-5">
                    <h5>Book This Package</h5>

                    <form className="mt-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Travellers"
                        />
                      </div>

                      <div className="form-group">
                        <input type="date" className="form-control" />
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                      >
                        Proceed to Book
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
}

export default Package;

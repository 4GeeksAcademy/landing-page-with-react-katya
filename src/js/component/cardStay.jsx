import React from "react";
import PropType from "prop-types";

export default function CardStay(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12">
        <div className="card text-bg-dark border-success m-2 mt-4">
          <img src={props.imgUrl} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <div className="card-title">
              <ul
                className="nav nav-tabs justify-content-end mb-3"
                id="tabs-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="tabs-about-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabs-about"
                    type="button"
                    role="tab"
                    aria-controls="tabs-about"
                    aria-selected="true"
                  >
                    <span className="text-success">About</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tabs-location-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabs-location"
                    type="button"
                    role="tab"
                    aria-controls="tabs-location"
                    aria-selected="false"
                  >
                    <span className="text-success">Location</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tabs-availability-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabs-availability"
                    type="button"
                    role="tab"
                    aria-controls="tabs-availability"
                    aria-selected="false"
                  >
                    <span className="text-success">Availability</span>
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="tabs-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tabs-about"
                  role="tabpanel"
                  aria-labelledby="tabs-about-tab"
                  tabindex="0"
                >
                  <div className="card-body">
                    <h5 className="card-title">Prototype Hotel Name </h5>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                    <p className="card-text mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="tabs-location"
                  role="tabpanel"
                  aria-labelledby="tabs-location-tab"
                  tabindex="0"
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-map-marker-alt"></i> Location City{" "}
                    </h5>
                    <p>Address</p>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="tabs-availability"
                  role="tabpanel"
                  aria-labelledby="tabs-availability-tab"
                  tabindex="0"
                >
                  <div className="d-flex flex-row mt-5">
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text "
                        id="inputGroup-sizing-default"
                      >
                        Check-in
                      </span>
                      <input
                        type="date"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text "
                        id="inputGroup-sizing-default"
                      >
                        Check-out
                      </span>
                      <input
                        type="date"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <a href="#" className="btn btn-success w-75 fw-bold">
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardStay.propTypes = {
  imgUrl: PropType.string,
};

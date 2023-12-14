import React from "react";

export default function CardStay() {
  return (
    
      <div className="col-lg-4 col-sm-12 justify-content-center g-5">
        <div className="card text-bg-dark border-success">
          <img
            src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
            className="card-img responsiveImage"
            alt="..."
          />
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
                    <h5 className="card-title text-warning">
                      Prototype Hotel Name{" "}
                    </h5>
                    <span>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                    </span>
                    <p className="card-text mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
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
                    <h5 className="card-title text-warning">
                      <i className="fas fa-map-marker-alt text-warning"></i>{" "}
                      Location City{" "}
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
                  <div className="card-body container-fluid d-flex flex-column align-items-center justify-content-center">
                    <h5 className="card-title text-warning mb-3">
                      Choose your dates
                    </h5>
                    <div>
                      {" "}
                      
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
                      <div className="w-50 container-fluid d-flex flex-column align-items-center justify-content-center">
                      <a href="#" className="btn btn-success fw-bold">
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

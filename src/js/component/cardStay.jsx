import React from "react";
import PropType from "prop-types";

export default function CardStay(props) {
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
              <li className="nav-item" role="presentation" /* -ABOUT TAB- */>
                <button
                  className="nav-link active"
                  id={props.buttonIdAbout}
                  data-bs-toggle="tab"
                  data-bs-target={`#${props.contentIdAbout}`}
                  type="button"
                  role="tab"
                  aria-controls={props.contentIdAbout}
                  aria-selected="true"
                >
                  <span className="text-success">About</span>
                </button>
              </li>
              <li className="nav-item" role="presentation" /* -LOCATION TAB- */>
                <button
                  className="nav-link"
                  id={props.buttonIdLocation}
                  data-bs-toggle="tab"
                  data-bs-target={`#${props.contentIdLocation}`}
                  type="button"
                  role="tab"
                  aria-controls={props.contentIdLocation}
                  aria-selected="false"
                >
                  <span className="text-success">Location</span>
                </button>
              </li>
              <li
                className="nav-item"
                role="presentation" /* -AVAILABILITY TAB- */
              >
                <button
                  className="nav-link"
                  id={props.buttonIdAvailability}
                  data-bs-toggle="tab"
                  data-bs-target={`#${props.contentIdAvailability}`}
                  type="button"
                  role="tab"
                  aria-controls={props.contentIdAvailability}
                  aria-selected="false"
                >
                  <span className="text-success">Availability</span>
                </button>
              </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
              <div
                className="tab-pane fade show active"
                id={props.contentIdAbout}
                role="tabpanel"
                aria-labelledby={props.buttonIdAbout}
                tabIndex="0"
              >
                <div className="card-body">
                  <div
                    className="bg-black bg-opacity-50 p-3 rounded mt-2" /* -ABOUT TAB CONTENT- */
                  >
                    {" "}
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
              </div>

              <div /* -LOCATION TAB CONTENT- */
                className="tab-pane fade"
                id={props.contentIdLocation}
                role="tabpanel"
                aria-labelledby={props.buttonIdLocation}
                tabIndex="0"
              >
                <div className="card-body">
                  <div className="bg-black bg-opacity-50 p-3 rounded mt-2">
                    <h5 className="card-title text-warning">
                      <i className="fas fa-map-marker-alt text-warning"></i>{" "}
                      Location City{" "}
                    </h5>
                    <p>Address</p>
                  </div>
                </div>
              </div>

              <div /* -AVAILABILITY TAB CONTENT- */
                className="tab-pane fade"
                id={props.contentIdAvailability}
                role="tabpanel"
                aria-labelledby={props.buttonIdAvailability}
                tabIndex="0"
              >
                <div className="card-body container-fluid d-flex flex-column align-items-center justify-content-center">
                  <div className="bg-black bg-opacity-50 p-3 rounded mt-2">
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
    </div>
  );
}

CardStay.propTypes = {
  buttonIdAbout: PropType.string,
  contentIdAbout: PropType.string,

  buttonIdLocation: PropType.string,
  contentIdLocation: PropType.string,

  buttonIdAvailability: PropType.string,
  contentIdAvailability: PropType.string,
};

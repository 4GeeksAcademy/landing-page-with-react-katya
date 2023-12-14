import React from "react";
import PropType from "prop-types";

export default function CardDestionation(props) {
  return (
    <div className="col-lg-3 col-sm-12 col-md-6 g-5">
      <div className="card border-success" style={{ maxWidth: "350px" }}>
        <img
          src={props.imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-success">Destination</h5>
          <p className="card-text text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-success w-75 fw-bold">
              More information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CardDestionation.propTypes = {
  imgUrl: PropType.string,
};


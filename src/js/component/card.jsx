import React from "react";
import PropType from "prop-types";

const image = "https://picsum.photos/300/300";
  

export default function Card(props) {
  return (
    <div className="col-lg-3 col-sm-12 col-md-6">
      <div className="card border-success m-2" style={{ maxWidth: "350px" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-success">Destination City</h5>
          <p className="card-text text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-success w-75">
              Book from <span className="fw-bold">99 $</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgUrl: PropType.string,
};


import React from "react";

export default function Card() {
  return (
    <div
      className="card col-lg-3 col-sm-12 col-md-4 p-0 m-3"
      style={{ maxWidth: "300px" }}
    >
      <img
        src="https://picsum.photos/300/300"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Jumbotron() {
  return (
    <div className="row d-flex align-items-center justify-content-center">
    <div className="col-sm-12 col-lg-10">
      <div className="p-5 m-4 bg-danger rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
      </div></div>
  );
}

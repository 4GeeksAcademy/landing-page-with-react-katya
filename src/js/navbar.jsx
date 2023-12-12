import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <a class="navbar-brand w-75" href="#">
      <img src="https://www.iconpacks.net/icons/2/free-hotel-icon-1808-thumb.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
       Hotels
    </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Stays
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customer Service</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React from "react";

export default function NavTabs() {
  return (
    <ul className="nav nav-tabs mt-3 justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
        <i className="fas fa-globe-asia text-success fs-4"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <i class="fas fa-bed text-success fs-4"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <i class="fas fa-car text-success fs-4"></i>
        </a>
      </li>
    </ul>
  );
}

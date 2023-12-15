import React from "react";
import CardDestination from "./cardDestionation";
import CardStay from "./cardStay";
import CarSearch from "./carSearch";

const imagesDestinations = [
  { url: "https://picsum.photos/id/259/300/300" },
  { url: "https://picsum.photos/id/128/300/300" },
  { url: "https://picsum.photos/id/122/300/300" },
  { url: "https://picsum.photos/id/158/300/300" },
  { url: "https://picsum.photos/id/328/300/300" },
  { url: "https://picsum.photos/id/129/300/300" },
  { url: "https://picsum.photos/id/1083/300/300" },
  { url: "https://picsum.photos/id/193/300/300" },
];

export default function NavTabs() {

  const imagesInHTML = imagesDestinations.map(image => {
    return <CardDestination imgUrl={image.url} />
  });

  return (
    // -TABS-
    <div>
      <ul
        className="nav nav-tabs justify-content-center mt-3"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="destinations-tab"
            data-bs-toggle="tab"
            data-bs-target="#destinations-tab-pane"
            type="button"
            role="tab"
            aria-controls="destinations-tab-pane"
            aria-selected="true"
          >
            <i className="fas fa-globe-asia text-success fs-4"></i>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="stays-tab"
            data-bs-toggle="tab"
            data-bs-target="#stays-tab-pane"
            type="button"
            role="tab"
            aria-controls="stays-tab-pane"
            aria-selected="false"
          >
            <i className="fas fa-bed text-success fs-4"></i>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="carRentals-tab"
            data-bs-toggle="tab"
            data-bs-target="#carRentals-tab-pane"
            type="button"
            role="tab"
            aria-controls="carRentals-tab-pane"
            aria-selected="false"
          >
            <i className="fas fa-car text-success fs-4"></i>
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="destinations-tab-pane"
          role="tabpanel"
          aria-labelledby="destinations-tab"
          tabindex="0"
        >
          <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row">
              {imagesInHTML}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="stays-tab-pane"
          role="tabpanel"
          aria-labelledby="stays-tab"
          tabindex="0"
        >
          <div className="align-items-center justify-content-center">
            <div className="row">
              <CardStay />
              <CardStay />
              <CardStay />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="carRentals-tab-pane"
          role="tabpanel"
          aria-labelledby="carRentals-tab"
          tabindex="0"
        >
          <div className="container-fluid d-flex align-items-center justify-content-center pt-4">
            <div className="row">
              <CarSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

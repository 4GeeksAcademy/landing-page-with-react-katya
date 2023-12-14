import React from "react";
import Card from "./card";

const images = [{url: "https://picsum.photos/id/129/300/300"}, {url: "https://picsum.photos/id/128/300/300"}, {url: "https://picsum.photos/id/122/300/300"}, {url: "https://picsum.photos/id/117/300/300"}, {url: "https://picsum.photos/id/84/300/300"}, {url: "https://picsum.photos/id/77/300/300"}, {url: "https://picsum.photos/id/74/300/300"}, {url: "https://picsum.photos/id/71/300/300"}]

export default function NavTabs() {

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
            <i class="fas fa-bed text-success fs-4"></i>
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
            <i class="fas fa-car text-success fs-4"></i>
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
          <div class="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
            <div class="row">
              <Card imgUrl={images[0].url}/>
              <Card imgUrl={images[1].url}/>
              <Card imgUrl={images[2].url}/>
              <Card imgUrl={images[3].url}/>
            </div>
            <div class="row">
              <Card imgUrl={images[4].url}/>
              <Card imgUrl={images[5].url}/>
              <Card imgUrl={images[6].url}/>
              <Card imgUrl={images[7].url}/>
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
          STAYS
        </div>
        <div
          className="tab-pane fade"
          id="carRentals-tab-pane"
          role="tabpanel"
          aria-labelledby="carRentals-tab"
          tabindex="0"
        >
          CAR RENTALS
        </div>
      </div>
    </div>
  );
}

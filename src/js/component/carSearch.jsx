import React from "react";
import CarSearchDateTime from "./carSearchDateTime";
import CarSearchCityOptions from "./carSearchCityOptions";
import CarSearchCompanyOptions from "./carSearchCompanyOptions";

export default function CarSearch() {

  return (
    <div className="col-lg-12">
      <h3 className="text-warning mb-1">Car rentals for any kind of trip</h3>
      <p className="text-muted mb-4">
        Great deals at great prices, from the biggest car rental companies
      </p>

      <form className="row row-cols-lg-auto g-3 align-items-center">
        <CarSearchDateTime
          text="From"
          dateId="inlineFormInputGroupFromDate"
          timeId="inlineFormInputGroupFromTime"
        />
        <CarSearchDateTime
          text="To"
          dateId="inlineFormInputGroupToDate"
          timeId="inlineFormInputGroupToTime"
        />

        <div className="col-12" /* -LOCATION & COMPANY SELECTION- */>
          <CarSearchCityOptions />
          <CarSearchCompanyOptions />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
            />
            <label className="form-check-label" htmlFor="inlineFormCheck">
              Premium
            </label>
          </div>
          <button type="submit" className="btn btn-success mt-2 w-100">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

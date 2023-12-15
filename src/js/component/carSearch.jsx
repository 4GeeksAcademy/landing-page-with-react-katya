import React from "react";

export default function CarSearch() {
  return (
    <div className="col-lg-12">
      <h3 className="text-warning mb-1">Car rentals for any kind of trip</h3>
      <p className="text-muted mb-4">
        Great deals at great prices, from the biggest car rental companies
      </p>

      <form className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-12">
          <label className="visually-hidden" htmlFor="inlineFormInputGroupFromDate">
            dd/mm/yyyy
          </label>
          <div className="input-group">
            <div className="input-group-text">From</div>
            <input
              type="date"
              className="form-control"
              id="inlineFormInputGroupFromDate"
              placeholder="FromDate"
            />
          </div>
          <label className="visually-hidden" htmlFor="inlineFormInputGroupFromTime">
            dd/mm/yyyy
          </label>
          <div className="input-group mt-2">
            <input
              type="time"
              className="form-control"
              id="inlineFormInputGroupFromTime"
              placeholder="FromTime"
            />
          </div>
        </div>

        <div className="col-12">
          <label className="visually-hidden" htmlFor="inlineFormInputGroupToDate">
            dd/mm/yyyy
          </label>
          <div className="input-group">
            <div className="input-group-text">To</div>
            <input
              type="date"
              className="form-control"
              id="inlineFormInputGroupToDate"
              placeholder="ToDate"
            />
          </div>
          <label className="visually-hidden" htmlFor="inlineFormInputGroupToTime">
            dd/mm/yyyy
          </label>
          <div className="input-group mt-2">
            <input
              type="time"
              className="form-control"
              id="inlineFormInputGroupToTime"
              placeholder="ToTime"
            />
          </div>
        </div>

        <div className="col-12">
          <label className="visually-hidden" htmlFor="inlineFormSelectCity">
            Location
          </label>
          <select className="form-select" id="inlineFormSelectCity">
            <option selected>City</option>
            <option value="1">Madrid</option>
            <option value="2">Barcelona</option>
            <option value="3">Sevilla</option>
            <option value="4">San Sebastian</option>
            <option value="5">Malaga</option>
          </select>

          <label className="visually-hidden" htmlFor="inlineFormSelectCompany">
            Car Company
          </label>
          <select className="form-select mt-2" id="inlineFormSelectCompany">
            <option selected>Company</option>
            <option value="1">AVIS</option>
            <option value="2">Hertz</option>
            <option value="3">Centauro</option>
            <option value="4">ClickRent</option>
            <option value="5">GoldCar</option>
          </select>
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

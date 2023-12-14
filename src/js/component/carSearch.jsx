import React from "react";

export default function CarSearch() {
  return (
    <div classNameName="col-lg-12 g-5">
      <form>
        <div className="row mb-3">
          <div className="col-8">
            <label for="priceRange1" className="form-label">
              €
            </label>
            <input type="range" className="form-range" id="priceRange1" />
          </div>
        </div>
        <fieldset className="row mb-3">
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="gridRadios1">
                First radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" for="gridRadios2">
                Second radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
              />
              <label className="form-check-label" for="gridRadios3">
                Third radio
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck2"
              />
              <label className="form-check-label" for="gridCheck2">
                Example checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck3"
              />
              <label className="form-check-label" for="gridCheck3">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

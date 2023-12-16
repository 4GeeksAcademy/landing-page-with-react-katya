import React from "react";

const companyOptions = [
    { option: "AVIS" },
    { option: "Hertz" },
    { option: "Centauro" },
    { option: "ClickRent" },
    { option: "GoldCar" },
  ];

  export default function CarSearchCompanyOptions() {

    const companyOptionsInHTML = companyOptions.map((company, index) => {
        return <option key={index} value={index}>{company.option}</option>
    });

    return (
        <div>
            <label className="visually-hidden" htmlFor="inlineFormSelectCompany">
            Car Company
          </label>
          <select className="form-select mt-2" id="inlineFormSelectCompany">
            {companyOptionsInHTML}
          </select>
        </div>
    );
  };
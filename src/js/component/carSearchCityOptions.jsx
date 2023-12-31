import React from "react";

const cityOptions = [
    { option: "Madrid" },
    { option: "Sevilla" },
    { option: "Barcelona" },
    { option: "Malaga" },
    { option: "Marbella" },
    { option: "Cáceres" },
    { option: "San Sebastian" },
    { option: "Oviedo" },
  ];

export default function CarSearchCityOptions() {

    const cityOptionsInHTML = cityOptions.map((city, index) => {
        return <option key={index} value={index}>{city.option}</option>
      });

    return (
        <div>
            <label className="visually-hidden" htmlFor="inlineFormSelectCity">
                Location
            </label>
            <select
                className="form-select"
                id="inlineFormSelectCity"
            >
              {cityOptionsInHTML}
            </select>
        </div>
    );
};

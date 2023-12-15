import React from "react";

const cityOptions = [
    { option: "Madrid" },
    { option: "Madrid" },
    { option: "Madrid" },
    { option: "Madrid" },
    { option: "Madrid" },
    { option: "Madrid" },
    { option: "Madrid" },
    { option: "Madrid" },
  ];

export default function CarSearchCityOptions() {

    const cityOptionsInHTML = cityOptions.map((city, index) => {
        return <option value={index}>{city.option}</option>
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

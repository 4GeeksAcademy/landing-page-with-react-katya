import React from "react";
import PropType from "prop-types";

export default function CarSearchDateTime(props) {
    return (
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor={props.dateId}
          >
            dd/mm/yyyy
          </label>
          <div className="input-group">
            <div className="input-group-text">{props.text}</div>
            <input
              type="date"
              className="form-control"
              id={props.dateId}
              placeholder="FromDate"
            />
          </div>
          <label
            className="visually-hidden"
            htmlFor={props.timeId}
          >
            hh/mm
          </label>
          <div className="input-group mt-2">
            <input
              type="time"
              className="form-control"
              id={props.timeId}
              placeholder="FromTime"
            />
          </div>
        </div>
    );
};

CarSearchDateTime.propTypes = {
    text: PropType.string,
    dateId: PropType.string,
    timeId: PropType.string
};
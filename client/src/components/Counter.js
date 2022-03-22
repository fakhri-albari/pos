import React from "react";

export default function Counter({
  number,
  limit,
  minNumber,
  addNumber,
  minDisabled,
  addDisabled,
}) {
  return (
    <div className="d-flex">
      <div className="d-flex w-100">
        <h3 className="w-100 my-auto">
          {number}/{limit}
        </h3>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className={"btn btn-outline-dark me-2 " + minDisabled}
          onClick={minNumber}
        >
          Min
        </button>
        <button
          className={"btn btn-outline-dark " + addDisabled}
          onClick={addNumber}
        >
          Add
        </button>
      </div>
    </div>
  );
}

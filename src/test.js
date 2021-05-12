import React from "react";

const Test = ({ params }) => {
  return (
    <button
      type="button"
      className="filter-btn"
      onClick={() => params("hello")}
    >
      click
    </button>
  );
};

export default Test;

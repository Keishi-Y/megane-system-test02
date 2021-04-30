import React from "react";

const FilterForm = ({ handleFilterList, searchTitle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-3">
      <span>{searchTitle}</span>
      <form className="d-inline" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={handleFilterList} />
      </form>
    </div>
  );
};

export default FilterForm;

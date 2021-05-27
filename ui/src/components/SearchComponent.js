/* eslint-disable react/prop-types */
import React from "react";

const SearchComponent = (props) => {

  const searchData = (value) => {
    console.log("Search text:",value)
    let computedRows = props.defaultRows;

    if(value == "")
      props.setRows(props.defaultRows)
    else {
      computedRows = computedRows.filter(
        data =>
        data.name.toLowerCase().includes(value.toLowerCase()) ||
        data.email.toLowerCase().includes(value.toLowerCase()) ||
        data.phoneNumber.includes(value)
      );
      props.setRows(computedRows)
    }
    console.log("Filtered data ",computedRows)
  }

  const handleChange = (evt) => {
    searchData(evt.target.value)
  };

  const handleClick = (evt) => {
    props.setRows(props.defaultRows)
    evt.target.value = ""; 
  }

  return (
    <>
      <div className="search-div">
        <input
          className="search-input"
          placeholder="Search"
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default SearchComponent
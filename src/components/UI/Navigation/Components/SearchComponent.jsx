import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchComponent() {
  return (
    <div className="header-main__search">
      <input
        type="text"
        placeholder="Search for items and brands"
        className=""
      />
      <span>
        <CiSearch />
      </span>
    </div>
  );
}

export default SearchComponent;
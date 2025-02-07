import React from "react";
import { SearchBox } from "react-instantsearch";

const SearchBar = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <SearchBox className="w-full" placeholder="Search for products..." />
    </div>
  );
};

export default SearchBar;

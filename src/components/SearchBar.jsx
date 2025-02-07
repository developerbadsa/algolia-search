import React from "react";
import { SearchBox } from "react-instantsearch";

const SearchBar = () => {
  return (
    <div className="p-4 flex items-center gap-2">
      <SearchBox
      onChange={(event) => console.log("Search Query:", event.currentTarget.value)}
        classNames={{
          root: "w-full flex items-center justify-center bg-gray-200 rounded-full px-4 py-2",
          form: "flex justify-center items-center border border-gray-300  p-1  rounded-full",
          input:
            "w-full bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 text-lg placeholder-gray-400 px-3",
          submit: "hidden", // Hide default search icon
          reset: "hidden", // Hide default reset button
        }}
        placeholder="🔍 Search for products..."
      />
    </div>
  );
};

export default SearchBar;

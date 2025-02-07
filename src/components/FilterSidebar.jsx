import React from "react";
import { RefinementList } from "react-instantsearch";

const FilterSidebar = () => {
  return (
    <aside className=" p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-5 border-b pb-2">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-700 mb-3">Category</h4>
        <RefinementList 
          attribute="category"  
          classNames={{
            root: "space-y-2",
            item: "flex  gap-12 text-gray-600 hover:text-blue-500",
            label: "flex item-center gap-2 cursor-pointer",
            checkbox: "w-4 item-center text-blue-600 rounded focus:ring-blue-500 ",
            count: 'hidden',
          }}
        />
      </div>
      
    </aside>
  );
};

export default FilterSidebar;

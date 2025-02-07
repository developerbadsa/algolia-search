import React from "react";
import { InstantSearch } from "react-instantsearch";
import searchClient from "../utils/algoliaClient";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import FilterSidebar from "../components/FilterSidebar";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl gap-3 font-extrabold text-gray-800 flex justify-center align-middle items-center">
          <span className="mt-2">
            <FaMagnifyingGlass className="text-2xl" />
          </span>{" "}
          Algolia Instant Search
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Search and filter products with ease.
        </p>
      </div>

      {/* InstantSearch Wrapper */}
      <InstantSearch searchClient={searchClient} indexName="products">
        {/* Search Bar Section */}
        <div className="">
          <SearchBar />
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto mt-8 flex gap-6">
          {/* Sidebar */}
          <div className="w-1/4 bg-white p-5 rounded-xl shadow-md border border-gray-200">
            <FilterSidebar />
          </div>

          {/* Search Results Section */}
          <div className="w-3/4 p-5 bg-white rounded-xl shadow-md border border-gray-200">
            <SearchResults />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default Home;

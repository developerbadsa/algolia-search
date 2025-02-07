import React from "react";
import { InstantSearch } from "react-instantsearch";
import searchClient from "../utils/algoliaClient";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import FilterSidebar from "../components/FilterSidebar";
import PaginationControls from "../components/PaginationControls";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Algolia Search</h1>
      <InstantSearch searchClient={searchClient} indexName="products">
        <SearchBar />
        <div className="flex w-full max-w-6xl">
          <FilterSidebar />
          <div className="w-3/4 p-4">
            <SearchResults />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default Home;

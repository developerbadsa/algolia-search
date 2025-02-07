import { Hits } from "react-instantsearch";
import Results from "./Results";
import Hit from "./Hit";

const SearchResults = () => {
  return (
    <Results>
      <div className="
       mt-6">
        <Hits classNames={{
          list: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
        }} hitComponent={Hit} />
      </div>
    </Results>
  );
};

export default SearchResults;

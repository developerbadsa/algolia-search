
import { Hits } from "react-instantsearch";


const Hit = ({ hit }) => {

  console.log(hit)

  return(
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{hit.title}</h3>
      <p className="text-gray-600">{hit.description}</p>
      <strong className="text-blue-600">Price: ${hit.price}</strong>
    </div>
  )
};

const SearchResults = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <Hits hitComponent={Hit} />
    </div>
  );
};

export default SearchResults;

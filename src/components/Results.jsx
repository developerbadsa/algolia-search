import { useInstantSearch } from "react-instantsearch";

const Results = ({ children }) => {
  const { results } = useInstantSearch();
  if (results?.nbHits === 0) {
    return (
      <div className="text-center p-5">
        <p className="text-lg text-gray-700">
          No results found for "<strong>{results.query}</strong>".
        </p>
        <p className="text-gray-500">
          Please try adjusting your search terms or filters.
        </p>
      </div>
    );
  }

  return children;
};

export default Results;

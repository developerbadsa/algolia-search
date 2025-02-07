import { useInstantSearch } from "react-instantsearch";

const Results = ({ children }) => {
  const { results, status } = useInstantSearch();

  if (status === "loading") {
    return <p className="text-center text-gray-500">Loading results...</p>;
  }

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

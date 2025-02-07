import {liteClient as algoliasearch} from "algoliasearch/lite";

console.log('sec code' , import.meta.env.VITE_ALGOLIA_APP_ID)




const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY
);

const customSearchClient = {
  ...searchClient,
  search(requests) {
    if (!requests || requests.length === 0) {
      console.warn("❌ Preventing unnecessary search request");
      return Promise.resolve({ results: [] });
    }
    return searchClient.search(requests);
  },
};

export default searchClient;

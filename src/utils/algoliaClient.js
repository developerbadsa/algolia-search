import {liteClient as algoliasearch} from "algoliasearch/lite";

console.log('sec code' , import.meta.env.VITE_ALGOLIA_APP_ID)




const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY
);



export default searchClient;

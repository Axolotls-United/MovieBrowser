import React, { useState } from "react";

import SearchBar from "../components/SearchBar.jsx";
import MovieContainer from "../containers/MovieContainer.jsx";

const Home = () => {
  // STATE 
  // const [listSearches, setListSearches] = useState([]);

  return (
    <div>
      <SearchBar/>
      <MovieContainer/>
    </div>
  )
}

export default Home;
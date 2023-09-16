import React from "react";

import SearchBar from "../components/SearchBar.jsx";
import MovieContainer from "../containers/MovieContainer.jsx";

const Home = () => {
  return (
    <div>
      <SearchBar/>
      <MovieContainer/>
    </div>
  )
}

export default Home;
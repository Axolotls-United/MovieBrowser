import React from "react";
import MovieComponent from "../components/MovieComponent.jsx";

const MovieContainer = () => {
  // access moviesList state variable
  const movie1 = {
    title: "Pirates of the Carribbean 1"
  }
  const movie2 = {
    title: "Lord of the Rings 1"
  }
  const movie3 = {
    title: "Oppenheimer"
  }
  const moviesList = [movie1, movie2, movie3];
  const outputArray = [];
  for(const movie of moviesList) {
    outputArray.push(<MovieComponent key={crypto.randomUUID()} title={movie.title}/>);
  }

  return (
    <div>
      {outputArray}
    </div>
  )
}

export default MovieContainer;
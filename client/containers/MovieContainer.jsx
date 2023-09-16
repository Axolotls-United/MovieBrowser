import React from "react";
import MovieComponent from "../components/MovieComponent.jsx";
import { useSelector } from "react-redux";

const MovieContainer = (props) => {
  // access moviesList state variable
  
  // const movie1 = {
  //   title: "Pirates of the Carribbean 1"
  // }
  // const movie2 = {
  //   title: "Lord of the Rings 1"
  // }
  // const movie3 = {
  //   title: "Oppenheimer"
  // }

  const moviesList = useSelector(state => state.searches.moviesList)

  
  
  // const moviesList = [movie1, movie2, movie3];
  
  // const outputArray = [];
  // for(const movie of moviesList) {
  //   outputArray.push(<MovieComponent key={crypto.randomUUID()} title={movie.title}/>);
  // }


  return (
    <div>
      {moviesList.map(movie => <MovieComponent key={crypto.randomUUID()} title={movie.Title} image={movie.Poster}/>)}
    </div>
  )
}

export default MovieContainer;
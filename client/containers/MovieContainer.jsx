import React from "react";
import MovieComponent from "../components/MovieComponent.jsx";
import { useSelector } from "react-redux";

const MovieContainer = (props) => {

  const moviesList = useSelector(state => state.searches.moviesList)


  return (
    <div className="movie-list-container">
      {moviesList.map(movie => <MovieComponent key={crypto.randomUUID()} title={movie.Title} image={movie.Poster} imdbId ={movie.imdbId}/>)}
    </div>
  )
}

export default MovieContainer;
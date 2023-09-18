import React from "react";
import MovieComponent from "../components/MovieComponent.jsx";
import { useDispatch, useSelector } from "react-redux";

import '../components/styles.css';

const MovieContainer = (props) => {
  // const dispatch = useDispatch();
  const moviesList = useSelector(state => state.searches.moviesList);

  // async function getPlot(id) {
  //   const movie = await fetch(`http://www.omdbapi.com/?apikey=d20b14af&i=${id}`)
  //     .then(data => data.json());
  //   console.log('this is the movie plot', movie.Plot);
  //   return movie.Plot;
  // }

  // const output = [];

  // for (const movie of moviesList) {
  //   const plot = getPlot(movie.imdbID);
  //   output.push(<MovieComponent key={crypto.randomUUID()} title={movie.Title} image={movie.Poster} imdbID ={movie.imdbID} plot={plot}/>)
  // }


  return (
    <div className="movie-list-container">
      {moviesList === undefined
      ? 
      <h1>No Search Results</h1>
      :
      moviesList.map(movie => {
        return <MovieComponent key={crypto.randomUUID()} title={movie.Title} image={movie.Poster} imdbID ={movie.imdbID}/>
      })
      }
    </div>
  )
}

export default MovieContainer;
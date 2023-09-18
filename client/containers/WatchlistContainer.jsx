import React from "react";
// import MovieComponent from "../components/MovieComponent.jsx";

import WatchlistComponent from "../components/WatchlistComponent.jsx";

import { useSelector } from "react-redux";
import { deleteWatchList } from '../reducers/userSlice.js'

const WatchlistContainer = (props) => {

  const watchList = useSelector(state => state.users.watchList)


  return (
    <div className="watchlist-container">
      {watchList.map(movie => 
        <WatchlistComponent 
          key={crypto.randomUUID()} 
          deleteWatchList={deleteWatchList}
          username={props.username} 
          title={movie.title} 
          image={movie.image}
        />)}
    </div>
  )
}

export default WatchlistContainer;
import React from "react";
import FavoritesContainer from "../containers/FavoritesContainer.jsx";
import WatchlistContainer from "../containers/WatchlistContainer.jsx";
import { useSelector } from 'react-redux';


import './profile.css';


const Profile = () => {
  const username = useSelector(state => state.users.username);
  return (
    <div>
      <h1 className="favorites-title">Favorites </h1>
      <FavoritesContainer username={username}/> 
      <h1 className="watchlist-title">Watchlist</h1>
      <WatchlistContainer username={username}/>
    </div>
  )
}

export default Profile;
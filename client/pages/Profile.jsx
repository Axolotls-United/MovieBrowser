import React from "react";
import FavoritesContainer from "../containers/FavoritesContainer.jsx";
import WatchlistContainer from "../containers/WatchlistContainer.jsx";
import { useSelector } from 'react-redux';

const Profile = () => {
  const username = useSelector(state => state.users.username);
  return (
    <div>
      <FavoritesContainer username={username}/> 
      <WatchlistContainer username={username}/>
    </div>
  )
}

export default Profile;
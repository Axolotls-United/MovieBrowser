import React from "react";
import FavoritesContainer from "../containers/FavoritesContainer.jsx";
import WatchlistContainer from "../containers/WatchlistContainer.jsx";

const Profile = () => {
  return (
    <div>
      <FavoritesContainer/> 
      <WatchlistContainer/>
    </div>
  )
}

export default Profile;
import React from "react";
// import MovieComponent from "../components/MovieComponent.jsx";
import { useSelector } from "react-redux";

import FavoritesComponent from "../components/FavoritesComponent.jsx";
import { deleteFavList } from "../reducers/userSlice";

const FavoritesContainer = (props) => {

  const userFavList = useSelector(state => state.users.favList);
  console.log(userFavList);

  return (
    <div className="favorites-list-container">
    
      {userFavList.map(movie => 
        <FavoritesComponent 
          key={crypto.randomUUID()} 
          deleteFavList={deleteFavList}
          username={props.username} 
          title={movie.title} 
          image={movie.image}
        />)}
    </div>
  )
}

export default FavoritesContainer;
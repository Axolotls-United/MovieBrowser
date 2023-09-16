import React from "react";

import {Card, CardFooter, Image, Button} from "@nextui-org/react";


import './styles.css';

import { useDispatch, useSelector } from "react-redux";
import userSlice, { addFavList, addWatchList } from "../reducers/userSlice";


const MovieComponent = (props) => {
  const username = useSelector(state => state.users.username);
  const dispatch = useDispatch();

  
  const movie = {
    title: props.title,
    image: props.image,
    imdbId: props.imdbId
  }

  const body = {
    movie,
    username
  }

  async function favHandler() {
    const favMovie = await fetch('/user/addFavorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(data => data.json());
    dispatch(addFavList(movie));
    console.log(favMovie);
  }

  async function watchHandler() {
    const favMovie = await fetch('/user/addWatch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(data => data.json());
    dispatch(addWatchList(movie));
    console.log(favMovie);
  }


  return (
    <div>
      <h4>{props.title}</h4>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none movie-card"
        >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src={props.image}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        
          
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={favHandler} >
            Favorites
          </Button>

          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick= {watchHandler}>
            Watchlist
          </Button>


        </CardFooter>
      </Card>
    </div>
    
  )
}

export default MovieComponent;
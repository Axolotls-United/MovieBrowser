import React, { useState } from "react";

import {Card, CardFooter, Image, Button} from "@nextui-org/react";


import './styles.css';

import { useDispatch, useSelector } from "react-redux";
import userSlice, { addFavList, addWatchList } from "../reducers/userSlice";


const MovieComponent = (props) => {
  const [plot, setPlot] = useState('');
  const username = useSelector(state => state.users.username);
  const dispatch = useDispatch();

  
  const movie = {
    title: props.title,
    image: props.image,
    imdbID: props.imdbID
  }

  const body = {
    movie,
    username
  }

  async function getPlot(id) {
    const movie = await fetch(`http://www.omdbapi.com/?apikey=d20b14af&i=${id}`)
      .then(data => data.json());
    console.log('this is the movie plot', movie.Plot);
    setPlot(movie.Plot);
  }
  getPlot(props.imdbID);


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
    <div className="flip-card">
      <h4 className="movie-title">{props.title}</h4>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none movie-card "
          >
            <Image
              alt="Woman listing to music"
              className="object-cover image-card"
              // height={200}
              src={props.image}
              // width={200}
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
        <div className="flip-card-back">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none movie-card"
          >
            <p className="plot-text"> {plot}</p>
          
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            
              
              <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={favHandler} >
                Favorites
              </Button>

              <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick= {watchHandler}>
                Watchlist
              </Button>


            </CardFooter>
          </Card>
        </div>
        
      </div>
    </div>
  )
}

export default MovieComponent;
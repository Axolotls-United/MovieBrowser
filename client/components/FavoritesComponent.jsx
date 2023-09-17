import React from "react";

import {Card, CardFooter, Image, Button} from "@nextui-org/react";


import './styles.css';
import { deleteFavList } from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";


const FavoritesComponent = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.users.username);
  async function dispatchRemoveFavorites() {
    const body = {
      username,
      title: props.title
    }
    
    const result = await fetch('/user/deleteFavorite', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(data => data.json());
    console.log(result);
    dispatch(deleteFavList(props.title));
  }

  return (
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none favorites-card"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={200}
      src={props.image}
      width={200}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    
      
      <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={dispatchRemoveFavorites}>
        Remove
      </Button>

    </CardFooter>
  </Card>
  )
}

export default FavoritesComponent;
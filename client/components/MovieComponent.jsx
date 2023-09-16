// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import React from "react";

import {Card, CardFooter, Image, Button} from "@nextui-org/react";



const MovieComponent = (props) => {

  return (
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={200}
      src={props.image}
      width={200}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">Available soon.</p>
      <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        Notify me
      </Button>
    </CardFooter>
  </Card>
  )
}

export default MovieComponent;
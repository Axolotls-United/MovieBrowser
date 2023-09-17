// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import React from "react";


import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, setUser } from "../reducers/userSlice";
import Signup from "./Signup.jsx";
import { Link, useNavigate } from "react-router-dom";

// import {EyeFilledIcon} from "./EyeFilledIcon";
// import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

const Login = () => {
  const username = useSelector(state => state.users.username);
  const password = useSelector(state => state.users.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchUsername = (e) => {
    dispatch(setUsername(e.target.value));
  }

  const dispatchPassword = (e) => {
    dispatch(setPassword(e.target.value));
  }

  async function requestLogin() {
    const user = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(data => data.json());
    dispatch(setUser(user));
    console.log(user);
    redirectProfile();
  }

  const redirectSignup = () => {
    const path = '/signup';
    navigate(path);
  }

  const redirectProfile = () => {
    const path = '/profile';
    navigate(path);
  }

  return (
    <div>
    <Input
      isRequired
      type="username"
      label="Username"
      className="max-w-xs"
      onChange={(e) => dispatchUsername(e)}
    />
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      type= "password"
      className="max-w-xs"
      onChange={(e) => dispatchPassword(e)}
    />
  
    <Button color="primary" onClick={requestLogin}>
      Login
    </Button>
    <Button color="primary" onClick={redirectSignup}>
      Sign Up
    </Button>
    </div>
    
  )
}

export default Login;
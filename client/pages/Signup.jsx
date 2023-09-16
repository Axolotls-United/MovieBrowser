import React from "react";

import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, setUser } from "../reducers/userSlice";
import { useNavigate } from "react-router-dom";

// import {EyeFilledIcon} from "./EyeFilledIcon";
// import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

const Signup = () => {
  const username = useSelector(state => state.users.username);
  const password = useSelector(state => state.users.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectProfile = () => {
    const path = '/profile';
    navigate(path);
  }

  const dispatchUsername = (e) => {
    dispatch(setUsername(e.target.value));
  }

  const dispatchPassword = (e) => {
    dispatch(setPassword(e.target.value));
  }

  async function requestSignup() {
    const user = await fetch('/user/signup', {
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
    redirectProfile();
  }

  return (
    <>
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
    <Button color="primary" onClick={requestSignup}>
      Sign Up
    </Button>
    </>
    
  )
}

export default Signup;
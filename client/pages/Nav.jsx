import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";

import './nav.css';
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../reducers/userSlice";

const Nav = () => {
  const isAuth = useSelector(state => state.users.isAuth);
  const dispatch = useDispatch();

  const dispatchLogout = () => {
    dispatch(logout());
  }

  return (
    <Navbar >
      <NavbarBrand justify="start">
        <p className="font-bold text-inherit">Movie Browser</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link to='/'>Home</Link>
        </NavbarItem>
      </NavbarContent>
    
    {isAuth ? 
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to='/profile'>Profile</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Button color="primary" variant="faded" onClick={dispatchLogout}>Logout</Button>
        </NavbarItem>
      </NavbarContent>
      :
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex" >
          <Link to='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/signup'>Sign Up</Link>
        </NavbarItem>
      </NavbarContent>
    }
    </Navbar>
  )
}

export default Nav;

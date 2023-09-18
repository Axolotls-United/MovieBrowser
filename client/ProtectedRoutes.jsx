import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {

  const isAuth = useSelector(state => state.users.isAuth)

  // if(user.username)

  // prob will need to compare user's username with stored cookie to see if they match
  return isAuth;
}

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes;
import React from 'react';
// import HeaderContainer from './containers/HeaderContainer.jsx';
// import MainContainer from './containers/MainContainer.jsx';
// import { createRoot } = 
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Logout from './pages/Logout.jsx';
import Nav from './pages/Nav.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes.jsx';


// import Nav from './pages/Nav.jsx';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

const App = () => {

  return(
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/logout' element={<Logout />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
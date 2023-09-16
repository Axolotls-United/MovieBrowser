import React from 'react';
// import HeaderContainer from './containers/HeaderContainer.jsx';
// import MainContainer from './containers/MainContainer.jsx';
// import { createRoot } = 
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Logout from './pages/Logout.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './pages/Nav.jsx';


// import Nav from './pages/Nav.jsx';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <Link to='profile'></Link>
  //         <Link to='logout'></Link>
  //         <Home />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "profile",
  //     element: <Profile />
  //   },
  //   {
  //     path: "logout",
  //     element: <Logout />
  //   },
  // ]);

  return(
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/logout' element={<Logout />}/>
    </Routes>
    {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
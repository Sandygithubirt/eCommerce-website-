// import React from 'react';
// import { BrowserRouter } from "react-router-dom";
// import Home from './Pages/Home';
// import About from './Pages/About ';
// import Contact from './Pages/Contact ';
// import Menu from './Pages/Menu';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Home/>
//         <About/>
//         <Contact/>
//         <Menu/>
//         </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import Login from "./Component/Login";
import Spotify from "./Component/Spotify";
import { reducerCases } from "./Utils/Constants";
import { useStateProvider } from "./Utils/StateProvider";
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      document.title = "Spotify";
      const tokenValue = hash.substring(1).split("&")[0].split("=")[1];
      if (tokenValue) {
        dispatch({ type: reducerCases.SET_TOKEN, token:tokenValue });
      }
    }
    
  }, [dispatch]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
import React from 'react'
import LandingPage from "./Pages/LandingPage";
import FreeGamePage from "./Pages/FreeGamePage";
import NormalGamePage from "./Pages/NormalGamePage";
import RulesPage from "./Pages/RulesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// BETWEEN HERE AND THE } AFTER ROUTER, I COMMENTED OUT TO HELP ME GET THE GAMEBOARD



// // importing components
import Nav from "./Components/Nav"


// // the main css file
import './App.css';

function App() {

  return (
    // <div className="App">
    //    <Nav/>
    //     <h1>Hello</h1>
    // </div>


    // all the routes
    <Router>
      <Nav />
        <Routes>
          <Route exact path={"/"} element={<LandingPage/>}>
            {/* <LandingPage /> */}
          </Route>
          <Route exact path={"/rules"} element={<RulesPage/>}>
            {/* <RulesPage /> */}
          </Route>
          <Route exact path={"/free-game"} element={<FreeGamePage/>}>
            {/* <FreeGamePage /> */}
          </Route>
          <Route exact path={"/normal-game"} element={<NormalGamePage/>}>
            {/* <NormalGamePage /> */}
          </Route>
        </Routes>
    </Router>
  );
}


// =============================================
// ========Areal's links
/* <head>
<meta charset="utf-8"/>
<!-- Bootstrap requires this meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">
<!-- Bootstrap stylesheet, must be first-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<!-- The following pulls in free icons from Font Awesome-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
<!-- Custom stylesheet. Will override/add to styles in stylesheets loaded earlier-->        
<link href="styles.css" rel="stylesheet"/>       
<title>CS7580 Portfolio</title>
</head> */
/* ============= */ 

// to use hooks /functional components instead of classes
// import React,{useState,useEffect} from 'react';
// for routes in React
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// importing bulma a css framework
// import 'bulma/css/bulma.css'
// importing pages



// import Game from "./Components/Game";

// function App() {
//   return <Game />;
// }

// export default App;


export default App;

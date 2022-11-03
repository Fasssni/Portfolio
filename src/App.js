import React from "react";
import {Route, BrowserRouter, Navigate } from "react-router-dom"
import { Expertise } from "./pages/Expertise";
import { Main } from "./pages/Main";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Main></Main>
          <Expertise></Expertise>
         
      

     
      
      
      </BrowserRouter>
       

       
    </div>
  );
}

export default App;

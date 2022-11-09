import React from "react";
import {Route, BrowserRouter, Navigate,Routes} from "react-router-dom"
import { About } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Main } from "./pages/Main";
import Projects from "./pages/Projects";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <div className="index">
      <Main></Main>
      <Expertise></Expertise>
      <Projects></Projects>
      </div>


      <About></About>
      
         
      
       

       
    </div>
  );
}

export default App;

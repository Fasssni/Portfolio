import React from "react";
import {Route, BrowserRouter, Navigate,Routes} from "react-router-dom"
import { Expertise } from "./pages/Expertise";
import { Main } from "./pages/Main";
import Projects from "./pages/Projects";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main></Main>
      <Expertise></Expertise>
      <Projects></Projects>
      
         
      <Routes>

      
  
          
              
      

      </Routes>
         
      

     
      
      
      </BrowserRouter>
       

       
    </div>
  );
}

export default App;

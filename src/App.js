import React from "react";
import {Route, BrowserRouter, Navigate,Routes} from "react-router-dom"
import { Chat } from "./Chat";
import { About } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Main } from "./pages/Main";
import Projects from "./pages/Projects";
import "./styles.css"

function App() {

  

  return (
    <div className="App">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7704C0E390"></script>
    
      
      <div className="index">
      <Main></Main>
      <Expertise></Expertise>
      <Projects></Projects>
      </div>
      <Chat/>

      <About></About>
      
         
      
       

       
    </div>
  );
}

export default App;

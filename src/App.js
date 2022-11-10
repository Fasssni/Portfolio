import React from "react";
import {Route, BrowserRouter, Navigate,Routes} from "react-router-dom"
import { About } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Main } from "./pages/Main";
import Projects from "./pages/Projects";
import "./styles.css"

function App() {

  let dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7704C0E390');



   
  gtag();

  return (
    <div className="App">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7704C0E390"></script>
    
      
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

import React, { useState } from "react";
import cl from "./modules/Main.module.css"
import img from "../assets/header-img.svg"
import { NavBar } from "../components/NavBar";
import { Switcher } from "../components/Switcher/Switcher";
import { useSelector } from "react-redux";
import img1 from '../assets/kag.jpg'



export const Main=()=>{

    const theme=useSelector(state=>state.theme.themed)


    

    const [isHovered,setIsHovered]=useState(false)
    const [isWatched, setIsWatched]=useState(false)

    const current_theme={
        background_right:"hsl(274, 4%, 16%)",
        background_left:"hsl(316, 30%, 36%)",
        color:"white",

    }

    const switched_theme={ 
        background_right:"hsl(164, 61%, 65%)",
        background_left:"white",
        color:"hsl(0, 0%, 25%)",

    }
    
    

    return(
        <div className={cl.main}>
            <div className={cl.left} style={{background:theme?`${switched_theme.background_left}`:`${current_theme.background_left}`}}>
                <h3 className={cl.logo} style={{color:theme?`${switched_theme.color}`:`${current_theme.color}`}}>
                    insaf
                </h3>
                <div className={cl.img2} 
                        onMouseOut={()=>setIsWatched(false)} 
                        onMouseOver={()=>setIsWatched(true)}
                      >
                <img  className={isWatched?cl.img_hovered:cl.img} src={img} style={{position:"relative"}}
                        ></img>
                </div> 
            </div> 
            
            <div style={{background:theme?`${switched_theme.background_right}`:`${current_theme.background_right}`}}className={cl.right}>
                <NavBar  ></NavBar>
                
                <h3 className={cl.greetings} style={{color:theme?`${switched_theme.color}`:`${current_theme.color}`}}>
                    {"Hi!I'm Insaf. I'm into front-development,"} 
                    <span className={cl.interact}
                           onMouseOut={()=>setIsWatched(false)} 
                           onMouseOver={()=>setIsWatched(true)}>
                    {"exploring"} </span>
                    {"and"} <span className={cl.interact}>
                    
                    </span> <span onMouseOut={()=>setIsHovered(false)} 
                                  onMouseOver={()=>setIsHovered(true)} 
                                  className={cl.interact}>
                    {"making cool things."}</span>

                    
                    
                    
                    {isHovered?
                    <span  className={cl.hover}>💡</span>
                    :
                    <></>}
                </h3>

               
                

            </div>



        </div> 
    )
}
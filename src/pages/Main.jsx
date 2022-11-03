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
    
    

    return(
        <div className={cl.main}>
            <div className={cl.left}>
                <h3 className={cl.logo}>
                    insaf
                </h3>
                <img  className={isWatched?cl.img_hovered:cl.img} src={img} style={{position:"absolute"}}
                        onMouseOut={()=>setIsWatched(false)} 
                        onMouseOver={()=>setIsWatched(true)}></img>
            </div> 
            
            <div className={cl.right}>
                <NavBar ></NavBar>
                
                <h3 className={cl.greetings}>
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
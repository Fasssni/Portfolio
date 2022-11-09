import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./NavBar.module.css"
import { Switcher } from "./Switcher/Switcher";
import axios from "axios";
import img2 from "../assets/2023236.svg"


export const NavBar=()=>{

    const menu=[{name:"expertise",to:"#expertise"},{name:"projects",to:"#projects"},{name:" about",to:"#about"}]
    const dispatch=useDispatch()

    const theme=useSelector(state=>state.theme.themed)
    const [them, setThem]=useState(false)

    const changeTheme=()=>{ 
        return(
        dispatch({type:"SWITCH_THEME"}))
       
    }

    useEffect(()=>{
        
            
          
       
           
        
        
    },[theme])
    console.log(theme)
    
    


     return( 
        <div className={cl.main}> 
    
        <ul className={theme?cl.ul_updated:cl.ul}>
            {menu.map((p)=>
            <p key={p.name} ><a className={cl.li} href={p.to}>{p.name}</a></p> 
            )}
            <Switcher changeTheme={changeTheme}></Switcher>
            {/* <img src={img2} fill="orange" className={cl.sun}></img> */}
        </ul>
        
        

        </div>
     )
}
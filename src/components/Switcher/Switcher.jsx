import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./Switcher.module.css"

export const Switcher=({changeTheme})=>{ 

    
    
   

    return( 
        <div class = {cl.toggle_switch} >
           
            <label className={cl.label} >
                <input className={cl.input} type = 'checkbox'/>
                <span class = {cl.slider} onClick={changeTheme}></span>
            </label>
            <a className={cl.a}href = 'https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y'>
               
            </a>
        </div>
        )
}
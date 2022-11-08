import React, { useState } from "react";
import cl from "./PForm.module.css" 

import img2 from "../../assets/arrow.svg"
import { useSelector } from "react-redux";

export const PForm=({p})=>{

   const [isClicked, setIsClicked]=useState(false)
     
    return( 
        <div className={cl.main}>
            <div className={cl.head}>
                <div className={cl.circles}></div>
                <div className={cl.circles}></div>
                <div className={cl.circles}></div>
            </div>
            <img className={cl.img} src={p.img}>
            </img> 
            <div className={cl.footer}>
                
                
             <a className={cl.link} target="_blank"href={p.link}>See The Web</a>



                <img onClick={()=>setIsClicked(!isClicked)}

                       className={isClicked?cl.arrow_clicked:cl.arrow} src={img2}>
                </img> 
            </div>
            
         
             <div className={isClicked?cl.desc:cl.desc_none}>
             <label className={cl.label}>The Stack used:</label>
            <ul className={cl.ul}>
                {p.stack.map((x)=>
                <li className={cl.li}>{x}</li>
                )}
                
            
               
            </ul>
            {!p.note ?<></>:<h3 className={cl.notion}>Note:{p.note}</h3>}
            </div>
            

        
        </div> 
    )
}
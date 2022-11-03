import React, { useState } from "react";
import cl from "./MyForm.module.css"


export const MyForm=()=>{
    
    let key=1;
    const [text, setText]=useState()
    const [info, setInfo]=useState([{tech:"React"}, {tech:"Redux"}, {tech:"Router"}, {tech:"Axios"}])
    const [cursor, setCursor]=useState(true)

    
    

    return(    
        
        
                <div className={cl.form} onClick={()=>setCursor(false)}>

                  <div className={cl.top}>
                     <div className={cl.logo}></div>
                     <div className={cl.sep}></div> 
                  </div>
                  <div contenteditable="true"   type="textarea" onChange={(e)=>setText(e.target.value)}Cols="5"className={cl.input} >
                    <p className={cl.code}>&lt;body&gt;</p> 
                  {info.map((p)=> 
                    <p className={cl.code}>
                            <span className={cl.num}>{key++}.
                            </span>{p.tech}
                     </p>)}

                 <p className={cl.code}>&lt;/body&gt;
                  
                  {cursor?<span className={cl.curs}>|</span>:
                  <></>}
                  
                  </p> 
                
                  </div>
                    
                </div>

         
    )
}
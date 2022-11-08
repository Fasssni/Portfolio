import React, { useEffect, useState } from "react";
import cl from "./MyForm.module.css"


export const MyForm=({p})=>{

 

   let key=0;
    
    const [count,setCount]=useState(0)
    const [text, setText]=useState()
   
    const [cursor, setCursor]=useState(true)
    let n=0
  
   
    useEffect(()=>{ 
      n=key
     

    }, [key])

    console.log(p)
    
    

    return(    
        
        
                <div className={cl.form} onClick={()=>setCursor(false)}>

                  <div className={cl.top}>
                     <div className={cl.logo}>
                      <img  className={cl.img}src={p.svg}></img>
                     </div>
                     <div className={cl.sep}></div> 
                  </div>

                  
                  <div contenteditable="true"   type="textarea" onChange={(e)=>setText(e.target.value)}Cols="5"className={cl.input} >
                   
                    <p className={cl.tag} style={{color:`${p.color}`}}>{p.before}</p> 
                  {p.main?.map((e)=> 
                    <p key={key++} className={cl.code} style={{color:`${p.color}`}}>
                            <span className={cl.num}>{p.main.indexOf(e)+1}.
                            </span>{e.tech}
                     </p>)}

                 <p className={cl.tag} style={{color:`${p.color}`}}>{p.after}
                  
                  {cursor?<span className={cl.curs}>|</span>:
                  <></>}
                  
                  </p>
                
                  </div>
                    
                </div>

         
    )
}
import React from "react";
import { MyForm } from "../components/MyForm/MyForm";
import cl from "./modules/Expertise.module.css"


export const Expertise=()=>{

    return( 
        <div className={cl.main}>
            <h2 className={cl.head}>Expertice</h2>
            
            <div className={cl.content}>
                <MyForm></MyForm>
                <MyForm></MyForm>
                <MyForm></MyForm>
            </div>

        </div>
    )
}
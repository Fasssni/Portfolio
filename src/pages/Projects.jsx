import React, { memo } from "react";
import { PForm } from "../components/PForm/PForm";
import cl from "./modules/Projects.module.css"
import img1 from "../assets/auto.PNG"
import img2 from  "../assets/port.PNG"
import img3 from  "../assets/weather.PNG"
import img4 from  "../assets/note.PNG"
import { useSelector } from "react-redux";


const Projects=()=>{ 

    const theme=useSelector(state=>state.theme.themed)

    const projects=[
                    {stack:["React","Redux","React Hooks","React-router", "Axios", "Node.js","Express","postgreSQL"],
                    link:"https://graceful-phoenix-e29f91.netlify.app/about",
                    git:"https://github.com/Fasssni/The-complex-online-store",
                    note:"currently the back-end side is undeployed, there's only the client side you can view. All the functionalities and features are on though.",
                    img:img1},

                    {stack:["React","Redux","React Hooks","React-router", "Responsive CSS"],
                    link:"https://insafcodes.netlify.app",
                    git:"https://github.com/Fasssni/Portfolio",
                    note:"",
                    img:img2},

                    {stack:["React","React Hooks", "Firebase","Local Storage","Custom Hooks"],
                    link:"https://wmanup.netlify.app",
                    git:"https://github.com/Fasssni/ToDo-test",
                    note:"",
                    img:img4},

                    {stack:["React","React Hooks", "Axios", "REST-API"],
                    link:"https://vermillion-sundae-aa691c.netlify.app",
                    git:"https://github.com/Fasssni/Weather-App",
                    note:"",
                    img:img3},

                   

                    

    ]

    return( 
        <div className={cl.main} style={{background:theme?"hsl(55, 100%, 94%)":'hsl(257, 8%, 18%)'}}id="projects">
        <header>
            <h2 className={cl.name} style={{color:theme?'hsl(257, 8%, 18%)':"white"}}>Projects</h2>
        </header>
        <div className={cl.projects}>
            { projects.map((p)=>
            <PForm p={p}></PForm>)
            }
        </div>
        <div style={{height:"1px", width:"100%",marginBottom:"0"}} id="about"></div>

        </div>
    )
}

export default memo(Projects)
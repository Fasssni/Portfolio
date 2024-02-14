import React, { useContext } from "react";
import Svgs from "../assets/svgs";
import { MyForm } from "../components/MyForm/MyForm";
import cl from "./modules/Expertise.module.css";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/j.svg";
import { useSelector } from "react-redux";

export const Expertise = () => {
  const svg = new Svgs();

  let key = 0;

  const info = [
    {
      main: [
        { tech: "React" },
        { tech: "Redux/RTK" },
        { tech: "TypeScript" },
        { tech: "Axios" },
        { tech: "REST-API" },
        { tech: "SCSS/SASS" },
        { tech: "Bootstrap" },
        { tech: "Tailwind" },
      ],
      color: "rgb(73, 226, 73",
      before: "<body>",
      after: "</body>",
      svg: js,
      title: "",
    },
    {
      main: [
        { tech: "Node.js" },
        { tech: "Express" },
        { tech: "SQL (Postgres)" },
        { tech: "Next.js" },
      ],
      color: "yellow",
      before: "import React from'react'",
      after: "func()",
      svg: css,
      title: "",
    },

    {
      main: [
        { tech: "Git" },
        { tech: "Figma" },
        { tech: "Python" },
        { tech: "English:fluent" },
        { tech: "Russian:fluent" },
      ],
      before: "git init",
      after: "git push",
      svg: html,
      title: "additional",

      color: "white",
    },
  ];

  const theme = useSelector((state) => state.theme.themed);

  return (
    <div className={theme ? cl.main_themed : cl.main} id="expertise">
      <h2 className={cl.head} style={{ color: theme ? "black" : "white" }}>
        Expertise
      </h2>

      <div className={cl.content}>
        {info.map((p) => (
          <MyForm key={key++} p={p}></MyForm>
        ))}
      </div>
    </div>
  );
};

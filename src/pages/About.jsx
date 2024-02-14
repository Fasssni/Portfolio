import React from "react";
import { useSelector } from "react-redux";
import cl from "./modules/About.module.css";
import pic from "../assets/sticker.webp";
import { useState } from "react";
import git from "../assets/git.svg";
import tg from "../assets/tg.svg";

export const About = () => {
  const theme = useSelector((state) => state.theme.themed);
  const [isMoved, setIsMoved] = useState(false);

  const [isClipBoard, setIsClipBoard] = useState(false);

  const toCopy = () => {
    setIsClipBoard(true);
    navigator.clipboard.writeText(SM[0].link);
    setTimeout(() => {
      setIsClipBoard(false);
    }, 3000);
  };

  const SM = [
    {
      name: "TG",
      img: tg,
      link: "@zafgasbra",
    },
    { name: "Git", img: git, link: "https://github.com/Fasssni" },
  ];

  return (
    <div
      className={cl.main}
      onMouseOver={() => setIsMoved(true)}
      style={{ background: theme ? "hsl(164, 61%, 65%)" : "rgb(119, 64, 105)" }}
    >
      <div className={cl.box} style={{ background: "#28292c" }}>
        <div className={cl.call}>
          <h3 style={{ color: "white" }}>
            I'm available for a hire! Hit me up
          </h3>

          <h3 className={cl.text2}>
            at my e-mail-
            <span className={cl.email}>@sadikovinsaf99@gmail.com</span>
          </h3>

          <h3 className={cl.text2}>or other social media:</h3>

          <div className={cl.media}>
            <a className={cl.ic}>
              <img className={cl.ic} onClick={toCopy} src={SM[0].img}></img>
            </a>

            <a className={cl.ic} target="_blank" href={SM[1].link}>
              <img className={cl.ic} src={SM[1].img}></img>
            </a>
          </div>
          <div className={isClipBoard ? cl.clip : cl.clip_passive}>
            <p className={cl.clip_text}>
              {SM[0].link} is copied to the clipboard
            </p>
          </div>
        </div>
        <div
          className={cl.curve_box}
          style={{
            background: theme ? "hsl(164, 61%, 65%)" : "rgb(119, 64, 105)",
          }}
        >
          <img className={cl.pic} src={pic}></img>
        </div>
      </div>
    </div>
  );
};

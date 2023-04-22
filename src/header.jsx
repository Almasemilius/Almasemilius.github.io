import React from "react";
import Twitter from "./assets/svgs/twitter";
import Github from "./assets/svgs/github";
import LinkedIn from "./assets/svgs/linkedIn";
import Instagram from "./assets/svgs/instagram";
import ArrowDown from "./assets/svgs/arrowDown";

export default function Header(props) {
  return (
    <div className="h-screen w-full bg-default flex justify-center items-center relative">
      <div className="w-3/4 lg:w-1/3 space-y-10">
        <div className="h-20 border-2 border-secondary flex items-center justify-center text-3xl lg:text-5xl">
            <span>Almas Emilius</span>
        </div>
        <div className="text-xl lg:text-2xl">
          <p>I am a web developer.</p>
        </div>
        <div onClick={() => props.scrollToSection(1)} className="absolute bottom-7 left-0 right-0 w-20 h-10 mx-auto">
          <ArrowDown />
        </div>
      </div>
      <div className="fixed right-5 lg:flex flex-col gap-5 w-14 hidden">
        <a href="https://github.com/Almasemilius">
          <Github classes="anime"/>
        </a>
        <a href="https://www.linkedin.com/in/almas-m-bb4469b8">
          <LinkedIn classes="anime"/>
        </a>
        <a href="https://twitter.com/almasemilius">
          <Twitter classes="anime"/>
        </a>
        <a href="https://www.instagram.com/almas_emilius/">
          <Instagram classes="anime"/>
        </a>
      </div>
    </div>
  );
}

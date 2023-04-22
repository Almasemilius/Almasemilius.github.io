import React from "react";
import Github from "./assets/svgs/github";
import LinkedIn from "./assets/svgs/linkedIn";
import Twitter from "./assets/svgs/twitter";
import Instagram from "./assets/svgs/instagram";

export default function Footer() {
  return (
    <div className="w-full h-32 bg-default flex flex-col gap-3 justify-center items-center">
      <div className="text-3xl lg:text-4xl font-sedgwick ">
        <span>Almas</span>
      </div>
      <div className="flex gap-5">
        <a href="https://github.com/Almasemilius">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/almas-m-bb4469b8">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/almasemilius">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/almas_emilius/">
          <Instagram />
        </a>
      </div>
    </div>
  );
}

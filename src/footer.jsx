import React from "react";
import Github from "./assets/svgs/github";
import LinkedIn from "./assets/svgs/linkedIn";
import Twitter from "./assets/svgs/twitter";
import Instagram from "./assets/svgs/instagram";

export default function Footer() {
  return (
    <div className="w-full h-32 bg-default flex flex-col gap-3 justify-center items-center">
      <div className="text-lg lg:text-3xl ">
        <span>Almas</span>
      </div>
      <div className="flex gap-5">
        <Github />
        <LinkedIn />
        <Twitter />
        <Instagram />
      </div>
    </div>
  );
}

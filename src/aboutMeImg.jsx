import React from "react";
import Profile from "./assets/images/almas.jpg";

export default function AboutMeImg() {
  return (
    <div className="px-10 lg:px-20">
      <div>
        <img src={Profile} alt="" className="rounded-lg" />
      </div>
    </div>
  );
}

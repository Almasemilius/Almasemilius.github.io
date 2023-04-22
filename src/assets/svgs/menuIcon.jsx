import React, { useState } from "react";

export default function MenuIcon(props) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      className="w-8 h-8 fill-quinary"
      onClick={props.toggleNav}
    >
      <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
    </svg>
  );
}

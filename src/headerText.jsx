import React from "react";

export default function HeaderText(props) {
  return (
    <div className="w-full flex justify-center">
      <div className="py-5">
        <h1 className="text-3xl py-2">{props.title}</h1>
        <div className="border border-red-500 w-10 mx-auto" />
      </div>
    </div>
  );
}

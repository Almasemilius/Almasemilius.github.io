import React from "react";

export default function InputField(props) {
  return (
      <div className="flex flex-col">
        <label className="px-1 text-lg" htmlFor={props.name}>{props.label}</label>
        <input
          id={props.name}
          {...props}
          className="border-2 border-gray-600 p-2 rounded-md"
        />
    </div>
  );
}

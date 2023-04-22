import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="h-96 space-y-3 shadow-sm hover:shadow-md transition-all duration-500 rounded-lg overflow-hidden bg-gray-50 border">
      <div className="overflow-hidden w-full h-72 relative">
        <img
          className="object-cover w-full h-full hover:scale-125 transition-all duration-1000 "
          src={props.image}
          alt=""
        />
        <div className="absolute w-48 h-14 inset-0 m-auto  lg:left-28 bg-black text-white bg-opacity-70 flex justify-center items-center">
          <a href={props.link} >{props.name}</a>
        </div>
      </div>
      <div className="p-1 text-justify ">
        <p>
         {props.description}
        </p>
      </div>
    </div>
  );
}

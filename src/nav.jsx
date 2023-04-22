import React, { useState } from "react";
import MenuIcon from "./assets/svgs/menuIcon";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div className="w-full bg-primary h-[10%] lg:h-[15%] relative">
      <nav className="flex px-5 lg:px-0 container w-full justify-between h-full items-center sticky mx-auto text-quinary">
        <div>
          <span className="text-quinary hover:text-primary font-tilt">
            Almas
          </span>
        </div>
        <div className="md:flex justify-evenly gap-20 hidden">
          <span className="">Home</span>
          <span className="">About Me</span>
          <span className="">Projects</span>
          <span className="">Contact Me</span>
        </div>
        <div className="md:hidden">
          <MenuIcon toggleNav={toggleNav} />
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "left-0" : "-left-96"
        } fixed md:hidden transition-all duration-500 drop-shadow-lg top-0 h-screen bg-primary bg-opacity-70 z-20 w-3/6 text-quinary`}
      >
        <div className="h-16 w-full text-right p-5">
          <button onClick={toggleNav} href="">
            Cancel
          </button>
        </div>
        <div className="w-full h-full p-10 z-10">
          <ul className="space-y-10">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-screen  z-10 ${
          isOpen == true ? "" : "hidden"
        }`}
        onClick={toggleNav}
      ></div>
    </div>
  );
}

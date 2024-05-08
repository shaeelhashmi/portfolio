import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Toggle from "./Toggle";
export default function Navbar() {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  const scrollToElement = (Element) => {
    document.getElementById(Element).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`${
        selector ? "text-white bg-slate-950" : "text-black: bg-[#6ec0ec]"
      } w-full fixed top-0 h-[8%] sm:10px border-solid border-2 border-gray-800 border-l-0 border-r-0 p-4 sm:text-2xl text-xs z-50 animate `}
    >
      <ul className="float-right sm:text-lg text-[10px]">
        <li className="inline-block sm:mx-10 mr-3 relative bottom-3">
          <a
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer"
          >
            Home
          </a>
        </li>
        <li className="inline-block sm:mx-10 mr-3 relative bottom-3">
          <a
            onClick={() => scrollToElement("projects")}
            className="cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li className="inline-block sm:mx-10 mr-3 relative bottom-3">
          <a
            onClick={() => scrollToElement("skills")}
            className="cursor-pointer"
          >
            Skills
          </a>
        </li>
        <li className="inline-block m">
          <Toggle />
        </li>
      </ul>
    </div>
  );
}

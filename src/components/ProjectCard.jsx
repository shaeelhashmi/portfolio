import React from "react";
import { useSelector } from "react-redux";
export default function ProjectCard(props) {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <div
      className={`" ml-auto  mr-auto  border-2 border-solid ${
        selector ? "border-[#0046B4]" : "border-[#428bff]"
      } sm:h-[350px]  rounded-md  sm:w-[350px]        [@media(max-width:320px)]:w-[290px] [@media(max-width:320px)]:h-[290px] w-[250px] h-[250px] animate opacity-0"`}
    >
      <div className="w-full h-1/2 animate opacity-0">
        <img src={props.images} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className={`md:text-lg [@media(max-width:320px)]:text-sm  ${
          selector
            ? "text-gray-300 bg-slate-950"
            : "text-slate-950 bg-[#83CFFF]"
        }  pl-3 h-[37%] w-full font-bold text-[9px] animate opacity-0`}
      >
        {props.title}
        <br></br>
        <span className="md:text-xs sm:text-[11px]  [@media(max-width:320px)]:text-[9px] text-[6px] block font-medium animate opacity-0">
          {props.description}
        </span>
      </div>

      <a href={props.link} target="_blank">
        <button
          className={`${
            selector
              ? "bg-[#02319F] text-white hover:bg-[#00174C]"
              : "bg-[#5ab7ff] hover:bg-[#428bc4] text-black"
          } w-full h-[13%] m-0 p-0 
        animate opacity-0"`}
        >
          View source code
        </button>
      </a>
    </div>
  );
}

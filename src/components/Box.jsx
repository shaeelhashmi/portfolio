import React from "react";
import StarSvg from "./SVG/StarSvg";
import { useSelector } from "react-redux";
export default function Box(props) {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <>
      <div
        className={`${
          selector
            ? "bg-slate-950 text-white  border-red-950"
            : "bg-[#72abff] text-black  border-blue-500"
        }  my-2 mx-3 rounded-lg p-4 h-[100%] border-[1.5px]  border-solid  animate opacity-0
      boxes z-30 `}
      >
        <span className="animate opacity-0 ">
          <StarSvg></StarSvg>
        </span>
        <span className="ml-3 animate opacity-0">{props.skill}</span>
      </div>
    </>
  );
}

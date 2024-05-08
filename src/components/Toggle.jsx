import React, { useEffect, useState } from "react";
import SunSvg from "./SVG/SunSvg";
import MoonSvg from "./SVG/MoonSvg";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../Slice/Dark mode/Darkmode";
export default function Toggle() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  const [mode, setmode] = useState(true);
  return (
    <div className="relative ">
      <label className="inline-flex items-center mb-5 cursor-pointer relative bottom-2">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => {
            setmode(!mode);
            dispatch(changeState(!mode));
          }}
        />
        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-8">
          {selector ? <MoonSvg /> : <SunSvg></SunSvg>}
        </span>
      </label>
    </div>
  );
}

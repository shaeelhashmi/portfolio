import React from "react";
import { useSelector } from "react-redux";
export default function StarSvg() {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <div className="inline-block animate">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="30"
        viewBox="0 0 26 26"
        fill="none"
        className="inline-block"
      >
        <path
          d="M13 0L15.9187 11.0557H25.3637L17.7225 17.8885L20.6412 28.9443L13 22.1115L5.35879 28.9443L8.27747 17.8885L0.636266 11.0557H10.0813L13 0Z"
          fill={`${selector ? "#FFEA00" : "#F7FF00"}`}
        ></path>
      </svg>
    </div>
  );
}

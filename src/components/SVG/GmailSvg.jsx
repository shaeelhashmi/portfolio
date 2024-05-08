import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function GmailSvg() {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <div className="opacity-0 animate">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 23"
        fill="none"
      >
        <path
          d="M23.0694 2.06046L14.9692 8.38197L6.68378 2.06046V2.06216L6.69379 2.07071V10.9225L14.8757 17.3807L23.0694 11.172V2.06046Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
        <path
          d="M25.1965 0.522757L23.0692 2.06042V11.1719L29.7629 6.03272V2.93689C29.7629 2.93689 28.9504 -1.48475 25.1965 0.522757Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
        <path
          d="M23.0692 11.1721V22.9899H28.1996C28.1996 22.9899 29.6595 22.8396 29.7646 21.1755V6.0329L23.0692 11.1721Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
        <path
          d="M6.69417 22.9999V10.9224L6.68378 10.9139L6.69417 22.9999Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
        <path
          d="M6.68371 2.06229L4.56815 0.533164C0.814191 -1.47434 0 2.94559 0 2.94559V6.04142L6.68371 10.9141V2.06229Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
        <path
          d="M6.68378 2.0621V10.9139L6.69417 10.9225V2.07065L6.68378 2.0621Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
        <path
          d="M0 6.04297V21.1856C0.103442 22.8514 1.56498 23 1.56498 23H6.69539L6.68371 10.9139L0 6.04297Z"
          fill={selector ? "white" : "black"}
          className="opacity-0 animate"
        />
      </svg>
    </div>
  );
}

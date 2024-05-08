import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function LinkedinSvg() {
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
        viewBox="0 0 48 48"
        fill="none"
        className="inline-block mr-3 "
      >
        <g clipPath="url(#clip0_46_193)">
          <path
            d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4063 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4063 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39063 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39063 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031V40.9031Z"
            fill={`${selector ? "white" : "black"}`}
            className="animate opacity-0"
          />
        </g>
        <defs>
          <clipPath id="clip0_46_193">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

import React from "react";
export default function Cards(props) {
  return (
    <>
      <div className="text-white  w-full opacity-0 animate">
        <ul>
          {props.data.map((data, index) => (
            <li key={index} className="list-none  inline-block ">
              {data}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

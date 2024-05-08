import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
export default function Skilltab2() {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <div
      className={`${
        selector ? "text-white" : "text-black"
      } border-solid border-t-2 border-red-300 md:h-screen w-full h-[1250px] `}
      id="skills"
    >
      <div
        className={`text-4xl ${
          selector ? "text-white" : "text-black"
        } text-center my-12  mt-28 animate opacity-0 `}
      >
        Skills
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-6  min-[400px]:grid-cols-2 ">
        <Box skill="C++"></Box>
        <Box skill="OOP"></Box>
        <Box skill="HTML"></Box>
        <Box skill="CSS"></Box>
        <Box skill="JavaScript"></Box>
        <Box skill="React.JS"></Box>
        <Box skill="Node.JS"></Box>
        <Box skill="Express.JS"></Box>
        <Box skill="MongoDB"></Box>
        <Box skill="Git/Github"></Box>
      </div>
    </div>
  );
}

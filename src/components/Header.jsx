import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import GithubSvg from "./SVG/GithubSvg";
import LinkedinSvg from "./SVG/LinkedinSvg";
import { useSelector } from "react-redux";
import GmailSvg from "./SVG/GmailSvg";
export default function Header() {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <div id="header">
      <div
        className={`${
          selector ? "text-white" : "text-black"
        } ml-10 mt-28 min-[400px]:mt-52 w-2/3 h-screen`}
      >
        <div className="md:text-4xl text-2xl pb-0 opacity-0  animate">
          Hello! I'm Muhammad Shaeel Arshad Hashmi
        </div>
        <div className="md:text-sm text-xs my-3 opacity-0  animate">
          Web developer
        </div>
        <div className="w-full  md:text-lg text-sm pt-0 my-0 opacity-0  animate">
          A university student with a passion for web development currently
          pursuing my degree in Bachelors of Science in Computer Science, I
          thrive on creating engaging and innovative web experiences, with a
          strong foundation in HTML, CSS, JavaScript and C++. I have hands-on
          experience with JavaScript frameworks such as React, Express, and
          Node, as well as database technologies like MongoDB , I'm constantly
          exploring new technologies to expand my skills and create impactful
          digital solutions.
        </div>
        <Cards
          data={[
            <a
              href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi"
              target="_blank"
              className="inline-block"
            >
              <LinkedinSvg></LinkedinSvg>
            </a>,
            <a
              href="https://github.com/shaeelhashmi"
              target="_blank"
              className="inline-block"
            >
              <GithubSvg></GithubSvg>
            </a>,
            <a
              href="mailto:shaeelh001@gmail.com"
              className="inline-block relative top-2"
            >
              <GmailSvg />
            </a>,
          ]}
        ></Cards>
      </div>
    </div>
  );
}

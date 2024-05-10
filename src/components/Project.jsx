import React from "react";
import { useSelector } from "react-redux";
import images from "../assets/images.jpeg";
import images1 from "../assets/pencil.jpeg";
import ProjectCard from "./ProjectCard";
export default function Project() {
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  return (
    <div
      className={`${
        selector ? "text-white border-blue-600" : "text-black "
      } border-solid border-t-2 sm:h-screen w-full h-[1230px] border-blue-600`}
      id="projects"
    >
      <div className="text-4xl  text-center my-12  mt-28 animate">
        Explore my projects
      </div>
      <div className="grid sm:grid-cols-2 gride-col-1  h-full w-full ">
        <ProjectCard
          description="This is a time table management system that I created for my university
        semester project. It is a web-application in which I used HTML,CSS,JS for frontend
        and Express.js for backend management that allows students to view their
        timetable and teachers to manage the timetable."
          link="https://github.com/shaeelhashmi/Project-TMS"
          images={images}
          title="Time Table Management System"
        ></ProjectCard>
        <ProjectCard
          description="This is a React application that checks the paragraph you enter in a text area and provides details about the paragraph like the number of words, number of characters, number of sentences, and number of paragraphs. It is a simple application that I created to practice my React skills."
          link="https://github.com/shaeelhashmi/React-application"
          images={images1}
          title="Paragraph Analyser"
        ></ProjectCard>
      </div>
    </div>
  );
}

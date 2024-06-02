import React from "react";
import { useSelector } from "react-redux";
import images from "../assets/images.jpeg";
import images1 from "../assets/pencil.jpeg";
import SpaceImg from "../assets/SpaceInvaders.jpg";
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
      } border-solid border-t-2  w-full h-auto border-blue-600 sm:mb-56 mb-7`}
      id="projects"
    >
      <div className="text-4xl  text-center my-12  mt-28 animate">
        Explore my projects
      </div>
      <div className="grid sm:grid-cols-2 grid-col-1  h-full w-full p-9 gap-y-24 gap-x-8">
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
        <ProjectCard
          description="This is a spaceshooter game that has a user spaceship that can move in all directions and shoot bullets. The game has a score system that increases as the user shoots the asteroids, it also features 4 boss levels each with its own added difficulty. The game is created using SFML library in C++."
          link="https://github.com/shaeelhashmi/SpaceInvaders"
          images={SpaceImg}
          title="Space Shooter Game"
        ></ProjectCard>
      </div>
    </div>
  );
}

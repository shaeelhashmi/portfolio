import React, { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skilltab2 from "./components/Skilltab1";
import "./App.css";
import { useSelector } from "react-redux";
import Project from "./components/Project";

export default function App() {
  function onVisible(element, callback) {
    try {
      new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.03) {
            callback(element);
            observer.disconnect();
          } else {
            element.classList.add("opacity-0");
          }
        });
      }).observe(element);
      if (!callback) return new Promise((r) => (callback = r));
    } catch (e) {
      console.log(e);
    }
  }
  const selector = useSelector((state) => {
    let a = state;
    return a.mode;
  });
  useEffect(() => {
    setmode();
    const a = document.querySelectorAll(".animate");
    for (let i = 0; i < a.length; i++) {
      onVisible(a[i], (element) => {
        element.classList.remove("opacity-0");
      });
    }
  }, [selector]);
  const setmode = () => {
    selector
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "#8EBDFF");
  };
  window.addEventListener("scroll", () => {
    const a = document.querySelectorAll(".animate");
    for (let i = 0; i < a.length; i++) {
      onVisible(a[i], (element) => {
        element.classList.remove("opacity-0");
      });
    }
  });

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Project></Project>
      <Skilltab2></Skilltab2>
    </div>
  );
}

import React from "react";
import "./CourseCards.css";
import devImg from "../assets/devlopment.jpeg";
import designImg from "../assets/Design.jpeg"
import aiImg from "../assets/ai.jpeg"
import CourseCardsImage from "./CourseCardsImage";

const CourseCards = () => {
  return (
    <>
      <div className="cards-heading">
        <p>Courses We Offer</p>
      </div>

      <div className="cards-container">
            <CourseCardsImage cardimage = {devImg} cardContent = "Master HTML,CSS,and Javascript with real projects" courseName="Development"/>
            <CourseCardsImage cardimage = {aiImg} cardContent = "Start With The basics and build a strong foundation" courseName="Artificial Intelligence"/>
            <CourseCardsImage cardimage = {designImg} cardContent = "Learn and Design principles , UI/UX,and Visual tools."courseName="UI/UX Design"/>

      </div>

      
    </>
  );
};

export default CourseCards;

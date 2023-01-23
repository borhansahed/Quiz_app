import React from "react";
import classes from "../styles/Questions.module.css";
import Answers from "./Answers";

const Questions = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined">help_outlined</span>
        Here goes the question from Learn with Sahed?
      </div>
      <Answers />
    </div>
  );
};

export default Questions;

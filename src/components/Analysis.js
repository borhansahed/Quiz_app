import React from "react";
import classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

const Analysis = ({ answers, score }) => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        Your answered {score / 5} out of {answers.length} questions correctly
      </h4>
      <Questions answers={answers} />
    </div>
  );
};

export default Analysis;

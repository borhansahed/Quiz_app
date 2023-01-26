import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";
const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => {
        return (
          <Checkbox
            className={classes.answer}
            text={option.title}
            key={index}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Answers;

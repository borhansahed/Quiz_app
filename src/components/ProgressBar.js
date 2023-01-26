import React from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
const ProgressBar = ({ next, prev, progress, submit }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}></div>
        <div className={classes.rangeBody}>
          <div
            style={{ width: `${progress}%` }}
            className={classes.progress}
          ></div>
        </div>
      </div>

      <Button
        className={classes.next}
        // onClick={next}
        onClick={progress === 100 ? submit : next}
      >
        <span> {progress === 100 ? "Submit Answers" : "Next Questions"} </span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;

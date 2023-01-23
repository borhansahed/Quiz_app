import React from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}></div>
        <div className={classes.rangeBody}>
          <div style={{ width: "20%" }} className={classes.progress}></div>
        </div>
      </div>
      <Button
        className={classes.next}
        //   onClick={progress === 100 ? submit : next}
      >
        <span>Next Questions</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;

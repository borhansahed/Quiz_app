import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/result">
        <Button
          className={classes.next}
          //   onClick={progress === 100 ? submit : next}
        >
          <span>Next Questions</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;

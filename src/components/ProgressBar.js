import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
const ProgressBar = ({ next, prev, progress, submit }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  const tooltipHandler = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
    }
  };
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress}% complete
        </div>
        <div className={classes.rangeBody}>
          <div
            style={{ width: `${progress}%` }}
            className={classes.progress}
            onMouseOver={tooltipHandler}
            onMouseOut={tooltipHandler}
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

import React from "react";
import classes from "../styles/Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>
      <div className={classes.badge}>
        <img
          src="https://raw.githubusercontent.com/learnwithsumit/react-quiz/main/src/assets/images/success.png"
          alt="success"
        />
      </div>
    </div>
  );
};

export default Summary;

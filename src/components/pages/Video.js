import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/Video.module.css";

const Video = () => {
  return (
    <Link to="/quiz">
      <div className={classes.video}>
        <img
          src="https://raw.githubusercontent.com/learnwithsumit/react-quiz/main/src/assets/images/3.jpg"
          alt=""
        />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;

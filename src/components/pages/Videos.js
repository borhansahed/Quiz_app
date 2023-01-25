import React from "react";
import classes from "../../styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={`${classes.videos}`}>
      {/* <h1>{process.env.REACT_APP_NAME}</h1> */}
      <Video />
    </div>
  );
};

export default Videos;

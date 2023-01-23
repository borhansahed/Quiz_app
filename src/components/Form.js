import React from "react";
import classes from "../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  console.log(className);
  return (
    <form
      style={{ height: "500px" }}
      action="#"
      className={`${className} ${classes.form}`}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;

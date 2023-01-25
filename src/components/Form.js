import React from "react";
import classes from "../styles/Form.module.css";

const Form = ({ style, children, ...rest }) => {
  return (
    <form style={style} action="#" className={`${classes.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;

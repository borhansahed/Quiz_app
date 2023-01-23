import React from "react";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import logo from "./assest/images/logo.png";
function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Quiz" />
            <h3>Active Quiz</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;

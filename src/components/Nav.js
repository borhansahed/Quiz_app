import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import logo from "./assest/images/logo.png";
function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Quiz" />
            <h3>Active Quiz</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;

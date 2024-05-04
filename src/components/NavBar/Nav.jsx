import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <nav className={styles.container_nav}>
      <div className={styles.nav_content}>
        <Link to="/home">
          <span>Home</span>
        </Link>
        <Link to="/favorites">
          <span>Favorites</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link onClick={props.logOut}>
          <span>Log Out</span>
        </Link>
      </div>
    </nav>
  );
}

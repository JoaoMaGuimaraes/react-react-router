import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link to="home">Home</Link>
      </div>
      <div>
        <Link to="posts">Posts</Link>
      </div>
    </div>
  );
};

export default NavBar;

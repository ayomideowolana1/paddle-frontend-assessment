import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css"
import Link from "next/link" 

const Nav = (props) => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/metricks-logo.svg" alt="" />
          </Link>
        </div>
        <div className={styles.links}>
        <Link href="/about-us">
          <a >ABOUT US</a>
        </Link>
          <a href="#">BLOG</a>
          <a
            href="#"
            className={styles.contactUs}
            onClick={props.handleShowContactUs}
          >
            CONTACT US
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

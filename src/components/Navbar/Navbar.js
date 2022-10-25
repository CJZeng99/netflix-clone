import React, { useState } from "react";

import styles from "./Navbar.module.css";

import logo from "./assets/logo.png";

/**
 * A navigation bar component with a prototype for localization payload.
 */
const Navbar = (props) => {
  /** Payload of navigation items, supporting localization */
  const navItems = [
    { type: "home", text: "Home", href: "#" },
    { type: "show", text: "TV Shows", href: "#" },
    { type: "movie", text: "Movies", href: "#" },
    { type: "discover", text: "New & Popular", href: "#" },
    { type: "list", text: "My List", href: "#" },
    { type: "language", text: "Browse by Languages", href: "#" },
  ];
  /** Navigation item type of the current webpage */
  const currentItem = "home";

  const [scrolled, setScrolled] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`${styles.navbar} ${scrolled ? styles["navbar-scroll"] : ""}`}
    >
      {/* Netflix Logo */}
      <a className={styles["navbar-brand"]} href="./">
        <img src={logo} alt="Netflix Logo" />
      </a>

      {/* Navbar Items */}
      <ul className={styles["navbar-nav"]}>
        {navItems.map((item) => {
          return (
            <li
              className={`${styles["nav-item"]} ${
                item.type === currentItem ? styles["current"] : ""
              }`}
              key={item.type}
            >
              <a className={styles["nav-link"]} href={item.href}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

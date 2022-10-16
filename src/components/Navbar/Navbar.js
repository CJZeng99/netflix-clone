import React from "react";

import styles from "./Navbar.module.css";

/**
 * A navigation bar component with a prototype for localization payload.
 */
const Navbar = (props) => {
  /** Payload of nav items supporting localization */
  const navItems = [
    { type: "home", text: "Home", href: "#" },
    { type: "show", text: "TV Shows", href: "#" },
    { type: "movie", text: "Movies", href: "#" },
    { type: "discover", text: "New & Popular", href: "#" },
    { type: "list", text: "My List", href: "#" },
    { type: "language", text: "Browse by Languages", href: "#" },
  ];

  return (
    <div className={styles.navbar}>
      {/* Netflix Logo */}
      <a href={styles["navbar-brand"]}>
        <img src="" alt="" />
      </a>

      {/* Navbar Items */}
      <ul className={styles["navbar-nav"]}>
        {navItems.map((item) => {
          return (
            <li className="nav-item" key={item.type}>
              <a className="nav-link" href={item.href}>
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

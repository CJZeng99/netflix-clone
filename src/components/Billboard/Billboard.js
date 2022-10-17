import React from "react";

import BillboardInfo from "./BillboardInfo";

import cover from "./assets/billboard-cover.jpg";

import styles from "./Billboard.module.css";

const Billboard = () => {
  return (
    <div className={styles.billboard}>
      <div className={styles["billboard-video-container"]}>Video Container</div>
      <div className={styles["billboard-img-container"]}>
        <img
          className={styles["billboard-img"]}
          src={cover}
          alt="billboard-cover-img"
        />
        <div class={styles["billboard-img-vignette"]} />
      </div>
      <BillboardInfo />
    </div>
  );
};

export default Billboard;

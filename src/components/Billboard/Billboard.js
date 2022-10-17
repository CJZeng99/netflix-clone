import React from "react";

import BillboardInfo from "./BillboardInfo";

import cover from "./assets/billboard-cover.jpg";
import trailer from "./assets/M3GAN-trailer.mp4";
import styles from "./Billboard.module.css";

/**
 * A billboard component for showcasing a movie with preview function on the home page.
 */
const Billboard = () => {
  return (
    <div className={styles.billboard}>
      {/* Trailer div */}
      <div className={styles["billboard-video-container"]}>
        <video
          // autoPlay
          controls
          muted
          className={`${styles["billboard-video"]} ${styles["billboard-video-wide"]}`}
        >
          <source src={trailer} type="video/mp4" />
        </video>
      </div>

      {/* Poster div */}
      <div className={styles["billboard-img-container"]}>
        <img
          className={styles["billboard-img"]}
          src={cover}
          alt="billboard-cover-img"
        />
        <div className={styles["billboard-img-vignette"]} />
      </div>

      {/* Info and Button div */}
      <BillboardInfo />
    </div>
  );
};

export default Billboard;

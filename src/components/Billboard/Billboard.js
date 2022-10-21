import React from "react";

import BillboardInfo from "./BillboardInfo";

import cover from "./assets/M3GAN-cover.jpg";
import trailer from "./assets/M3GAN-trailer.mp4";
import styles from "./Billboard.module.css";

/**
 * A billboard component for showcasing a movie with preview function on the home page.
 */
const Billboard = () => {
  const isPlaying = false;

  return (
    /* Outer span and div used as wrappers to layout Billboard and Rows */
    <span className={styles["volatile-billboard"]}>
      <div className={styles["billboard-row"]}>
        {/* Defines the layout of video container and image container */}
        <div className={styles.billboard}>
          {/* Vignetting mask at the bottom of video or image */}
          <div className={styles["billboard-vignette"]} />

          {/* Trailer div, only rendered when isPlaying is set */}
          {isPlaying && (
            <div className={styles["billboard-video-container"]}>
              <video
                // autoPlay // to be set at deployment
                controls
                muted
                className={`${styles["billboard-video"]} ${styles["billboard-video-wide"]}`}
              >
                <source src={trailer} type="video/mp4" />
              </video>
            </div>
          )}

          {/* Image div */}
          <div className={styles["billboard-img-container"]}>
            <img
              className={styles["billboard-img"]}
              src={cover}
              alt="billboard-cover-img"
            />
          </div>

          {/* Info and Button div */}
          <BillboardInfo />
        </div>
      </div>
    </span>
  );
};

export default Billboard;

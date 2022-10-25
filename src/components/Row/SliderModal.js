import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { add, remove } from "../../app/listsSlice";
import Button from "../Button";
import styles from "./SliderModal.module.css";

const SliderModal = (props) => {
  const icon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styles["icon"]}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    // <div> className={styles["slider-modal"]}>
    <div
      className={styles["slider-modal"]}
      style={props.style}
      onMouseLeave={props.onMouseLeave}
    >
      <div className={styles["slider-modal-art-wrapper"]}>
        <div className={styles["slider-modal-art"]}>
          <img
            className={styles["slider-modal-image"]}
            src={props.movie.img}
            alt={props.movie.title}
          />
        </div>
      </div>

      <div className={styles["slider-modal-info-wrapper"]}>
        <div className={styles["slider-modal-info"]}></div>
        <div className={styles["slider-modal-button-wrapper"]}>
          {props.inMyList ? (
            <Button
              onClick={() => {
                dispatch(remove({ list: "myList", movie: props.movie }));
                dispatch(add({ list: "recommendList", movie: props.movie }));
              }}
              className={`${styles["modal-button"]} ${styles["modal-remove-button"]}`}
            >
              <div className={styles["model-button-round"]}>{icon}</div>
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch(remove({ list: "recommendList", movie: props.movie }));
                dispatch(add({ list: "myList", movie: props.movie }));
              }}
              className={`${styles["modal-button"]} ${styles["modal-add-button"]}`}
            >
              <div className={styles["model-button-round"]}>{icon}</div>
            </Button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default SliderModal;

import React from "react";
import styles from "./SliderItem.module.css";
import SliderModal from "./SliderModal";
const SliderItem = (props) => {
  return (
    <React.Fragment>
      <div className={styles["slider-item-art"]}>
        <img
          className={styles["slider-item-image"]}
          src={props.movie.img}
          alt={props.movie.title}
        />
      </div>
      {/* {props.movie.id === 3 && ( */}
      <SliderModal movie={props.movie} inMyList={props.inMyList} />
      {/* )} */}
    </React.Fragment>
  );
};

export default SliderItem;

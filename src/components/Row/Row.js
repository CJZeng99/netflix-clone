import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  add,
  remove,
  selectMyList,
  selectRecommendList,
} from "../../app/listsSlice";
import styles from "./Row.module.css";

const Row = (props) => {
  const myList = useSelector(selectMyList);
  const recommendList = useSelector(selectRecommendList);
  const dispatch = useDispatch();
  const renderList = props.name === "myList" ? myList : recommendList;

  return (
    <div className={styles.row}>
      <h2 className={styles["row-header"]}>
        <a className={styles["row-title"]} href="./">
          <div className={styles["row-title-text"]}>{props.title}</div>
        </a>
      </h2>
      <div className={styles["row-slider"]}>
        <div className={styles["row-slider-mask"]}>
          <ul className={styles["row-slider-content"]}>
            {Object.values(renderList).map((movie) => {
              return (
                <li key={movie.id} className={styles["row-slider-item"]}>
                  <img
                    className={styles["row-slider-item-art"]}
                    src={movie.img}
                    alt={movie.title}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Row;

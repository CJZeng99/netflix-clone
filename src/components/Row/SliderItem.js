import React, { useState, useEffect } from "react";
import styles from "./SliderItem.module.css";
import SliderModal from "./SliderModal";
const SliderItem = (props) => {
  const [mouseOverItem, setMouseOverItem] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(mouseOverItem);
    }, 200);
    return () => clearTimeout(timer);
  }, [mouseOverItem]);

  const mouseOverHandler = (event) => {
    const { y } = document.body.getBoundingClientRect();
    const { left, top, width, height } = event.target.getBoundingClientRect();
    setModalStyle({
      position: "absolute",
      left: left - width * 0.25 + "px",
      top: top - y - 75 - height * 0.25 + "px",
      width: width * 1.5 + "px",
    });
    setMouseOverItem(true);
  };

  const mouseLeaveHandler = () => {
    setShowModal(false);
    setMouseOverItem(false);
  };

  const mouseLeaveBeforeHandler = () => {
    if (!showModal) {
      setMouseOverItem(false);
    }
  };

  return (
    <React.Fragment>
      <div
        className={styles["slider-item-art"]}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveBeforeHandler}
      >
        <img
          className={styles["slider-item-image"]}
          src={props.movie.img}
          alt={props.movie.title}
        />
      </div>
      {showModal && (
        <SliderModal
          style={modalStyle}
          movie={props.movie}
          inMyList={props.inMyList}
          onMouseLeave={mouseLeaveHandler}
        />
      )}
    </React.Fragment>
  );
};

export default SliderItem;

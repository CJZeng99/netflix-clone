import React from "react";

const Button = (props) => {
  return (
    <React.Fragment>
      {props.href ? (
        <a href={props.href}>
          <button className={props.className} type="button">
            {props.children}
          </button>
        </a>
      ) : (
        <button
          className={props.className}
          type="button"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;

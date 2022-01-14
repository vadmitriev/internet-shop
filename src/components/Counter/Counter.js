import React from "react";
import "./Counter.scss";
import classNames from "classnames";

const Counter = ({ onAdd, onRemove, number, size = "m" }) => {
  const btnClass = classNames({
    "counter-btn": true,
    small: size === "s",
    medium: size === "m",
  });

  const numClass = classNames({
    "counter-number": true,
    small: size === "s",
  });

  return (
    <div className="counter">
      <div className={btnClass + " remove"} onClick={onRemove}>
        -
      </div>
      <div className={numClass}>{number}</div>
      <div className={btnClass + " add"} onClick={onAdd}>
        +
      </div>
    </div>
  );
};

export default Counter;
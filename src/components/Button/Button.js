import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    btn: true,
    "btn-secondary": type === "secondary",
    "btn-primary": type === "primary",
    "btn-danger": type === "danger",
    "btn-small": size === "s",
    "btn-medium": size === "m",
    "btn-large": size === "l",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

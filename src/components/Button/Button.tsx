import React from "react";
import classNames from "classnames";
import "./Button.scss";

export enum buttonTypes {
  primary,
  secondary,
  danger,
}

export enum buttonSizes {
  small,
  medium,
  large,
}

interface ButtonProps {
  onClick: () => void;
  type: buttonTypes;
  children: React.ReactNode;
  size?: buttonSizes;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  size = buttonSizes.small,
}) => {
  const btnClass = classNames({
    btn: true,
    "btn-primary": type === buttonTypes.primary,
    "btn-secondary": type === buttonTypes.secondary,
    "btn-danger": type === buttonTypes.danger,
    "btn-small": size === buttonSizes.small,
    "btn-medium": size === buttonSizes.medium,
    "btn-large": size === buttonSizes.large,
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

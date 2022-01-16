import React from "react";
import "./Counter.scss";
import classNames from "classnames";

export enum counterSizes {
  small,
  medium,
  large,
}

interface CounterProps {
  onAdd: () => void;
  onRemove: () => void;
  number: number;
  size: counterSizes;
}

const Counter: React.FC<CounterProps> = ({
  onAdd,
  onRemove,
  number,
  size = counterSizes.small,
}) => {
  const btnClass = classNames({
    "counter-btn": true,
    "counter-btn-small": size === counterSizes.small,
    "counter-btn-medium": size === counterSizes.medium,
  });

  const numClass = classNames({
    "counter-number": true,
    "counter-small": size === counterSizes.small,
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

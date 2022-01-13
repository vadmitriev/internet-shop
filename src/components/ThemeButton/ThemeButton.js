import React from "react";
import "./ThemeButton.scss";

const ThemeButton = ({ onClick }) => {
  return (
    <button className="mode-switch" title="Switch Theme">
      <svg
        className="moon"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={onClick}
      >
        <defs />
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
};

export default ThemeButton;

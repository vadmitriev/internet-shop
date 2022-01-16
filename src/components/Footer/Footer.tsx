import React from "react";
import "./Footer.scss";

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer className="footer">{children}</footer>;
};

export default Footer;

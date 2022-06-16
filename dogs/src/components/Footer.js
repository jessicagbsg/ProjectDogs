import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Some rights reserved. </p>
    </footer>
  );
};
export default Footer;

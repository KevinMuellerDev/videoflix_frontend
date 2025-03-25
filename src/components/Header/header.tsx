import React from "react";
import styles from "@/components/Header/header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src="/Logo.svg" alt="Videoflix Logo" />
      <button className="vfBtn">Log in</button>
    </header>
  );
};

export default Header;

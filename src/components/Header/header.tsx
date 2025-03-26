import React, { useState, useEffect } from "react";
import styles from "@/components/Header/Header.module.css";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname;
  console.log(pathName);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoginState === "true");
  }, []);

  return (
    <header className={styles.wrapper}>
      <img src="/Logo.svg" alt="Videoflix Logo" />

      {pathName !== "/login" && (
        <button className="vfBtn">{!isLoggedIn ? "Log in" : "Log out"}</button>
      )}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import styles from "@/components/Header/Header.module.css";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoginState === "true");
  }, [isLoggedIn]);

  function handleAuth() {
    if (isLoggedIn) {
      router.push("/");
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    } else {
      router.push("/login");
    }
  }

  return (
    <header className={styles.wrapper}>
      <img src="/Logo.svg" alt="Videoflix Logo" />
      {pathName !== "/login" && (
        <button className="vfBtn" onClick={handleAuth}>
          {!isLoggedIn ? "Log in" : "Log out"}
        </button>
      )}
    </header>
  );
};

export default Header;

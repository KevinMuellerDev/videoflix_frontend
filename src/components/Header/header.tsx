import React, { useState, useEffect } from "react";
import styles from "@/components/Header/Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <Link rel="stylesheet" href="/">
        <img className={styles.logo} src="/Logo.svg" alt="Videoflix Logo" />
      </Link>

      {pathName !== "/login" && (
        <button className="vfBtn" onClick={handleAuth}>
          {!isLoggedIn ? "Log in" : "Log out"}
        </button>
      )}
    </header>
  );
};

export default Header;

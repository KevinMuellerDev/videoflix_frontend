import React, { useEffect } from "react";
import useBackground from "@/hooks/useBackground";
import mainStyles from "@/pages/index.module.css";
import styles from "@/pages/login/login.module.css";

const Login: React.FC = () => {
  useBackground({ background: "/login-bg.webp" });

  return (
    <main className={mainStyles.mainContent}>
      <div className={styles.loginContent}>
        <h1 style={{color:"var(--primary-color)"}}>Log in</h1>
      </div>
    </main>
  );
};

export default Login;

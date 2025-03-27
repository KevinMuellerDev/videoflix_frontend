import React, { useEffect } from "react";
import styles from "@/pages/index.module.css";
import useBackground from "@/hooks/useBackground";

export default function Start() {
  useBackground({ background: "/start-bg.webp" });

  function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    return;
  }

  return (
    <main className={styles.mainContent}>
      <section className={styles.signUpWrapper}>
        <h1>Movies, TV shows, and more</h1>
        <span>Enter your email to create or restart your subscription.</span>
        <form className={styles.signUpMainForm} onSubmit={handleSignUp}>
          <input
            className={styles.transTxtField}
            name="email"
            type="text"
            placeholder="Email Adress"
            autoComplete="false"
            aria-label="Email Input"
          />
          <input
            className="vfBtn"
            type="submit"
            value="Sign up >"
            aria-label="Submit Email"
          />
        </form>
      </section>
    </main>
  );
}

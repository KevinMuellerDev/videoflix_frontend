import React from "react";
import styles from '@/styles/index.module.css'

export default function Start() {

  function handleSignUp() {
    return;
  }

  return (
    <main className={styles.browseMain}>
      <section className={styles.signUpWrapper}>
        <h1>Movies, TV shows, and more</h1>
        <span>Enter your email to create or restart your subscription.</span>
        <form className={styles.signUpMainForm} action={handleSignUp}>
          <input className={styles.transTxtField} name="email" type="text" placeholder="Email Adress"/>
          <input className="vfBtn" type="submit" value="Sign up >" />
        </form>
      </section>
    </main>
  );
}

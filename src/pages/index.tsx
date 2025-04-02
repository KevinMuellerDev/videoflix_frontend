import React, { useEffect } from "react";
import styles from "@/pages/index.module.css";
import useBackground from "@/hooks/useBackground";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import { useRouter } from "next/router";
import { useToast } from "@/context/ToastContext";
import Head from "next/head";

export default function Start() {
  useBackground({ background: "/start-bg.webp" });
  const router = useRouter();
  const { showToast } = useToast();
  const { email, setEmail, isValid } = useEmailValidation();

  function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    if (!isValid) {
      showToast("Bitte gebe eine richtige Email Adresse ein.");
      return;
    }

    router.push("/signup");
  }

  return (
    <>
      <Head>
        <title>Videoflix</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.signUpWrapper}>
          <h1>Movies, TV shows, and more</h1>
          <span>Enter your email to create or restart your subscription.</span>
          <form className={styles.signUpMainForm} onSubmit={handleSignUp}>
            <input
              className={styles.transTxtField}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              id="indexEmailAddr"
              placeholder="Email Address"
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
    </>
  );
}

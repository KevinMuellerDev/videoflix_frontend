import React, { useEffect, useState } from 'react';
import styles from '@/pages/index.module.css';
import useBackground from '@/hooks/useBackground';
import { useEmailValidation } from '@/hooks/useEmailValidation';
import { useRouter } from 'next/router';
import { useToast } from '@/context/ToastContext';
import useCheckEmail from '@/hooks/useCheckEmail';
import Head from 'next/head';

export default function Start() {
  useBackground({ background: '/start-bg.webp' });
  const router = useRouter();
  const { showToast } = useToast();
  const { email, setEmail, isValid } = useEmailValidation();

  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    if (!isValid) {
      showToast('Bitte gebe eine richtige Email Adresse ein.');
      return;
    }
    const exists = (await useCheckEmail(email)) as boolean;

    exists === true
      ? router.push({ pathname: '/login', query: { email } })
      : router.push({ pathname: '/signup', query: { email } });
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

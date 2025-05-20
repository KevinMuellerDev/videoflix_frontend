import React, { useEffect, useState } from 'react';
import styles from '@/pages/index.module.css';
import useBackground from '@/hooks/useBackground';
import { useEmailValidation } from '@/hooks/useEmailValidation';
import { useRouter } from 'next/router';
import { useToast } from '@/context/ToastContext';
import { useCheckEmail } from '@/hooks/useCheckEmail';
import { useAuthContext } from '@/context/AuthContext';
import Head from 'next/head';

const Start = () => {
  useBackground({ background: '/start-bg.webp' });
  const { isLoggedIn, loading } = useAuthContext();
  const router = useRouter();
  const { showToast } = useToast();
  const { email, setEmail, isValid } = useEmailValidation();

  if (!loading && isLoggedIn) router.push('/browse');

  const handleSignUp = async (formData: FormData) => {
    if (!isValid) {
      showToast('Bitte gebe eine richtige Email Adresse ein.');
      return;
    }
    const exists = (await useCheckEmail(email)) as boolean;
    setEmail(encodeURI(String(email)));

    exists === true
      ? router.push({ pathname: '/login', query: { email } })
      : router.push({ pathname: '/signup', query: { email } });
  };

  return (
    <>
      <Head>
        <title>Videoflix</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.signUpWrapper}>
          <h1>Movies, TV shows, and more</h1>
          <span>Enter your email to create or restart your subscription.</span>
          <form className={styles.signUpMainForm} action={handleSignUp}>
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
};

export default Start;

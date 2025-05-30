import React, { useState, useEffect } from 'react';
import styles from '@/components/Header/Header.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthProvider, useAuthContext } from '@/context/AuthContext';

/**
 * Header component for the Videoflix application.
 *
 * Displays the application logo and conditionally renders:
 * - A login/logout button when not on the `/login`, `/imprint`, or `/privacypolicy` routes.
 * - A back arrow button on `/imprint` or `/privacypolicy` that redirects to the `/browse` page.
 *
 * Handles authentication status by reading from and writing to `localStorage`,
 * and updates the global auth context accordingly.
 *
 * Uses Next.js router for client-side navigation.
 *
 * @component
 * @returns {JSX.Element} The rendered header element.
 */
const Header: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  const handleLogin = () => {
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      router.push('/');
    } else {
      router.push('/login');
    }
  };

  const redirectToBrowse = () => {
    router.push('/browse');
  };

  return (
    <header className={styles.wrapper}>
      <Link rel="stylesheet" href="/">
        <picture>
          <source srcSet="/logo-mobile.svg" media="(max-width: 551px)" />
          <img className={styles.logo} src="/Logo.svg" alt="Videoflix Logo" />
        </picture>
      </Link>

      {pathName !== '/login' &&
        pathName !== '/imprint' &&
        pathName !== '/privacypolicy' && (
          <button className="vfBtn" onClick={handleLogin}>
            {!isLoggedIn ? 'Log in' : 'Log out'}
          </button>
        )}
      {(pathName === '/imprint' || pathName === '/privacypolicy') && (
        <img
          src="/icons/arrow-left.png"
          alt="return to browse"
          className={styles.returnArrow}
          onClick={redirectToBrowse}
        />
      )}
    </header>
  );
};

export default Header;

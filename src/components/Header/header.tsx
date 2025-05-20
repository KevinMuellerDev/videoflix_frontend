import React, { useState, useEffect } from 'react';
import styles from '@/components/Header/Header.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthProvider, useAuthContext } from '@/context/AuthContext';

const Header: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  const handleLogin = () => {
    if (isLoggedIn) {
      router.push('/');
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
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

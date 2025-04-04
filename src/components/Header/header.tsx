import React, { useState, useEffect } from 'react';
import styles from '@/components/Header/Header.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginState === 'true');
  }, [isLoggedIn]);

  function handleLogin() {
    if (isLoggedIn) {
      router.push('/');
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
    } else {
      router.push('/login');
    }
  }

  return (
    <header className={styles.wrapper}>
      <Link rel="stylesheet" href="/">
        <picture>
          <source srcSet="/logo-mobile.svg" media="(max-width: 551px)" />
          <img className={styles.logo} src="/Logo.svg" alt="Videoflix Logo" />
        </picture>
      </Link>

      {pathName !== '/login' && (
        <button className="vfBtn" onClick={handleLogin}>
          {!isLoggedIn ? 'Log in' : 'Log out'}
        </button>
      )}
    </header>
  );
};

export default Header;

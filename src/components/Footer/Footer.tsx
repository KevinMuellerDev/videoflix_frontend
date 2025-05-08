import React, { FC } from 'react';
import Link from 'next/link';
import styles from '@/components/Footer/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.btmFooter}>
      <Link href="/privacypolicy">Datenschutz</Link>
      <Link href="/imprint">Impressum</Link>
    </footer>
  );
};

export default Footer;

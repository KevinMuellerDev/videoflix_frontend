import React, { FC } from 'react';
import Link from 'next/link';
import styles from '@/components/Footer/Footer.module.css';

/**
 * `Footer` is a simple component that renders footer links
 * to the Privacy Policy and Imprint pages.
 *
 * @component
 *
 * @returns A footer section with navigation links.
 *
 * @example
 * <Footer />
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.btmFooter}>
      <Link href="/privacypolicy">Datenschutz</Link>
      <Link href="/imprint">Impressum</Link>
    </footer>
  );
};

export default Footer;

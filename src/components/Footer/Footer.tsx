import React from "react";
import Link from "next/link";
import styles from "@/components/Footer/Footer.module.css"


const Footer = () => {
    return (
        <footer className={styles.btmFooter}>
            <Link rel="stylesheet" href="/PrivacyPolicy">Datenschutz</Link>
            <Link rel="stylesheet" href="/Impressum">Impressum</Link>
        </footer>
    )
}

export default Footer;
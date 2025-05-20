import React, { useState } from 'react';
import styles from '@/components/Toast/Toast.module.css';

interface ToastProps {
  message: string;
  hideToast: () => void;
  isClosing: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, hideToast, isClosing }) => {
  return (
    <div className={`${styles.toastContainer} ${isClosing ? styles.hide : ''}`}>
      <div className={styles.redContainer} />
      <div className={styles.textWrapper}>
        <img src="/icons/ExclamationCircleFill.svg" alt="Warning Icon" />
        <span className={styles.contentWidth}>{message}</span>
        <div className={styles.divider} />
        <div className={styles.close} onClick={hideToast}></div>
      </div>
    </div>
  );
};

export default Toast;

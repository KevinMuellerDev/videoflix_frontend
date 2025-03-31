import React, { ReactNode } from "react";
import styles from "@/components/Toast/Toast.module.css";

interface ToastProps {
  message: string;
  hideToast: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, hideToast }) => {
  return (
    <div className={styles.toastContainer}>
      <div className={styles.redContainer} />
      <img src="/icons/ExclamationCircleFill.svg" alt="Warning Icon" />
      <span className={styles.contentWidth}>{message}</span>
      <div className={styles.divider} />
      <div className={styles.close} onClick={hideToast}></div>
    </div>
  );
};

export default Toast;

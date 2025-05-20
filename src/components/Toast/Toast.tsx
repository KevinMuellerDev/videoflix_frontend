import React, { useState } from 'react';
import styles from '@/components/Toast/Toast.module.css';

interface ToastProps {
  message: string;
  hideToast: () => void;
  isClosing: boolean;
}

/**
 * Toast component that displays a temporary notification message.
 *
 * This component is typically used to display warning, error, or success messages to users.
 * It includes an icon, message text, and a close button. The toast automatically hides after a timeout
 * when controlled by its parent through the `isClosing` prop.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.message - The message to display inside the toast.
 * @param {() => void} props.hideToast - Function to call when the toast should be hidden manually (e.g., on close button click).
 * @param {boolean} props.isClosing - Flag that controls whether the toast should be hidden with a transition.
 *
 * @returns {JSX.Element} A styled toast notification component.
 *
 * @example
 * // Used inside a provider or component
 * <Toast
 *   message="Something went wrong!"
 *   hideToast={() => setShowToast(false)}
 *   isClosing={false}
 * />
 */
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

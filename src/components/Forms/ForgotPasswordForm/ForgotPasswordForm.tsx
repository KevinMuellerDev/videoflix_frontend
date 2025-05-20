import React, { use, useState } from 'react';
import styles from '@/components/Forms/ForgotPasswordForm/ForgotPasswordForm.module.css';
import { useAuth } from '@/lib/useAuth';
import { useToast } from '@/context/ToastContext';
import { useEmailValidation } from '@/hooks/useEmailValidation';

/**
 * `ForgotPasswordForm` is a React functional component that renders a form
 * allowing users to request a password reset via email. It validates the email
 * and sends a request using the `resetPasswordRequest` function from the auth context.
 *
 * @component
 *
 * @returns {JSX.Element} A styled form where users can enter their email to receive a reset link.
 */
const ForgotPasswordForm: React.FC = () => {
  const { showToast } = useToast();
  const { resetPasswordRequest } = useAuth();
  const { email, setEmail, isValid } = useEmailValidation();

  /**
   * Handles the form submission for requesting a password reset.
   * Prevents the default form behavior and sends the request to the server.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    const { success, message } = await resetPasswordRequest(email);
    showToast(message);
  };

  return (
    <>
      <form className={styles.forgotPasswordForm} onSubmit={handleSendMail}>
        <span className={styles.infoText}>
          We will send you an email with instructions to reset your password.
        </span>
        <div className="iconInputField">
          <img src="/icons/mail.png" alt="Email input" />
          <input
            className="blankInputField"
            type="email"
            name="email"
            id="forgotPasswordEmail"
            aria-label="Passwortwiederherstellung Email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <input
          className="vfBtn"
          style={{
            marginTop: '16px',
            backgroundColor: isValid ? '#2e3edf' : '#888',
            cursor: isValid ? 'pointer' : 'not-allowed',
            opacity: isValid ? 1 : 0.6,
          }}
          type="submit"
          value="Send Email"
          aria-label="Send Email to restore password"
          disabled={!isValid}
        />
      </form>
    </>
  );
};

export default ForgotPasswordForm;

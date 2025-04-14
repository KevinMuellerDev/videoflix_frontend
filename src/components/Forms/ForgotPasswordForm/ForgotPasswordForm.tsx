import React, { useState } from 'react';
import styles from '@/components/Forms/ForgotPasswordForm/ForgotPasswordForm.module.css';
import { resetPasswordRequest } from '@/lib/useAuth';
import { useToast } from '@/context/ToastContext';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

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
        <input
          className="standardInputField"
          type="email"
          name="email"
          id="forgotPasswordEmail"
          aria-label="Passwortwiederherstellung Email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="vfBtn"
          style={{ marginTop: '16px' }}
          type="submit"
          value="Send Email"
          aria-label="Send Email to restore password"
        />
      </form>
    </>
  );
};

export default ForgotPasswordForm;

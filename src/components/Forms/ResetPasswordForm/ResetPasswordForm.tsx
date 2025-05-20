import React, { useState } from 'react';
import styles from '@/components/Forms/ResetPasswordForm/ResetPasswordForm.module.css';
import { usePasswordValidation } from '@/hooks/usePasswordValidation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/useAuth';
import { useToast } from '@/context/ToastContext';

/**
 * Component for resetting the user's password using a uid and token from the URL query.
 *
 * Provides inputs for the new password and its confirmation, with toggleable visibility.
 * Validates that both password fields match and disables the submit button accordingly.
 * On successful reset, shows a toast message and redirects the user to the login page.
 * On failure, displays the error message in a toast.
 *
 * Uses the `useAuth` hook for the password reset API call and `useToast` for notifications.
 *
 * @component
 * @returns {JSX.Element} The reset password form.
 */
const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const { resetPasswordConfirm } = useAuth();
  const { uid, token } = router.query;
  const { showToast } = useToast();

  const [passwordVisibility, setPasswordVisibility] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const {
    password,
    confirmPassword,
    passwordMatchError,
    setPassword,
    setConfirmPassword,
  } = usePasswordValidation();

  const isButtonDisabled = (
    passwordMatchError: boolean,
    password: string,
    confirmPassword: string
  ) => passwordMatchError || password.length < 4 || confirmPassword.length < 4;

  const getButtonStyle = (isDisabled: boolean) => ({
    backgroundColor: isDisabled ? '#888' : '#2e3edf',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
  });

  /**
   * Toggles the visibility of the password or confirm password input field.
   *
   * Updates the `passwordVisibility` state by flipping the boolean value
   * of the specified field (`showPassword` or `showConfirmPassword`).
   *
   * @param {'showPassword' | 'showConfirmPassword'} field - The field to toggle visibility for.
   */
  const handleTogglePassword = (
    field: 'showPassword' | 'showConfirmPassword'
  ) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  /**
   * Handles the form submission for resetting the password.
   *
   * Prevents the default form submission behavior, calls the password reset confirmation API
   * with the uid, token, new password, and confirmation password.
   * If the reset is successful, shows a success toast and redirects to the login page after 2 seconds.
   * If the reset fails, shows an error message in a toast.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {Promise<void>} A promise that resolves after handling the reset logic.
   */
  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await resetPasswordConfirm(
      uid as string,
      token as string,
      password,
      confirmPassword
    );

    if (result.success) {
      showToast('Passwort erfolgreich zurückgesetzt!');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      showToast(result.message);
    }
  };

  return (
    <>
      <form className={styles.resetPasswordForm} onSubmit={handleResetPassword}>
        <span className={styles.infoText}>
          Create a new password for your{' '}
          <Link className="whiteLink" href={'/'}>
            Videoflix
          </Link>{' '}
          account.
        </span>
        <div className={styles.inputWrapper}>
          <div className="iconInputField">
            <img src="/icons/mail.png" alt="Email input" />
            <input
              className="blankInputField"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={passwordVisibility.showPassword ? 'text' : 'password'}
              name="password"
              id="resetPass"
              aria-label="Reset Password"
              placeholder="Enter a Password"
            />
            <img
              className="icon"
              src={
                passwordVisibility.showPassword
                  ? '/icons/hide-pass.png'
                  : '/icons/show-pass.png'
              }
              alt={
                passwordVisibility.showPassword
                  ? 'Hide password'
                  : 'Show password'
              }
              onClick={() => handleTogglePassword('showPassword')}
            />
          </div>
          <div className={styles.containerConfirm}>
            <div className="iconInputField">
              <img src="/icons/password.png" alt="Password input" />
              <input
                className="blankInputField"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type={
                  passwordVisibility.showConfirmPassword ? 'text' : 'password'
                }
                name="confirmpassword"
                id="resetConfirmPass"
                aria-label="Confirm Reset up Password"
                placeholder="Confirm Password"
              />
              <img
                className="icon"
                src={
                  passwordVisibility.showConfirmPassword
                    ? '/icons/hide-pass.png'
                    : '/icons/show-pass.png'
                }
                alt={
                  passwordVisibility.showConfirmPassword
                    ? 'Hide password'
                    : 'Show password'
                }
                onClick={() => handleTogglePassword('showConfirmPassword')}
              />
            </div>
            {passwordMatchError && (
              <span className={styles.matchWarning}>
                <img src="/warning.png" alt="Warning: Passwords don't match" />
                Passwords must match.
              </span>
            )}
          </div>
        </div>
        <input
          className="vfBtn"
          type="submit"
          value="Reset my password"
          disabled={isButtonDisabled(
            passwordMatchError,
            password,
            confirmPassword
          )}
          style={getButtonStyle(
            isButtonDisabled(passwordMatchError, password, confirmPassword)
          )}
        />
      </form>
    </>
  );
};

export default ResetPasswordForm;

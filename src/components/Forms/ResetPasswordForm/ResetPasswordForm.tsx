import React, { useState } from 'react';
import styles from '@/components/Forms/ResetPasswordForm/ResetPasswordForm.module.css';
import usePasswordValidation from '@/hooks/usePasswordValidation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { resetPasswordConfirm } from '@/lib/useAuth';

const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const { uid, token } = router.query;

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

  function handleTogglePassword(field: 'showPassword' | 'showConfirmPassword') {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  //TODO:  Funktionen aufräumen

  async function handleResetPassword() {
    const result = await resetPasswordConfirm(
      uid as string,
      token as string,
      password
    );

    if (result.success) {
      alert('Passwort erfolgreich zurückgesetzt!');
      router.push('/login');
    } else {
      alert(result.message);
    }
  }

  return (
    <>
      <form className={styles.resetPasswordForm}>
        <span className={styles.infoText}>
          Create a new password for your{' '}
          <Link className="blueLink" href={'/'}>
            Videoflix
          </Link>{' '}
          account.
        </span>
        <div className={styles.inputWrapper}>
          <div className="iconInputField">
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
          type="button"
          value="Reset my password"
          onClick={handleResetPassword}
        />
      </form>
    </>
  );
};

export default ResetPasswordForm;

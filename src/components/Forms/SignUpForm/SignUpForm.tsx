import React, { useEffect, useState } from 'react';
import styles from '@/components/Forms/SignUpForm/SignUpForm.module.css';
import { usePasswordValidation } from '@/hooks/usePasswordValidation';
import { useAuth } from '@/lib/useAuth';
import { useToast } from '@/context/ToastContext';
import { useEmailValidation } from '@/hooks/useEmailValidation';
import { useRouter } from 'next/router';

const SignUpForm = ({ emailInput }: { emailInput: string }) => {
  const { email, setEmail, isValid } = useEmailValidation();
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

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

  const { signUp } = useAuth();
  const { showToast } = useToast();

  const handleTogglePassword = (
    field: 'showPassword' | 'showConfirmPassword'
  ) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  useEffect(() => {
    if (emailInput && email === '') {
      setEmail(emailInput); // Nur setzen, wenn die Email noch leer ist
    }
  }, [emailInput, email, setEmail]);

  useEffect(() => {
    setIsFormValid(
      !!isValid &&
        password.length > 0 &&
        confirmPassword.length > 0 &&
        !passwordMatchError
    );
  }, [isValid, password, confirmPassword, passwordMatchError]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToast('Die Passwörter stimmen nicht überein!');
      return;
    }

    const result = await signUp(email, password, confirmPassword);

    if (result.success) {
      showToast(
        'Erfolgreich registriert! Bitte überprüfe deine E-Mails. Du wirst gleich weitergeleitet...'
      );
      setTimeout(() => {
        router.push('/login');
      }, 4000);
    } else {
      showToast(`Registrierung fehlgeschlagen: ${result.error}`);
    }
  };

  return (
    <>
      <form className={styles.signUpForm} onSubmit={handleSignUp}>
        <div className="iconInputField">
          <img src="/icons/mail.png" alt="Email input" />
          <input
            className="blankInputField"
            autoComplete="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="loginMail"
            aria-label="Login Email"
            placeholder="Email Address"
          />
        </div>
        <div className="iconInputField">
          <img src="/icons/password.png" alt="Password input" />
          <input
            className="blankInputField"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={passwordVisibility.showPassword ? 'text' : 'password'}
            name="password"
            id="loginPass"
            aria-label="Sign up Password"
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
            <img src="/icons/password.png" alt="Confirm Password input" />
            <input
              className="blankInputField"
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type={
                passwordVisibility.showConfirmPassword ? 'text' : 'password'
              }
              name="confirmpassword"
              id="loginConfirmPass"
              aria-label="Confirm Sign up Password"
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

        <button
          className="vfBtn"
          style={{
            backgroundColor: isFormValid ? '#2e3edf' : '#888',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            opacity: isFormValid ? 1 : 0.6,
          }}
          type="submit"
          disabled={!isFormValid}
        >
          Get Started
        </button>
      </form>
    </>
  );
};

export default SignUpForm;

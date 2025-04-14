import React, { useEffect, useState } from 'react';
import styles from '@/components/Forms/SignUpForm/SignUpForm.module.css';
import usePasswordValidation from '@/hooks/usePasswordValidation';
import { useAuth } from '@/lib/useAuth';
import { useToast } from '@/context/ToastContext';

const SignUpForm = ({ email }: { email: string }) => {
  const [emailInput, setEmailInput] = useState(email);

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

  function handleTogglePassword(field: 'showPassword' | 'showConfirmPassword') {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }
  useEffect(() => {
    setEmailInput(email);
  }, [email]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToast('Die Passwörter stimmen nicht überein!');
      return;
    }

    // Für dieses Beispiel verwenden wir die E-Mail auch als Username.
    const result = await signUp(emailInput, password, confirmPassword);

    if (result.success) {
      showToast('Erfolgreich registriert! Bitte überprüfe deine E-Mails.');
    } else {
      showToast(`Registrierung fehlgeschlagen: ${result.error}`);
    }
  };

  return (
    <>
      <form className={styles.signUpForm} onSubmit={handleSignUp}>
        <input
          className="standardInputField"
          autoComplete="email"
          type="email"
          name="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          id="loginMail"
          aria-label="Login Email"
          placeholder="Email Address"
        />
        <div className="iconInputField">
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

        <button className="vfBtn" type="submit">
          Get Started
        </button>
      </form>
    </>
  );
};

export default SignUpForm;

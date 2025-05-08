import React, { useEffect, useState } from 'react';
import styles from '@/components/Forms/LoginForm/LoginForm.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/useAuth';
import { useAuthContext } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import { useEmailValidation } from '@/hooks/useEmailValidation';

const LoginForm = ({ emailInput }: { emailInput: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { email, setEmail, isValid } = useEmailValidation();
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const { setIsLoggedIn } = useAuthContext();
  const { showToast } = useToast();

  useEffect(() => {
    setEmail(email);
  }, [email]);

  useEffect(() => {
    setIsFormValid(!!isValid && password.length > 4);
  }, [isValid, password]);

  const handleAuth = async (formData: FormData) => {
    const pass = formData.get('password');
    const result = await login(emailInput, pass as string);
    if (result.success) {
      setIsLoggedIn(true);
      router.push('/browse');
    } else {
      showToast(result.error as string);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <form className={styles.loginForm} action={handleAuth}>
        <div className="iconInputField">
          <img src="/icons/mail.png" alt="Email input" />
          <input
            className="blankInputField"
            type="email"
            name="email"
            value={emailInput}
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
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="loginPass"
            aria-label="Login Password"
            placeholder="Password"
          />
          <img
            className="icon"
            src={showPassword ? '/icons/hide-pass.png' : '/icons/show-pass.png'}
            alt={showPassword ? 'Hide password' : 'Show password'}
            onClick={handleShowPassword}
          />
        </div>
        <input
          className="vfBtn"
          style={{
            backgroundColor: isFormValid ? '#2e3edf' : '#888',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            opacity: isFormValid ? 1 : 0.6,
          }}
          type="submit"
          disabled={!isFormValid}
          value="Log in"
          aria-label="Submit Login"
        />
      </form>
      <div className={styles.loginFormSubContainer}>
        <Link className="whiteLink" href={'/forgotpassword'}>
          Forgot password?
        </Link>
        <div className={styles.loginFormSignUp}>
          <span className="whiteText">New to Videoflix?</span>
          <Link className="whiteLink" href={'/signup'}>
            Sign Up now
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

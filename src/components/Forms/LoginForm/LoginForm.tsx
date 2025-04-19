import React, { useEffect, useState } from 'react';
import styles from '@/components/Forms/LoginForm/LoginForm.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/useAuth';
import { useAuthContext } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

const LoginForm = ({ email }: { email: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState(email);
  const { login } = useAuth();
  const router = useRouter();
  const { setIsLoggedIn } = useAuthContext();
  const { showToast } = useToast();

  useEffect(() => {
    setEmailInput(email);
  }, [email]);

  const handleAuth = async (formData: FormData) => {
    const pass = formData.get('password');
    const result = await login(emailInput, pass as string);
    if (result.success) {
      setIsLoggedIn(true);
      router.push('/browse');
    } else {
      showToast('Login fehlgeschlagen');
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <form className={styles.loginForm} action={handleAuth}>
        <input
          className="standardInputField"
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
            type={showPassword ? 'text' : 'password'}
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
          type="submit"
          value="Log in"
          aria-label="Submit Login"
        />
      </form>
      <div className={styles.loginFormSubContainer}>
        <Link className="blueLink" href={'/forgotpassword'}>
          Forgot password?
        </Link>
        <div className={styles.loginFormSignUp}>
          <span className="blackText">New to Videoflix?</span>
          <Link className="blueLink" href={'/signup'}>
            Sign Up now
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

import React, { useState } from "react";
import styles from "@/components/LoginForm/LoginForm.module.css";
import Link from "next/link";
import useAuth from "@/lib/useAuth";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleAuth(event: React.FormEvent) {
    event.preventDefault();
    useAuth();
  }

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleAuth}>
        <input
          className="standardInputField"
          type="email"
          name="email"
          id="loginMail"
          aria-label="Login Email"
          placeholder="Email Address"
        />
        <div className="iconInputField">
          <input
            className="blankInputField"
            type={showPassword ? "text" : "password"}
            name="password"
            id="loginPass"
            aria-label="Login Password"
            placeholder="Password"
          />
          <img
            className="icon"
            src={showPassword ? "/icons/hide-pass.png" : "/icons/show-pass.png"}
            alt={showPassword ? "Hide password" : "Show password"}
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
        <Link className="blueLink" href={"/forgotpassword"}>
          Forgot password?
        </Link>
        <div className={styles.loginFormSignUp}>
          <span className="blackText">New to Videoflix?</span>
          <Link className="blueLink" href={"/forgotpassword"}>
            Sign Up now
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

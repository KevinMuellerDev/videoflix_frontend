import React from "react";
import styles from "@/components/LoginForm/LoginForm.module.css";
import Link from "next/link";

const LoginForm: React.FC = () => {
  function handleAuth(event: React.FormEvent) {
    event.preventDefault();
    return;
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
        <input
          className="standardInputField"
          type="password"
          name="password"
          id="loginPass"
          aria-label="Login Password"
          placeholder="Password"
        />
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

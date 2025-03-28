import React, { useState } from "react";
import styles from "@/components/Forms/SignUpForm/SignUpForm.module.css";

const SignUpForm: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  function handleTogglePassword(field: "showPassword" | "showConfirmPassword") {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  function handlePassChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPassword(value);
    comparePasswords(value, confirmPassword);
  }

  function handleConfPassChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setConfirmPassword(value);
    comparePasswords(password, value);
  }

  function comparePasswords(
    passwordValue: string,
    confirmPasswordValue: string
  ) {
    passwordValue !== confirmPasswordValue
      ? setPasswordMatchError(true)
      : setPasswordMatchError(false);
  }

  return (
    <>
      <form className={styles.signUpForm}>
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
            onChange={handlePassChange}
            type={passwordVisibility.showPassword ? "text" : "password"}
            name="password"
            id="loginPass"
            aria-label="Sign up Password"
            placeholder="Enter a Password"
          />
          <img
            className="icon"
            src={
              passwordVisibility.showPassword
                ? "/icons/hide-pass.png"
                : "/icons/show-pass.png"
            }
            alt={
              passwordVisibility.showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() => handleTogglePassword("showPassword")}
          />
        </div>
        <div className={styles.containerConfirm}>
          <div className="iconInputField">
            <input
              className="blankInputField"
              onChange={handleConfPassChange}
              type={
                passwordVisibility.showConfirmPassword ? "text" : "password"
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
                  ? "/icons/hide-pass.png"
                  : "/icons/show-pass.png"
              }
              alt={
                passwordVisibility.showConfirmPassword
                  ? "Hide password"
                  : "Show password"
              }
              onClick={() => handleTogglePassword("showConfirmPassword")}
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

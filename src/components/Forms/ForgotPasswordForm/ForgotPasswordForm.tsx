import React, { useState } from "react";
import styles from "@/components/Forms/ForgotPasswordForm/ForgotPasswordForm.module.css";

const ForgotPasswordForm: React.FC = () => {
  function handleSendMail() {
    return;
  }

  return (
    <>
      <form className={styles.forgotPasswordForm} onSubmit={handleSendMail}>
        <span className={styles.infoText}>
          We will send you an email with instructions to reset your password.
        </span>
        <input
          className="standardInputField"
          type="text"
          name="Email"
          id="forgotPasswordEmail"
          aria-label="Passwortwiederherstellung Email"
          placeholder="Email Address"
        />
        <input
          className="vfBtn"
          style={{ marginTop: "16px" }}
          type="button"
          value="Send Email"
          aria-label="Send Email to restore password"
        />
      </form>
    </>
  );
};

export default ForgotPasswordForm;

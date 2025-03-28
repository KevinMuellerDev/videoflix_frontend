import FormContainer from "@/components/FormContainer/FormContainer";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import useBackground from "@/hooks/useBackground";
import React from "react";
import mainStyles from "@/pages/index.module.css";

const ForgotPassword: React.FC = () => {
  useBackground({ background: "/login-bg.webp" });
  return (
    <main className={mainStyles.mainContent}>
      <FormContainer formTitle="Forgot your password?">
        <ForgotPasswordForm />
      </FormContainer>
    </main>
  );
};

export default ForgotPassword;

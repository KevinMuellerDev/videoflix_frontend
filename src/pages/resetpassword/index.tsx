import React from "react";
import useBackground from "@/hooks/useBackground";
import ResetPasswordForm from "@/components/Forms/ResetPasswordForm/ResetPasswordForm";
import FormContainer from "@/components/FormContainer/FormContainer";
import mainStyles from "@/pages/index.module.css";

const ResetPassword: React.FC = () => {
  useBackground({ background: "/login-bg.webp" });
  return (
    <main className={mainStyles.mainContent}>
      <FormContainer formTitle="Reset Password">
        <ResetPasswordForm />
      </FormContainer>
    </main>
  );
};

export default ResetPassword;

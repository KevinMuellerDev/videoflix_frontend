import React from "react";
import useBackground from "@/hooks/useBackground";
import ResetPasswordForm from "@/components/Forms/ResetPasswordForm/ResetPasswordForm";
import FormContainer from "@/components/FormContainer/FormContainer";
import mainStyles from "@/pages/index.module.css";
import Head from "next/head";

const ResetPassword: React.FC = () => {
  useBackground({ background: "/login-bg.webp" });
  return (
    <>
      <Head>
        <title>Videoflix | Reset password</title>
      </Head>
      <main className={mainStyles.mainContent}>
        <FormContainer formTitle="Reset Password">
          <ResetPasswordForm />
        </FormContainer>
      </main>
    </>
  );
};

export default ResetPassword;

import React, { useEffect } from "react";
import useBackground from "@/hooks/useBackground";
import mainStyles from "@/pages/index.module.css";
import FormContainer from "@/components/FormContainer/FormContainer";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import Head from "next/head";

const Login: React.FC = () => {
  useBackground({ background: "/login-bg.webp" });

  return (
    <>
      <Head>
        <title>Videoflix | Login</title>
      </Head>
      <main className={mainStyles.mainContent}>
        <FormContainer formTitle="Log in">
          <LoginForm />
        </FormContainer>
      </main>
    </>
  );
};

export default Login;

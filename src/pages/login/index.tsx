import React, { useEffect } from "react";
import useBackground from "@/hooks/useBackground";
import mainStyles from "@/pages/index.module.css";
import FormContainer from "@/components/FormContainer/FormContainer";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";

const Login: React.FC = () => {
  useBackground({ background: "/login-bg.webp" });

  return (
    <main className={mainStyles.mainContent}>
      <FormContainer formTitle="Log in">
        <LoginForm />
      </FormContainer>
    </main>
  );
};

export default Login;

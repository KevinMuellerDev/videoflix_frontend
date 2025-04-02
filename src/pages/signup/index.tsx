import React, { useEffect } from "react";
import useBackground from "@/hooks/useBackground";
import mainStyles from "@/pages/index.module.css";
import FormContainer from "@/components/FormContainer/FormContainer";
import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import Head from "next/head";

const SignUp: React.FC = () => {
  useBackground({ background: "/signup-bg.webp" });

  return (
    <>
      <Head>
        <title>Videoflix | Sign up</title>
      </Head>
      <main className={mainStyles.mainContent}>
        <FormContainer formTitle="Sign Up">
          <SignUpForm />
        </FormContainer>
      </main>
    </>
  );
};

export default SignUp;

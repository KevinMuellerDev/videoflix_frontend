import React, { useEffect, useState } from "react";
import useBackground from "@/hooks/useBackground";
import mainStyles from "@/pages/index.module.css";
import FormContainer from "@/components/FormContainer/FormContainer";
import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import Head from "next/head";
import { useRouter } from "next/router";

const SignUp: React.FC = () => {
  useBackground({ background: "/signup-bg.webp" });
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.email) setEmail(decodeURIComponent(router.query.email as string))
  }, [router.query.email])

  return (
    <>
      <Head>
        <title>Videoflix | Sign up</title>
      </Head>
      <main className={mainStyles.mainContent}>
        <FormContainer formTitle="Sign Up">
          {email}
          <SignUpForm email={email} />
        </FormContainer>
      </main>
    </>
  );
};

export default SignUp;

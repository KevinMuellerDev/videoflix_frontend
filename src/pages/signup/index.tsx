import React, { useEffect, useState } from 'react';
import useBackground from '@/hooks/useBackground';
import mainStyles from '@/pages/index.module.css';
import FormContainer from '@/components/FormContainer/FormContainer';
import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * SignUp Page
 *
 * Renders the sign-up page of the application. It displays a background image,
 * sets the page title, and shows a styled sign-up form within a reusable form container.
 * If an `email` is provided as a query parameter (e.g. via redirect), it is pre-filled into the form.
 */
const SignUp: React.FC = () => {
  useBackground({ background: '/signup-bg.webp' });
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.email)
      setEmail(decodeURIComponent(router.query.email as string));
  }, [router.query.email]);

  return (
    <>
      <Head>
        <title>Videoflix | Sign up</title>
      </Head>
      <main className={mainStyles.mainContent}>
        <FormContainer formTitle="Sign Up">
          <SignUpForm emailInput={email} />
        </FormContainer>
      </main>
    </>
  );
};

export default SignUp;

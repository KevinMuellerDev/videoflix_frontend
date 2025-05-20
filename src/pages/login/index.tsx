import React, { useEffect, useState } from 'react';
import useBackground from '@/hooks/useBackground';
import mainStyles from '@/pages/index.module.css';
import FormContainer from '@/components/FormContainer/FormContainer';
import LoginForm from '@/components/Forms/LoginForm/LoginForm';
import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * Login Page
 *
 * Renders the login form with a themed background image.
 * If an email is provided in the URL query parameters, it is prefilled in the form.
 * Sets the appropriate page title and wraps content in a consistent form layout.
 */
const Login: React.FC = () => {
  useBackground({ background: '/login-bg.webp' });
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.email)
      setEmail(decodeURIComponent(router.query.email as string));
  }, [router.query.email]);

  return (
    <>
      <Head>
        <title>Videoflix | Login</title>
      </Head>
      <main className={mainStyles.mainContent}>
        <FormContainer formTitle="Log in">
          <LoginForm emailInput={email} />
        </FormContainer>
      </main>
    </>
  );
};

export default Login;

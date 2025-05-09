import React, { useEffect, useState } from 'react';
import useBackground from '@/hooks/useBackground';
import mainStyles from '@/pages/index.module.css';
import FormContainer from '@/components/FormContainer/FormContainer';
import LoginForm from '@/components/Forms/LoginForm/LoginForm';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
          <LoginForm email={email} />
        </FormContainer>
      </main>
    </>
  );
};

export default Login;

// src/pages/activate/index.tsx
import { API_BASE_URL } from '@/config';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import mainStyles from '@/pages/index.module.css';
import useBackground from '@/hooks/useBackground';
import Head from 'next/head';

const Activate = () => {
  const router = useRouter();
  const { uid, token } = router.query;
  const { showToast } = useToast();
  const [checkState, setCheckState] = useState(false);
  useBackground({ background: '/login-bg.webp' });

  useEffect(() => {
    if (uid && token) {
      fetch(API_BASE_URL + '/auth/users/activation/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, token }),
      }).then((res) => {
        if (res.ok) {
          router.push('/login');
        } else {
          showToast(
            'Aktivierung fehlgeschlagen. \n Sie werden auf die Startseite weitergeleitet'
          );
          setTimeout(() => {
            router.push('/');
          }, 3000);
        }
      });
    }
  }, [uid, token]);

  return (
    <>
      <Head>
        <title>Videoflix | Login</title>
      </Head>
      <main className={mainStyles.mainContent}>
        {!checkState && (
          <p style={{ justifyContent: 'center' }} className="loader">
            Checking...
          </p>
        )}
      </main>
    </>
  );
};

export default Activate;

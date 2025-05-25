import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/config/video-setup';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/Footer';
import { ToastProvider } from '@/context/ToastContext';
import { AuthProvider } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const hideOnVideoPage = router.pathname.includes('/videopage');
  const hideOnActivate = router.pathname.includes('/activate');

  return (
    <>
      <AuthProvider>
        <ToastProvider>
          {!(hideOnVideoPage || hideOnActivate) && <Header />}
          <Component {...pageProps} />
          {!hideOnVideoPage && <Footer />}
        </ToastProvider>
      </AuthProvider>
    </>
  );
};

export default App;

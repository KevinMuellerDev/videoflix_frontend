import '@/styles/globals.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/Footer';
import { ToastProvider } from '@/context/ToastContext';
import { AuthProvider } from '@/context/AuthContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ToastProvider>
      </AuthProvider>
    </>
  );
};

export default App;

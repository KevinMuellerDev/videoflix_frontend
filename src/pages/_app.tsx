import '@/styles/globals.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/Footer';
import { ToastProvider } from '@/context/ToastContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ToastProvider>
    </>
  );
}

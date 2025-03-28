import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

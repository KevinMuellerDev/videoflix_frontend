import "@/styles/globals.css";
import "@/styles/fonts.css"
import type { AppProps } from "next/app";
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

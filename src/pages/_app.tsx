import Header from "@/components/Header/header";
import "@/styles/globals.css";
import "@/styles/fonts.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

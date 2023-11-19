import { AppProps } from "next/app";
import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
      <ToastContainer theme="dark" />
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/navbar";
import styles from "../styles/Home.module.css";
import Footer from "../component/footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

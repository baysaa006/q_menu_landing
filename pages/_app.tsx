import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/navbar";
import styles from "../styles/Home.module.css";
import Footer from "../component/footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

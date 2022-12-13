import Navbar from "../component/navbar";
import Hero from "../component/hero";
import styles from "../styles/navbar.module.css";
import Features_2 from "../component/feature_2";
import Features from "../component/features";
import Features_1 from "../component/feature_1";

export default function Home() {
  return (
    <>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.feature1}>
        <Features_1 />
      </div>
      <div className={styles.feature1}>
        <Features_2 />
      </div>
      <div className={styles.features}>
        <Features />
      </div>
    </>
  );
}

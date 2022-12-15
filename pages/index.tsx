import Navbar from "../component/navbar";
import Hero from "../component/hero";
import styles from "../styles/Home.module.css";
import Features_2 from "../component/feature_2";
import Features from "../component/features";
import Features_1 from "../component/feature_1";
import Slider from "../component/image_slider";
import main1 from "../public/img/main1.jpg";
import main2 from "../public/img/main2.jpg";
import main3 from "../public/img/main3.jpg";
import main4 from "../public/img/main4.jpg";
import Dashboard from "../component/dashboard";
import Pricing from "../component/pricing/pricing";
import { useState } from "react";
import Partners from "../component/partners";
import Comment from "../component/comments/comment";
import Contact from "../component/contact";
import Footer from "../component/footer";
export default function Home() {
  const images = [main1, main2, main3, main4];
  const [active, setActive] = useState("#");

  return (
    <>
      <div id="navbar" className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.slider}>
        <Slider imageList={images} height={undefined} width={undefined} />
      </div>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div id="feature_1" className={styles.feature1}>
        <Features_1 />
      </div>
      <div id="feature_2" className={styles.feature1}>
        <Features_2 />
      </div>
      <div className={styles.features}>
        <Features />
      </div>
      <div className={styles.dash}>
        <Dashboard />
      </div>
      <div id="pricing" className={styles.pricing}>
        <Pricing />
      </div>
      <div id="partners" className={styles.partners}>
        <Partners />
      </div>
      <div id="comment" className={styles.commment}>
        <Comment />
      </div>
      <div id="contact" className={styles.contact}>
        <Contact />
      </div>
      <div id="footer" className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

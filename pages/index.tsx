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
import Partners from "../component/partners";
import Comment from "../component/comments/comment";
import Contact from "../component/contact/contact";
import Head from "next/head";
export default function Home() {
  const images = [main1, main2, main3];
  return (
    <>
      <Head>
        <title>Рестораны цогц систем - Q-menu -Зайнаас захиалъя, төлье </title>
        <link rel="icon " href="../logo.ico" />
        <link rel="canonical" hrefLang="mn" href="https://qmenu.mn" />
        <meta name="geo.placename" content="Mongolia"></meta>
        <meta
          name="description"
          content="Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс юм."
        ></meta>
      </Head>

      <div className={styles.slider}>
        <Slider imageList={images} />
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
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

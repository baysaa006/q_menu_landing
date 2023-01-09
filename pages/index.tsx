import Hero from "../component/hero";
import styles from "../styles/Home.module.css";
import Slider from "../component/image_slider";
import main1 from "../public/img/1.svg";
import main2 from "../public/img/2.svg";
import main3 from "../public/img/3.svg";
import main4 from "../public/img/main4.jpg";
import Dashboard from "../component/dashboard";
import Pricing from "../component/pricing/pricing";
import Partners from "../component/partners";
import Comment from "../component/comments/comment";
import Contact from "../component/contact/contact";
import Head from "next/head";
import Fag from "../component/fag";
import useWindowDimensions from "../component/pricing/use_width";
import WebFeature from "../component/feature/webFeature";
import PhoneFeature from "../component/feature/phoneFeature";
import Features from "../component/feature/features";
export default function Home() {
  const images = [main1, main2, main3];
  return (
    <>
      <Head>
        <title>Рестораны цогц систем | Q-menu | Зайнаас захиалъя, төлье </title>
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
      <div id="solution" className={styles.hero}>
        <Hero />
      </div>
      <div id="features" className={styles.features}>
        <Features />
      </div>
      <div id="" className={styles.dash}>
        <Dashboard />
      </div>
      <div>
        <Partners />
      </div>
      <div id="pricing" className={styles.pricing}>
        <Pricing />
      </div>

      <div id="comment" className={styles.commment}>
        <Comment />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="fag" className={styles.commment}>
        <Fag />
      </div>
    </>
  );
}

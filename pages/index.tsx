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
import { motion, Variants } from "framer-motion";

import Features from "../component/feature/features";
import { animate, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const images = [main1, main2, main3];

  function Section(props: { children: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {props.children}
        </div>
      </section>
    );
  }

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
      <Section>
        {" "}
        <Slider imageList={images} />
      </Section>

      <div id="solution" className={styles.hero}>
        <Hero />
      </div>
      <Section>
        {" "}
        <div id="features" className={styles.features}>
          <Features />
        </div>
      </Section>
      <Section>
        <div id="" className={styles.dash}>
          <Dashboard />
        </div>
      </Section>
      <Section>
        <div>
          <Partners />
        </div>
      </Section>
      <Section>
        {" "}
        <div id="pricing" className={styles.pricing}>
          <Pricing />
        </div>
      </Section>

      <Section>
        <div id="comment" className={styles.commment}>
          <Comment />
        </div>
      </Section>
      <Section>
        {" "}
        <div id="contact">
          <Contact />
        </div>
      </Section>
    </>
  );
}

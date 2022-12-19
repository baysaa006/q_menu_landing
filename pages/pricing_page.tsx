import Head from "next/head";
import React from "react";

import Pricing_desktop from "../component/pricing/pricing_detail";
import styles from "../styles/pricing/pricing_page.module.css";

export default function Pricing_page() {
  return (
    <>
      <Head>
        <title>Q-Menu | Үнийн санал</title>
        <link rel="icon " href="../logo.ico" />
        <link rel="canonical" href="https://qmenu.mn/pricing_page" />
        <meta
          name="desription"
          content="Үнийн санлыг сар, улирал, жилээр харицуулан харах"
          lang="mn"
        ></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Үнийн санал</h3>
          <h1>Багцаа сонгоод шууд ашигла</h1>
          <h4> Өөрийн хэрэгцээнд тохирсон багцыг сонгоорой</h4>
        </div>
        <div className={styles.pricing_desktop}>
          <Pricing_desktop />
        </div>
      </div>
    </>
  );
}

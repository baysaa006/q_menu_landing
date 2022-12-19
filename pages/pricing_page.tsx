import React from "react";
import Navbar from "../component/navbar";
import Nav from "../component/navbar";
import Pricing_desktop from "../component/pricing/pricing_detail";
import Pricing_phone from "../component/pricing/pricing_phone";
import styles from "../styles/pricing/pricing_page.module.css";

export default function Pricing_page() {
  return (
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
  );
}

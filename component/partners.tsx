import React from "react";
import styles from "../styles/partners.module.css";
import Image from "next/image";
import partner1 from "../public/img/partners1.jpg";
import partner2 from "../public/img/partners2.jpg";

import partner3 from "../public/img/partners3.jpg";

import partner4 from "../public/img/partners4.jpg";

import partner5 from "../public/img/partners5.jpg";

import partner6 from "../public/img/partners6.jpg";

import partner7 from "../public/img/partners7.jpg";

export default function Partners() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Хамтрагчид</h3>
        <h1>Итгэл хүлээлгэсэн хамтрагчид</h1>
      </div>
      <div className={styles.main}>
        <div id="first" className={styles.partners}>
          <Image src={partner1} alt=""></Image>
        </div>
        <div id="second" className={styles.partners}>
          <Image src={partner2} alt=""></Image>
        </div>
        <div id="third" className={styles.partners}>
          <Image src={partner3} alt=""></Image>
        </div>
        <div id="fourth" className={styles.partners}>
          <Image src={partner4} alt=""></Image>
        </div>
        <div id="fifth" className={styles.partners}>
          <Image src={partner5} alt=""></Image>
        </div>
        <div id="sixth" className={styles.partners}>
          <Image src={partner6} alt=""></Image>
        </div>
        <div id="sixth" className={styles.partners}>
          <Image src={partner7} alt=""></Image>
        </div>
      </div>
    </div>
  );
}

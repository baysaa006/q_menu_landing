import React from "react";
import styles from "../styles/partners.module.css";
import Image from "next/image";
import partner1 from "../public/img/partner1.svg";
import partner2 from "../public/img/partner2.svg";

import partner3 from "../public/img/partner3.svg";

import partner4 from "../public/img/partner4.svg";

import partner5 from "../public/img/partner5.svg";

import partner6 from "../public/img/partner6.svg";

import partner7 from "../public/img/partner7.svg";

export default function Partners() {
  return (
    <div className={styles.container}>
      <div className={styles.partner}>
        {" "}
        <Image className={styles.partnerImg} src={partner1} alt="partner" />
      </div>
      <div className={styles.partner}>
        {" "}
        <Image className={styles.partnerImg} src={partner2} alt="partner" />
      </div>{" "}
      <div className={styles.partner}>
        {" "}
        <Image className={styles.partnerImg} src={partner3} alt="partner" />
      </div>{" "}
      <div className={styles.partner}>
        {" "}
        <Image className={styles.partnerImg} src={partner4} alt="partner" />
      </div>{" "}
      <div className={styles.partner}>
        {" "}
        <Image className={styles.partnerImg} src={partner5} alt="partner" />
      </div>{" "}
      <div className={styles.partner}>
        {" "}
        <Image className={styles.partnerImg} src={partner6} alt="partner" />
      </div>{" "}
    </div>
  );
}

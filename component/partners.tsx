import React from "react";
import styles from "../styles/partners.module.css";
import Image from "next/image";
import partner1 from "../public/img/partner1.svg";
import partner2 from "../public/img/partner2.svg";

import partner3 from "../public/img/partner3.svg";

import partner4 from "../public/img/partner4.svg";

import partner5 from "../public/img/partner5.svg";

import partner6 from "../public/img/partner6.svg";

export default function Partners() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner1}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner2}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner3}
            height="100"
            width="250"
            alt=""
          />
        </div>

        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner4}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner5}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner6}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner1}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner2}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner3}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner4}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner5}
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            className={styles.img}
            src={partner6}
            height="100"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

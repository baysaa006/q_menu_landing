import React from "react";
import styles from "../styles/dashboard.module.css";
import dash1 from "../public/icons/dash1.svg";
import dash2 from "../public/icons/dash2.svg";
import dash3 from "../public/icons/dash3.svg";
import Image from "next/image";
import qr from "../public/img/karoeke.svg";
import karoake from "../public/img/qr.svg";
import dash from "../public/img/dash.png";
import Analytic from "./animations/analytic";
import Speed from "./animations/speed";
import File from "./animations/file";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>

      <div className={styles.header}>
        <h1 className={styles.headText}>
          {" "}
          <strong>ОНЦЛОХ БҮТЭЭГДЭХҮҮН</strong>
          <br />
          KARAOKE НОМ
        </h1>{" "}
      </div>
      <div className={styles.small_con}>
        <div className={styles.left}>
          <div className={styles.row}>
            {" "}
            <Analytic />
            <h4>Ресторан доторх захиалга</h4>
          </div>
          <div className={styles.row}>
            {" "}
            <Speed />
            <h4>Урьдчилсан захиалга</h4>
          </div>
          <div className={styles.row}>
            {" "}
            <File />
            <h4>Хүргэлт</h4>
          </div>
        </div>
        <div className={styles.rigth}>
          <Image className={styles.karoake} alt="karoake" src={karoake} />
          <div className={styles.qr}>
            <Image alt="qr" src={qr} />
            <h2 className={styles.qrText}>Та QR кодыг уншуулан туршаад үзээрэй</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

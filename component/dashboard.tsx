import React from "react";
import styles from "../styles/dashboard.module.css";
import dash1 from "../public/icons/dash1.svg";
import dash2 from "../public/icons/dash2.svg";
import dash3 from "../public/icons/dash3.svg";
import Image from "next/image";
import dash from "../public/img/dash.png";
import Analytic from "./animations/analytic";
import Speed from "./animations/speed";
import File from "./animations/file";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Ашиглахад хялбар хяналтын самбар</h1>
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
          <Image className={styles.feature_img} alt="dash" src={dash} />
        </div>
      </div>
    </div>
  );
}

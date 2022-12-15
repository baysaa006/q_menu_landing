import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import logo from "../public/img/logo.png";
import phone from "../public/icons/phone.svg";
import email from "../public/icons/email.svg";
import map from "../public/icons/map.svg";
import link from "../public/icons/linkedin.svg";
import face from "../public/icons/facebook.svg";
import insta from "../public/icons/Twitter.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.row}>
          <Image className={styles.logo} src={logo} alt="logo" />
          <h4 className={styles.ps}>
            Our dashboard is desperately waiting for you to test it and bring
            you new touch to the way you are working with data
          </h4>
        </div>
        <div className={styles.row}>
          <a className={styles.title}>
            <h4 className={styles.p}>Бүтээгдэхүүн</h4>
          </a>
          <a href="#feature_1">
            <h4 className={styles.p}>УХААЛАГ QR ЦЭС</h4>
          </a>
          <a href="#feature_2">
            <h4 className={styles.p}>КАССЫН СИСТЕМ</h4>
          </a>
          <a href="#features">
            <h4 className={styles.p}>НЭМЭЛТ ШИЙДЭЛҮҮД</h4>
          </a>
        </div>
        <div className={styles.row}>
          {" "}
          <a className={styles.title}>
            <h4 className={styles.p}>Бидний талаар</h4>
          </a>
        </div>
        <div className={styles.row}>
          {" "}
          <a className={styles.title}>
            <h4 className={styles.p}>Бидэнтэй холбогдох</h4>
          </a>
          <a className={styles.connect} href="#feature_1">
            <Image className={styles.social_logo} src={phone} alt="" />
            <h4 className={styles.p}> 77772040</h4>
          </a>
          <a className={styles.connect} href="#feature_1">
            {" "}
            <Image className={styles.social_logo} src={email} alt="" />
            <h4 className={styles.p}> info@qmenu.mn</h4>
          </a>
          <a className={styles.connect} href="#feature_1">
            {" "}
            <Image className={styles.social_logo} src={map} alt="" />
            <h4 className={styles.p}>
              Рояал плаза барилга,БЗД, 26-р хороо,Улаанбаатар хот, Монгол улс.
            </h4>
          </a>
        </div>
      </div>
      <div className={styles.side}>
        <ul className={styles.social}>
          <li>
            <a href="">
              <Image src={face} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={insta} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={link} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import logo from "../public/img/logo.png";
import phone from "../public/icons/phone.svg";
import email from "../public/icons/email.svg";
import map from "../public/icons/map.svg";
import link from "../public/icons/link.svg";
import face from "../public/icons/facebook.svg";
import insta from "../public/icons/Twitter.svg";
import Head from "next/head";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.row}>
          <Image className={styles.logo} src={logo} alt="logo" />
          <h2>
            Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх
            боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс
            юм.
          </h2>
        </div>
        <div className={styles.row}>
          {" "}
          <h2 className={styles.p}>Бидэнтэй холбогдох</h2>
          <a className={styles.connect} href="tel:+(976)77772040">
            <Image className={styles.direct} src={phone} alt="" />
            <h2 className={styles.p}> 77772040</h2>
          </a>
          <a className={styles.connect} href="#contact">
            {" "}
            <Image className={styles.direct} src={email} alt="" />
            <h2 className={styles.p}> info@qmenu.mn</h2>
          </a>
          <a
            className={styles.connect}
            href="https://goo.gl/maps/TKn3ayYcjY6FrMk7A"
            target="_blank"
          >
            {" "}
            <Image className={styles.direct} src={map} alt="" />
            <h2 className={styles.p}>
              Рояал плаза барилга,БЗД, 26-р хороо, <br />
              Улаанбаатар хот, Монгол улс.
            </h2>
          </a>
        </div>
      </div>
      <div className={styles.side}>
        <h2>© 2023 Qmenu, LLC.</h2>
      </div>
    </div>
  );
}

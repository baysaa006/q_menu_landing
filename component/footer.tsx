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

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.row}>
          <Image className={styles.logo} src={logo} alt="logo" />
          <h4>
            Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх
            боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс
            юм.
          </h4>
        </div>
        <div className={styles.row}>
          <h4 className={styles.p}>Бүтээгдэхүүн</h4>

          <a href="#feature_1">
            <h4 className={styles.p}>Ухаалаг QR цэс</h4>
          </a>
          <a href="#feature_2">
            <h4 className={styles.p}>Кассын систем</h4>
          </a>
          <a href="#features">
            <h4 className={styles.p}>Нэмэлт шийдэлүүд</h4>
          </a>
        </div>

        <div className={styles.row}>
          {" "}
          <h4 className={styles.p}>Бидэнтэй холбогдох</h4>
          <a className={styles.connect} href="tel:+(976)77772040">
            <Image className={styles.direct} src={phone} alt="" />
            <h4 className={styles.p}> 77772040</h4>
          </a>
          <a className={styles.connect} href="#contact">
            {" "}
            <Image className={styles.direct} src={email} alt="" />
            <h4 className={styles.p}> info@qmenu.mn</h4>
          </a>
          <a
            className={styles.connect}
            href="https://goo.gl/maps/TKn3ayYcjY6FrMk7A"
            target="_blank"
          >
            {" "}
            <Image className={styles.direct} src={map} alt="" />
            <h4 className={styles.p}>
              Рояал плаза барилга,БЗД, 26-р хороо, <br />
              Улаанбаатар хот, Монгол улс.
            </h4>
          </a>
        </div>
      </div>
      <div className={styles.side}>
        <ul className={styles.social}>
          <li>
            <a
              aria-label="Read more about QmenuDigitalMenu "
              href="https://www.facebook.com/QmenuDigitalMenu"
              target="_blank"
            >
              <Image className={styles.social_logo} src={face} alt="" />
            </a>
          </li>
          <li>
            <Image className={styles.social_logo} src={insta} alt="" />
          </li>
          <li>
            <Image className={styles.social_logo} src={link} alt="" />
          </li>
        </ul>
        <h4>© 2022 Q-Menu, LLC.</h4>
      </div>
    </div>
  );
}

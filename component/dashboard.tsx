import React from "react";
import styles from "../styles/dashboard.module.css";
import logo from "../public/img/logo.png";
import Image from "next/image";
import qr from "../public/img/karoeke.svg";
import karoake from "../public/img/qr.svg";

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
        <Image className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.small_con}>
        <div className={styles.left}>
          <div>
            <p>
              Уг шийдэл нь <strong>Караоке бизнес эрхлэгч</strong> нарт
              зориулсан бөгөөд өдөр тутамд тулгардаг жижиг мэт боловч төвөгтэй
              олон асуудлыг шийдэхэд туслана.{" "}
            </p>
          </div>
          <div>
            <ul className={styles.order}>
              <li>
                <h4>Хэрэглэгч аппликешн суулгах шаардлагагүй</h4>
              </li>
              <li>
                <h4>Сар бүр шинэ дуунууд санд нэмэгдэнэ</h4>
              </li>
              <li>
                <h4>Дуучин, дууны нэрээр хайлт хийнэ</h4>
              </li>
              <li>
                <h4>Некст, Соёмбо бүх төрлийн кодтой дуу</h4>
              </li>
              <li>
                <h4>Зөөгч дуудах, захиалга өгөх боломжтой</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rigth}>
          <Image className={styles.karoake} alt="karoake" src={karoake} />
          <div className={styles.qr}>
            <Image alt="qr" src={qr} />
            <h2 className={styles.qrText}>
              Та QR кодыг уншуулан туршаад үзээрэй
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

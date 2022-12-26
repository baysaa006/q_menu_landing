import React from "react";
import styles from "../styles/feature_1.module.css";
import check from "../public/icons/Check-mark.svg";
import Image from "next/image";
import next_arrow from "../public/icons/next_arrow.svg";
import feature from "../public/img/feature_1.png";
import Head from "next/head";
import useScrollPosition from "./pricing/use_scroll";
import Check from "./animations/check";

export default function Features_1() {
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Бүтээгдэхүүн</h3>
        <h1>Рестораны бүх шийдлийг нэг дороос</h1>
      </div>
      <div className={styles.small_con}>
        <div className={styles.left}>
          <h4 className={styles.name_of_feature}>УХААЛАГ QR ЦЭС</h4>
          <h1 className={styles.title_of_feature}>Захиалга хийх шинэ арга</h1>
          <p className={styles.description_of_feature}>
            Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх
            боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс
            юм.
          </p>
          <ul>
            <li className={styles.row}>
              {" "}
              <Check /> <h4>Ресторан доторх захиалга</h4>
            </li>
            <li className={styles.row}>
              {" "}
              <Check /> <h4>Урьдчилсан захиалга</h4>
            </li>

            <li className={styles.row}>
              {" "}
              <Check />
              <h4>Хүргэлт</h4>
            </li>
          </ul>
          <button className={styles.start}>
            <h4 className={styles.text}> Эхлэх</h4>

            <Image alt="down" src={next_arrow} />
          </button>
        </div>

        <div className={styles.rigth}>
          <Image className={styles.feature_img} alt="feature_1" src={feature} />
        </div>
      </div>
    </div>
  );
}

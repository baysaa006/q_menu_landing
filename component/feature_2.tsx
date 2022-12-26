import React from "react";
import styles from "../styles/feature_2.module.css";
import Image from "next/image";
import check from "../public/icons/Check-mark.svg";
import right_arrow from "../public/icons/right_arrow.svg";
import feature from "../public/img/feature_2.png";
import useScrollPosition from "./pricing/use_scroll";
import Check from "./animations/check";

export default function Feature_2() {
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;
  return (
    <div className={styles.container}>
      <div className={styles.small_con}>
        <div className={styles.rigth}>
          {" "}
          <Image className={styles.feature_img} alt="feature_2" src={feature} />
        </div>

        <div className={styles.left}>
          <h4 className={styles.name_of_feature}>КАССЫН СИСТЕМ</h4>
          <h1 className={styles.title_of_feature}>
            Захиалгыг боловсруулах систем
          </h1>
          <p className={styles.description_of_feature}>
            Бэлэн мөнгөний систем нь биет бэлэн мөнгө, гарын авлагын бүртгэлийг
            ашиглан санхүүгийн гүйлгээ хийх, мөнгөний урсгалыг удирдах арга юм.
          </p>
          <ul>
            <li className={styles.row}>
              {" "}
              <Check />
              <h4>Ресторан доторх захиалга</h4>
            </li>
            <li className={styles.row}>
              {" "}
              <Check />
              <h4>Урьдчилсан захиалга</h4>
            </li>

            <li className={styles.row}>
              {" "}
              <Check />
              <h4>Хүргэлт</h4>
            </li>
          </ul>
          <button className={styles.start}>
            <Image className={styles.arrow} alt="down" src={right_arrow} />
            <h4 className={styles.text}> Эхлэх</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

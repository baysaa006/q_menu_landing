import React from "react";
import styles from "../styles/feature_1.module.css";
import check from "../public/icons/Check-mark.svg";
import Image from "next/image";
import next_arrow from "../public/icons/next_arrow.svg";

export default function Features_1() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Бүтээгдэхүүн</h3>
        <h1>Рестораны бүх шийдлийг нэг дороос</h1>
      </div>
      <div className={styles.small_con}>
        <div className={styles.left}>
          <h3 className={styles.name_of_feature}>УХААЛАГ QR ЦЭС</h3>
          <h1 className={styles.title_of_feature}>Захиалга хийх шинэ арга</h1>
          <p className={styles.description_of_feature}>
            Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх
            боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс
            юм.
          </p>
          <ul>
            <li className={styles.row}>
              {" "}
              <Image alt="down" src={check} />
              <h4>Ресторан доторх захиалга</h4>
            </li>
            <li className={styles.row}>
              {" "}
              <Image alt="down" src={check} />
              <h4>Урьдчилсан захиалга</h4>
            </li>

            <li className={styles.row}>
              {" "}
              <Image alt="down" src={check} />
              <h4>Хүргэлт</h4>
            </li>
          </ul>
          <button className={styles.start}>
            <h4> Эхлэх</h4>

            <Image alt="down" src={next_arrow} />
          </button>
        </div>
        <div className={styles.rigth}>sss</div>
      </div>
    </div>
  );
}

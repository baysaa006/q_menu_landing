import React from "react";
import styles from "../styles/feature_2.module.css";
import Image from "next/image";
import check from "../public/icons/Check-mark.svg";
import right_arrow from "../public/icons/right_arrow.svg";

export default function Feature_2() {
  return (
    <div className={styles.small_con}>
      <div className={styles.rigth}>sss</div>
      <div className={styles.left}>
        <h3 className={styles.name_of_feature}>КАССЫН СИСТЕМ</h3>
        <h1 className={styles.title_of_feature}>
          Захиалгыг боловсруулах систем
        </h1>
        <p className={styles.description_of_feature}>
          Qmenu нэвтрүүлснээр зөөгчийн тоо бууруулах боломжтой болно. Мөн
          хэвлэмэл меню арчлах дахин хэвлэхтэй холбоотой зардлууд байхгүй болно
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
          <Image className={styles.arrow} alt="down" src={right_arrow} />
          <h4> Эхлэх</h4>
        </button>
      </div>
    </div>
  );
}

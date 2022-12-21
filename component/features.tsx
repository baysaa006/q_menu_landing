import React from "react";
import styles from "../styles/features.module.css";
import Image from "next/image";
import diagram from "../public/icons/diagram.svg";
import dash from "../public/icons/dash.svg";
import invoice from "../public/icons/invoice.svg";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Нэмэлт шийдэлүүд </h3>
        <h1>Шинэ шийдэлүүд таны хэрэгцээнд зориулж</h1>
      </div>
      <div className={styles.small_con}>
        <div className={styles.box}>
          <Image className={styles.feature_icon} src={diagram} alt="diagram" />
          <h4>Андройд Касс</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis officiis fuga delectus cumque laudantium.
          </p>
        </div>
        <div className={styles.box}>
          {" "}
          <Image className={styles.feature_icon} src={dash} alt="diagram" />
          <h4>Гал тогооны удирдлага</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis officiis fuga delectus cumque laudantium.
          </p>
        </div>
        <div className={styles.box}>
          {" "}
          <Image className={styles.feature_icon} src={invoice} alt="diagram" />
          <h4>Киоск-Self ordering</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis officiis fuga delectus cumque laudantium.
          </p>
        </div>
        <div className={styles.box}>
          {" "}
          <Image className={styles.feature_icon} src={invoice} alt="diagram" />
          <h4>Караоке</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis officiis fuga delectus cumque laudantium.
          </p>
        </div>
        <div className={styles.box}>
          {" "}
          <Image className={styles.feature_icon} src={invoice} alt="diagram" />
          <h4>Киоск-Self ordering</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis officiis fuga delectus cumque laudantium.
          </p>
        </div>
        <div className={styles.box}>
          {" "}
          <Image className={styles.feature_icon} src={invoice} alt="diagram" />
          <h4>Киоск-Self ordering</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis officiis fuga delectus cumque laudantium.
          </p>
        </div>
      </div>
    </div>
  );
}

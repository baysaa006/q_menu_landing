import React from "react";
import styles from "../styles/features.module.css";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>НЭМЭЛТ ШИЙДЭЛҮҮД</h5>
        <h1>Шинэ шийдэлүүд таны хэрэгцээнд зориулж</h1>
      </div>
      <div className={styles.small_con}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}

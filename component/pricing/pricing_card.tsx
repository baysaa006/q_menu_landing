import React from "react";
import styles from "../../styles/pricing/pricing_card.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import router from "next/router";
interface data {
  price: string;
  year: string;
  name: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  description: string;
}
export default function Pricing_card(props: data) {
  const {
    price,
    year,
    benefit1,
    benefit2,
    benefit3,
    name,
    description,
    ...other
  } = props;

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <h4>{}</h4>
      <div className={styles.customs}>
        <h1>₮{price}</h1>
        <h4>Сараар {year}</h4>
      </div>
      <a href="tel:+77772040" className={styles.button}>
        Холбогдох
      </a>

      <div className={styles.details}>
        {" "}
        <h4 className={styles.detail_name}>{name} багцанд дараах:</h4>
        <div className={styles.detail}>
          <Image src={check} alt={""} />
          <h4>{benefit1}</h4>
        </div>
        <div className={styles.detail}>
          <Image src={check} alt={""} />
          <h4>{benefit2}</h4>
        </div>
        <div className={styles.detail}>
          <Image src={check} alt={""} />
          <h4>{benefit3}</h4>
        </div>
      </div>
      <button
        onClick={() => router.push(`/pricing_page`)}
        className={styles.button}
      >
        Дэлгэрэнгүй
      </button>
    </div>
  );
}

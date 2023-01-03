import React from "react";
import styles from "../../styles/pricing/pricing_card.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import router from "next/router";
import Check from "../animations/check";
import Phone from "../animations/phone";
interface data {
  price: string;
  name: string;
  benefit4: string;

  benefit1: string;
  benefit2: string;
  benefit3: string;
  description: string;
}
export default function Pricing_card(props: data) {
  const {
    price,
    benefit1,
    benefit2,
    benefit3,
    name,
    description,
    benefit4,
    ...other
  } = props;

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <h4>{}</h4>
      <div className={styles.customs}>
        <h1>₮{price}</h1>
      </div>
      <a href="tel:+(976)77772040" className={styles.call}>
        <Phone />
        Холбогдох
      </a>
      <div className={styles.details}>
        {" "}
        <h4 className={styles.detail_name}>{name} багцанд дараах:</h4>
        <div className={styles.detail}>
          <Image src={check} alt={""} />
          <h4>{benefit4}</h4>
        </div>
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

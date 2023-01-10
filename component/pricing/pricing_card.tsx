import React from "react";
import styles from "../../styles/pricing/pricing_card.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import rec from "../../public/icons/rec.svg";

import router from "next/router";

interface data {
  price: string;
  name: string;
  benefit4: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit5: string;
  description: string;
  recPic: boolean;
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
    benefit5,
    recPic,
    ...other
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.nameDiv}>
        {" "}
        <h3 className={styles.name}>
          <strong>{name}</strong>
        </h3>
        {recPic && <Image className={styles.rec} src={rec} alt="rec" />}
      </div>
      <div className={styles.price}>
        {" "}
        <p className={styles.priceText}>{price} </p>
        <p className={styles.tugrug}>төгрөг</p>
      </div>
      <div className={styles.description}>
        <h4>{description}</h4>
      </div>
      <div className={styles.details}>
        {" "}
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
        <div className={styles.detail}>
          {benefit5 == "" ? <></> : <Image src={check} alt={""} />}
          <h4>{benefit5}</h4>
        </div>
      </div>
      <button
        onClick={() => router.push(`/pricing_page`)}
        className={styles.button1}
      >
        <h4>Туршиж үзэх</h4>
      </button>
      <button
        onClick={() => router.push(`/pricing_page`)}
        className={styles.button}
      >
        <h4>Дэлгэрэнгүй</h4>
      </button>
    </div>
  );
}

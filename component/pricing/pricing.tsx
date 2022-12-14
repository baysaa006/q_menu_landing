import React, { useState } from "react";
import styles from "../../styles/pricing/pricing.module.css";
import Pricing_card from "./pricing_card";

export default function Pricing() {
  const [active, setActive] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Үнийн санал</h3>
        <h1>Багцаа сонгоод шууд ашигла</h1>
        <h4> Өөрийн хэрэгцээнд тохирсон багцыг сонго</h4>
        <div className={styles.switch}>
          <button
            onClick={() => setActive(true)}
            className={
              active === true ? styles.switcher_on : styles.switcher_off
            }
          >
            Сараар
          </button>
          <button
            onClick={() => setActive(false)}
            className={
              !active === true ? styles.switcher_on : styles.switcher_off
            }
          >
            Жилээр
          </button>
        </div>
      </div>
      <div className={styles.main}>
        {active && (
          <>
            <Pricing_card
              price={"30.000"}
              year={" "}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Lite"}
              description={""}
            />
            <Pricing_card
              price={"40.000"}
              year={" "}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Pro"}
              description={""}
            />
            <Pricing_card
              price={"50.000"}
              year={" "}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Premium"}
              description={""}
            />
          </>
        )}
        {!active && (
          <>
            <Pricing_card
              price={"15.000"}
              year={",/Жилийн төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Lite"}
              description={""}
            />
            <Pricing_card
              price={"20.000"}
              year={",/Жилийн төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Pro"}
              description={""}
            />
            <Pricing_card
              price={"30.000"}
              year={",/Жилийн төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Premium"}
              description={""}
            />
          </>
        )}
      </div>
    </div>
  );
}

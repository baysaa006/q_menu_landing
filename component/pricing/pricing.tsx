import React, { useState } from "react";
import styles from "../../styles/pricing/pricing.module.css";
import Pricing_card from "./pricing_card";

export default function Pricing() {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Үнийн санал</h3>
        <h1>Багцаа сонгоод шууд ашигла</h1>
        <h4> Өөрийн хэрэгцээнд тохирсон багцыг сонго</h4>
        <div className={styles.switch}>
          <button
            onClick={() => setActive(1)}
            className={active === 1 ? styles.switcher_on : styles.switcher_off}
          >
            Сараар
          </button>
          <button
            onClick={() => setActive(2)}
            className={active === 2 ? styles.switcher_on : styles.switcher_off}
          >
            Улиралаар
          </button>
          <button
            onClick={() => setActive(3)}
            className={active === 3 ? styles.switcher_on : styles.switcher_off}
          >
            Хагас жилээр
          </button>
          <button
            onClick={() => setActive(4)}
            className={active === 4 ? styles.switcher_on : styles.switcher_off}
          >
            Жилээр
          </button>
        </div>
      </div>
      <div className={styles.main}>
        {active === 1 && (
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
        {active === 4 && (
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
        {active === 3 && (
          <>
            <Pricing_card
              price={"15.000"}
              year={",/Хагас жилийн төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Lite"}
              description={""}
            />
            <Pricing_card
              price={"20.000"}
              year={",/Хагас жилийн төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Pro"}
              description={""}
            />
            <Pricing_card
              price={"30.000"}
              year={",/Хагас жилийн төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Premium"}
              description={""}
            />
          </>
        )}
        {active === 2 && (
          <>
            <Pricing_card
              price={"15.000"}
              year={",/Улирлын төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Lite"}
              description={""}
            />
            <Pricing_card
              price={"20.000"}
              year={",/Улирлын төлөлт"}
              benefit1={""}
              benefit2={""}
              benefit3={""}
              name={"Pro"}
              description={""}
            />
            <Pricing_card
              price={"30.000"}
              year={",/Улирлын төлөлт"}
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

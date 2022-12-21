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
        <h4>Өөрийн хэрэгцээнд тохирсон багцыг сонго</h4>
        <div className={styles.switch}>
          <button
            onClick={() => setActive(1)}
            className={active === 1 ? styles.switcher_on : styles.switcher_off}
          >
            Сар
          </button>
          <button
            onClick={() => setActive(2)}
            className={active === 2 ? styles.switcher_on : styles.switcher_off}
          >
            Улирал
          </button>
          <button
            onClick={() => setActive(3)}
            className={active === 3 ? styles.switcher_on : styles.switcher_off}
          >
            Хагас жил
          </button>
          <button
            onClick={() => setActive(4)}
            className={active === 4 ? styles.switcher_on : styles.switcher_off}
          >
            Жил
          </button>
        </div>
      </div>
      <div className={styles.main}>
        {active === 1 && (
          <>
            <Pricing_card
              price={"30,000"}
              benefit1={"НӨАТ"}
              benefit2={"Ширээ удирдлага"}
              benefit3={"Захиалга"}
              benefit4={"Үндсэн дэлгэц"}
              name={"Lite"}
              description={""}
            />
            <Pricing_card
              price={"60,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"Standart"}
              description={""}
              benefit4={"Lite багц"}
            />
            <Pricing_card
              price={"50.000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"Advenced"}
              description={""}
              benefit4={"Standart багц"}
            />
          </>
        )}
        {active === 4 && (
          <>
            <Pricing_card
              price={"320,000"}
              benefit1={"НӨАТ"}
              benefit2={"Ширээ удирдлага"}
              benefit3={"Захиалга"}
              name={"Lite"}
              description={""}
              benefit4={"Үндсэн дэлгэц"}
            />
            <Pricing_card
              price={"720,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"Standart"}
              description={""}
              benefit4={"Lite багц"}
            />
            <Pricing_card
              price={"30.000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"Advenced"}
              description={""}
              benefit4={"Standart багц"}
            />
          </>
        )}
        {active === 3 && (
          <>
            <Pricing_card
              price={"180,000"}
              benefit1={"НӨАТ"}
              benefit2={"Ширээ удирдлага"}
              benefit3={"Захиалга"}
              name={"Lite"}
              description={""}
              benefit4={"Үндсэн дэлгэц"}
            />
            <Pricing_card
              price={"360,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"Standart"}
              description={""}
              benefit4={"Lite багц"}
            />
            <Pricing_card
              price={"30.000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"Advenced"}
              description={""}
              benefit4={"Standart багц"}
            />
          </>
        )}
        {active === 2 && (
          <>
            <Pricing_card
              price={"90,000"}
              benefit1={"НӨАТ"}
              benefit2={"Ширээ удирдлага"}
              benefit3={"Захиалга"}
              name={"Lite"}
              description={""}
              benefit4={"Үндсэн дэлгэц"}
            />
            <Pricing_card
              price={"180,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"Standart"}
              description={""}
              benefit4={"Lite багц"}
            />
            <Pricing_card
              price={"30.000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"Advenced"}
              description={""}
              benefit4={"Standart багц"}
            />
          </>
        )}
      </div>
    </div>
  );
}

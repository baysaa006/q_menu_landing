import React, { useState } from "react";
import styles from "../../styles/pricing/pricing_detail.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import useScrollPosition from "./use_scroll";
import Pricing_features from "./pricing_features";
import useWindowDimensions from "./use_width";
import Pricing_phone from "./pricing_phone";

export default function Pricing_detail() {
  const [active, setActive] = useState(1);
  const { width } = useWindowDimensions();
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;

  return (
    <div className={styles.container}>
      {width > 900 && (
        <>
          <div className={styles.switch}>
            <button
              onClick={() => setActive(1)}
              className={
                active === 1 ? styles.switcher_on : styles.switcher_off
              }
            >
              Сар
            </button>
            <button
              onClick={() => setActive(2)}
              className={
                active === 2 ? styles.switcher_on : styles.switcher_off
              }
            >
              Улирал
            </button>
            <button
              onClick={() => setActive(3)}
              className={
                active === 3 ? styles.switcher_on : styles.switcher_off
              }
            >
              Хагас жил
            </button>
            <button
              onClick={() => setActive(4)}
              className={
                active === 4 ? styles.switcher_on : styles.switcher_off
              }
            >
              Жил
            </button>
          </div>
          <Pricing_features active={active} />
        </>
      )}
      {width < 900 && <Pricing_phone />}
    </div>
  );
}

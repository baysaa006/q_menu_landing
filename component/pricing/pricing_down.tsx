import { doesNotThrow } from "assert";
import React, { useState } from "react";
import styles from "../../styles/pricing/pricing_down.module.css";
import up from "../../public/icons/up.svg";
import down1 from "../../public/icons/down_arrow.svg";
import Image from "next/image";
import check_mark from "../../public/icons/Check-mark.svg";
import { spawn } from "child_process";

interface data {
  name: string;
  feature: {
    name: string[];
    check: boolean[];
  };
}
export default function Pricing_down(props: data) {
  const { name, feature, ...others } = props;
  const [down, setDown] = useState(false);

  const change = () => {
    if (down === false) {
      setDown(true);
    } else setDown(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.head} onClick={change}>
        <h4 className={styles.name}>{name}</h4>
        {!down && <Image src={down1} alt="down" />}
        {down && <Image src={up} alt="down" />}
      </div>

      {down && (
        <div className={styles.expanded}>
          {feature.name.map((name, i) => (
            <div className={styles.row} key={i}>
              <h4>{name}</h4>
              {feature.check[i] ? (
                <Image className={styles.image} src={check_mark} alt="down" />
              ) : (
                <span className={styles.empty}></span>
              )}
            </div>
          ))}{" "}
        </div>
      )}
      {}
    </div>
  );
}

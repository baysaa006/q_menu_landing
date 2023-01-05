import React from "react";
import useWindowDimensions from "../pricing/use_width";
import styles from "../../styles/feature/features.module.css";
import PhoneFeature from "./phoneFeature";
import WebFeature from "./webFeature";

function Features() {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.wrap}>
      <div className={styles.divider}></div>
      {width > 900 && <WebFeature />}
      {width < 900 && <PhoneFeature />}
    </div>
  );
}

export default Features;

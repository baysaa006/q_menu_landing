import React from "react";
import styles from "../../styles/feature/featureWeb.module.css";
import Image from "next/image";
import next_arrow from "../../public/icons/next_arrow.svg";
import useScrollPosition from "../pricing/use_scroll";
import Check from "../animations/check";

interface data {
  title: string;
  description: string;
  longDescription: string;
  featureName_1: string;
  featureName_2: string;
  featureName_3: string;
  direction: string;
  img: any;
}
export default function FeaturesWebCard(prop: data) {
  const {
    title,
    description,
    longDescription,
    featureName_1,
    featureName_2,
    featureName_3,
    direction,
    img,
    ...others
  } = prop;
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <h3>Бүтээгдэхүүн</h3>
        <h1>Рестораны бүх шийдлийг нэг дороос</h1> */}
      </div>
      <div className={styles.small_con}>
        <div className={styles.left}>
          <h4 className={styles.name_of_feature}>{title}</h4>
          <h1 className={styles.title_of_feature}>{description}</h1>
          <p className={styles.description_of_feature}>{longDescription}</p>
          <ul>
            <li className={styles.row}>
              {" "}
              <Check /> <h4>{featureName_1}</h4>
            </li>
            <li className={styles.row}>
              {" "}
              <Check /> <h4>{featureName_2}</h4>
            </li>

            <li className={styles.row}>
              {" "}
              <Check />
              <h4>{featureName_3}</h4>
            </li>
          </ul>
          <a href={`/${direction}`}>
            <button className={styles.start}>
              <h4> Эхлэх</h4>
              <Image alt="down" src={next_arrow} />
            </button>
          </a>
        </div>
        <div className={styles.rigth}>
          <Image className={styles.feature_img} alt="feature_1" src={img} />
        </div>
      </div>
    </div>
  );
}

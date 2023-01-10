import React, { useState } from "react";
import styles from "../../styles/feature/featurePhone.module.css";
import Image from "next/image";
import feature_1 from "../../public/img/feature_1.png";
import downarrow from "../../public/icons/down.svg";

function PhoneFeature() {
  const [active, setActive] = useState<any>([]);

  const data = [
    {
      title: "Кассын систем",
      description: "Захиалгыг боловсруулах систем",
      longDescription:
        "Бэлэн мөнгөний систем нь биет бэлэн мөнгө, гарын авлагын бүртгэлийг ашиглан санхүүгийн гүйлгээ хийх, мөнгөний урсгалыг удирдах арга юм.",
      featureName_1: "Ресторан доторх захиалга",
      featureName_2: "Урьдчилсан захиалга",
      featureName_3: "Хүргэлт",
      direction: "",
      img: feature_1,
    },
    {
      title: "Ухаалаг Qr цэс",
      description: "Захиалга хийх шинэ арга",
      longDescription:
        "Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс юм.",
      featureName_1: "Ресторан доторх захиалга",
      featureName_2: "Урьдчилсан захиалга",
      featureName_3: "Хүргэлт",
      direction: "/qr",
      img: feature_1,
    },

    {
      title: "Киоск-Self ordering",
      description: "3",
      longDescription: "",
      featureName_1: "",
      featureName_2: "",
      featureName_3: "",
      direction: "",
      img: feature_1,
    },
    {
      title: "Караоке",
      description: "4",
      longDescription: "",
      featureName_1: "",
      featureName_2: "",
      featureName_3: "",
      direction: "",
      img: feature_1,
    },
    {
      title: "Андройд касс",
      description: "",
      longDescription: "",
      featureName_1: "",
      featureName_2: "",
      featureName_3: "",
      direction: "",
      img: feature_1,
    },
    {
      title: "Бусад бүтээгдэхүүн",
      description: "",
      longDescription: "",
      featureName_1: "",
      featureName_2: "",
      featureName_3: "",
      direction: "",
      img: feature_1,
    },
  ];
  function handleOpenClose(item: any) {
    setActive(active.includes(item) ? [item] : [item]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headText}>
          {" "}
          <strong>БҮТЭЭГДЭХҮҮН</strong>
          <br />
          Ресторан удирдлагын цогц систем
        </h1>{" "}
      </div>
      <ul className={styles.smallCon}>
        {data.map((item: any, index) => (
          <li
            className={styles.con}
            onClick={() => handleOpenClose(index)}
            key={index}
          >
            <div
              className={
                active.includes(index) ? styles.notActiveCon : styles.activeCon
              }
            >
              <h1>{item.title}</h1>
              {
                <Image
                  className={
                    active.includes(index) ? styles.rotate : styles.down
                  }
                  src={downarrow}
                  alt="featurePicture"
                />
              }
            </div>
            {active.includes(index) && (
              <div className={styles.notActive}>
                <div className={styles.content}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt="featurePicture"
                  />
                  <h1>{item.description}</h1>
                  <p>{item.longDescription}</p>
                </div>
                <div className={styles.buttons}>
                  {" "}
                  <button className={styles.demo}>
                    <h4>Туршиж үзэх</h4>
                  </button>
                  <button className={styles.more}>
                    <h4>Дэлгэрэнгүй</h4>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneFeature;

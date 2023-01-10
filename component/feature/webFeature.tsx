import React, { useState } from "react";
import styles from "../../styles/feature/features.module.css";
import feature_1 from "../../public/img/feature_1.png";
import feature_2 from "../../public/img/feature_2.png";
import Image from "next/image";
import Code from "../animations/code";
import FeatureWeb from "./featureWebCard";

function WebFeature() {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headText}>
          {" "}
          <strong>БҮТЭЭГДЭХҮҮН</strong>
          <br />
          Ресторан удирдлагын цогц систем
        </h1>
      </div>
      <div className={styles.switch}>
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? styles.switcher_on : styles.switcher_off}
        >
          Кассын систем
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? styles.switcher_on : styles.switcher_off}
        >
          Ухаалаг Qr цэс
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? styles.switcher_on : styles.switcher_off}
        >
          Киоск-Self ordering
        </button>
        <button
          onClick={() => setActive(4)}
          className={active === 4 ? styles.switcher_on : styles.switcher_off}
        >
          Гал тогоо удирдлага
        </button>
        <button
          onClick={() => setActive(5)}
          className={active === 5 ? styles.switcher_on : styles.switcher_off}
        >
          Мобайл касс
        </button>
        <button
          onClick={() => setActive(6)}
          className={active === 6 ? styles.switcher_on : styles.switcher_off}
        >
          Бусад бүтээгдэхүүн
        </button>
      </div>
      {active === 1 && (
        <FeatureWeb
          title={" Кассын систем"}
          description={"Захиалга хийх шинэ арга"}
          longDescription={
            "Ухаалаг QR цэс нь хэрэглэгчдэд гар утаснаасаа цэс рүү нэвтрэх боломжийг олгодог Quick Response (QR) кодыг ашигладаг дижитал цэс юм."
          }
          featureName_1={"Ресторан доторх захиалга"}
          featureName_2={"Урьдчилсан захиалга"}
          featureName_3={"Хүргэлт"}
          direction={"#qr"}
          img={feature_1}
        />
      )}
      {active === 2 && (
        <FeatureWeb
          title={"Ухаалаг Qr цэс"}
          description={"Захиалгыг боловсруулах систем"}
          longDescription={
            "Бэлэн мөнгөний систем нь биет бэлэн мөнгө, гарын авлагын бүртгэлийг ашиглан санхүүгийн гүйлгээ хийх, мөнгөний урсгалыг удирдах арга юм."
          }
          featureName_1={"Ресторан доторх захиалга"}
          featureName_2={"Урьдчилсан захиалга"}
          featureName_3={"Хүргэлт"}
          direction={""}
          img={feature_2}
        />
      )}
      {active === 3 && (
        <FeatureWeb
          title={"Киоск-Self ordering"}
          description={"Захиалгыг боловсруулах систем"}
          longDescription={
            "Бэлэн мөнгөний систем нь биет бэлэн мөнгө, гарын авлагын бүртгэлийг ашиглан санхүүгийн гүйлгээ хийх, мөнгөний урсгалыг удирдах арга юм."
          }
          featureName_1={"Ресторан доторх захиалга"}
          featureName_2={"Урьдчилсан захиалга"}
          featureName_3={"Хүргэлт"}
          direction={""}
          img={feature_2}
        />
      )}
      {active === 4 && (
        <FeatureWeb
          title={"Караоке"}
          description={"Захиалгыг боловсруулах систем"}
          longDescription={
            "Бэлэн мөнгөний систем нь биет бэлэн мөнгө, гарын авлагын бүртгэлийг ашиглан санхүүгийн гүйлгээ хийх, мөнгөний урсгалыг удирдах арга юм."
          }
          featureName_1={"Ресторан доторх захиалга"}
          featureName_2={"Урьдчилсан захиалга"}
          featureName_3={"Хүргэлт"}
          direction={""}
          img={feature_2}
        />
      )}
      {active === 5 && (
        <FeatureWeb
          title={"Мобайл касс"}
          description={"Захиалгыг боловсруулах систем"}
          longDescription={
            "Бэлэн мөнгөний систем нь биет бэлэн мөнгө, гарын авлагын бүртгэлийг ашиглан санхүүгийн гүйлгээ хийх, мөнгөний урсгалыг удирдах арга юм."
          }
          featureName_1={"Ресторан доторх захиалга"}
          featureName_2={"Урьдчилсан захиалга"}
          featureName_3={"Хүргэлт"}
          direction={""}
          img={feature_2}
        />
      )}
      {active === 6 && (
        <div className={styles.small_con}>
          <div className={styles.box}>
            <Code /> <h4>Андройд Касс</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis officiis fuga delectus cumque laudantium.
            </p>
          </div>
          <div className={styles.box}>
            {" "}
            <Code /> <h4>Гал тогооны удирдлага</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis officiis fuga delectus cumque laudantium.
            </p>
          </div>
          <div className={styles.box}>
            {" "}
            <Code /> <h4>Киоск-Self ordering</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis officiis fuga delectus cumque laudantium.
            </p>
          </div>
          <div className={styles.box}>
            {" "}
            <Code /> <h4>Караоке</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis officiis fuga delectus cumque laudantium.
            </p>
          </div>
          <div className={styles.box}>
            {" "}
            <Code /> <h4> Бүх төрлийн тайлан</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis officiis fuga delectus cumque laudantium.
            </p>
          </div>
          <div className={styles.box}>
            {" "}
            <Code /> <h4>Киоск-Self ordering</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis officiis fuga delectus cumque laudantium.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WebFeature;

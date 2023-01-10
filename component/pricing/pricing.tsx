import React, { useState } from "react";
import styles from "../../styles/pricing/pricing.module.css";
import Pricing_card from "./pricing_card";

export default function Pricing() {
  const [active, setActive] = useState(1);
  const [feature, setFeature] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      <div className={styles.head}>
        <h1 className={styles.headText}>
          <strong>ҮНИЙН СОНГОЛТ</strong>
          <br />
          Та хүссэн үедээ сонгосон багцаа багасгаж эсвэл ахиулж болно.
        </h1>
      </div>
      <div className={styles.header}>
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
              benefit1={"Ухаалаг QR цэс"}
              benefit2={"Ширээ удирдлага"}
              benefit3={"Цэс удирдлага"}
              benefit4={"Цахим төлбөр"}
              name={"LITE  БАГЦ"}
              description={
                "Захиалгаа зайнаас өгч, зайнаас төлөх боломжийг олгох цаг, цалин хэмнэсэн багц"
              }
              recPic={false}
              benefit5={""}
            />
            <Pricing_card
              price={"60,000"}
              benefit1={"Кассын систем"}
              benefit2={"Хүргэлт/Захиалга"}
              benefit3={"Хөнгөлөлт, хураамж"}
              name={"STANDARD БАГЦ"}
              description={
                "Өөртөө Lite багцыг агуулсан уг багц нь таныг бизнесээ бүрэн удирдахад туслана. "
              }
              benefit4={"Lite багц"}
              recPic={true}
              benefit5={"Dashboard, Тайлан"}
            />
            <Pricing_card
              price={"150,000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"PLUS БАГЦ"}
              description={
                "Олон салбартай, орлого зарлагаа  хянаж, үйл ажиллагаагаа бүрэн цахимжуулах хүсэлтэй бол PLUS багцыг сонгоорой"
              }
              benefit4={"Standart багц"}
              recPic={false}
              benefit5={"Inventory"}
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
              name={"LITE  БАГЦ"}
              description={
                "Захиалгаа зайнаас өгч, зайнаас төлөх боломжийг олгох цаг, цалин хэмнэсэн багц"
              }
              benefit4={"Үндсэн дэлгэц"}
              recPic={false}
              benefit5={""}
            />
            <Pricing_card
              price={"720,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"STANDARD БАГЦ"}
              description={
                "Өөртөө Lite багцыг агуулсан уг багц нь таныг бизнесээ бүрэн удирдахад туслана. "
              }
              benefit4={"Lite багц"}
              recPic={true}
              benefit5={"Dashboard, Тайлан"}
            />
            <Pricing_card
              price={"30.000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"PLUS БАГЦ"}
              description={
                "Олон салбартай, орлого зарлагаа  хянаж, үйл ажиллагаагаа бүрэн цахимжуулах хүсэлтэй бол PLUS багцыг сонгоорой"
              }
              benefit4={"Standart багц"}
              recPic={false}
              benefit5={"Inventory"}
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
              name={"LITE БАГЦ"}
              description={
                "Захиалгаа зайнаас өгч, зайнаас төлөх боломжийг олгох цаг, цалин хэмнэсэн багц"
              }
              benefit4={"Үндсэн дэлгэц"}
              recPic={false}
              benefit5={""}
            />
            <Pricing_card
              price={"360,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"STANDARD БАГЦ"}
              description={
                "Өөртөө Lite багцыг агуулсан уг багц нь таныг бизнесээ бүрэн удирдахад туслана. "
              }
              benefit4={"Lite багц"}
              recPic={true}
              benefit5={"Dashboard, Тайлан"}
            />
            <Pricing_card
              price={"30.000"}
              benefit1={"Касс"}
              benefit2={"Тайлан"}
              benefit3={"Гал тогоо удирдлага"}
              name={"PLUS БАГЦ"}
              description={
                "Олон салбартай, орлого зарлагаа  хянаж, үйл ажиллагаагаа бүрэн цахимжуулах хүсэлтэй бол PLUS багцыг сонгоорой"
              }
              benefit4={"Standart багц"}
              recPic={false}
              benefit5={"Inventory"}
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
              name={"LITE БАГЦ"}
              description={
                "Захиалгаа зайнаас өгч, зайнаас төлөх боломжийг олгох цаг, цалин хэмнэсэн багц"
              }
              benefit4={"Үндсэн дэлгэц"}
              recPic={false}
              benefit5={""}
            />
            <Pricing_card
              price={"180,000"}
              benefit1={"Хөнгөлөлт"}
              benefit2={"Хураамж"}
              benefit3={"Гишүүнчлэлийн удирдлага"}
              name={"STANDART БАГЦ"}
              description={
                "Өөртөө Lite багцыг агуулсан уг багц нь таныг бизнесээ бүрэн удирдахад туслана. "
              }
              benefit4={"Lite багц"}
              recPic={true}
              benefit5={"Dashboard, Тайлан"}
            />
            <Pricing_card
              price={"30.000"}
              benefit1={"Loyalty"}
              benefit2={"KDS"}
              benefit3={"Kiosk"}
              name={"PLUS БАГЦ"}
              description={
                "Олон салбартай, орлого зарлагаа  хянаж, үйл ажиллагаагаа бүрэн цахимжуулах хүсэлтэй бол PLUS багцыг сонгоорой"
              }
              benefit4={"Standart багц"}
              recPic={false}
              benefit5={"Inventory"}
            />
          </>
        )}
      </div>
      <div className={styles.moreFeature}>
        <div className={styles.featureText}>
          <div className={styles.moreFeatureHead}>
            <div className={styles.headerDiv}>
              <div className={styles.circle}>
                <h1>+</h1>
              </div>
              <h1 className={styles.headText}>Нэмэлт модуль</h1>
            </div>

            <div className={styles.switch}>
              <button
                onClick={() => setFeature(1)}
                className={
                  feature === 1 ? styles.switcher_on : styles.switcher_off
                }
              >
                Сараар{" "}
              </button>
              <button
                onClick={() => setFeature(2)}
                className={
                  feature === 2 ? styles.switcher_on : styles.switcher_off
                }
              >
                Жилээр
              </button>
            </div>
          </div>

          <div className={styles.featurePrice}>
            <h4 className={styles.prices}>Гал тогоо удирдлага (KDS) </h4>
            {feature === 1 ? <h4> 20,000 төг</h4> : <h4> 200,000 төг</h4>}
          </div>
          <div className={styles.featurePrice}>
            <h4 className={styles.prices}>Ухаалаг тайлан </h4>
            {feature === 1 ? <h4> 20,000 төг</h4> : <h4> 200,000 төг</h4>}
          </div>
          <div className={styles.featurePrice}>
            <h4 className={styles.prices}>Gift card, Vaucher, Coupon </h4>
            {feature === 1 ? <h4> 20,000 төг</h4> : <h4> 200,000 төг</h4>}
          </div>
          <div className={styles.featurePrice}>
            <h4 className={styles.prices}>Бараа материалын удирдлага </h4>
            {feature === 1 ? <h4> 40,000 төг</h4> : <h4> 500,000 төг</h4>}
          </div>
          <div className={styles.featurePrice}>
            <h4 className={styles.prices}>Санхүүгийн удирдлага </h4>
            {feature === 1 ? <h4> 40,000 төг</h4> : <h4> 500,000 төг</h4>}
          </div>
        </div>
      </div>
    </div>
  );
}

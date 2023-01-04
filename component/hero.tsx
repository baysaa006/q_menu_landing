import React, { useState } from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import next_arrow from "../public/icons/next_arrow.svg";
import icon1 from "../public/img/image1.svg";
import icon2 from "../public/img/image2.svg";
import icon3 from "../public/img/image3.svg";
import icon4 from "../public/img/image4.svg";
import icon5 from "../public/img/image5.svg";
import icon6 from "../public/img/image6.svg";
import icon7 from "../public/img/image7.svg";
import icon9 from "../public/img/image9.svg";
import icon8 from "../public/img/image8.svg";
import icon10 from "../public/img/image10.svg";
import icon11 from "../public/img/image11.svg";
import icon12 from "../public/img/image12.svg";
import gift from "../public/img/gift.svg";

import Banner from "../public/img/Banner.svg";
import router from "next/router";
export default function Hero() {
  const [active, setActive] = useState<any>([]);

  const col = [
    {
      strong: "Ресторан, Кафе",
      img: icon1,
      slugin: "Ресторан, Кафе",
      description: `${String} зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.`,
      "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.":
        " Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon2,
      slugin: "Лоунж, Паб",
    },
    {
      img: icon3,
      slugin: "Караоке",
    },
    {
      img: icon4,
      slugin: "Шөнийн клуб",
    },
    {
      img: icon5,
      slugin: "Түргэн хоол, Пизза",
    },
    {
      img: icon6,
      slugin: "Цайны газар ",
    },
    {
      img: icon7,
      slugin: "Кофе шоп, Бейкери",
    },
    {
      img: icon8,
      slugin: "Хүргэлтийн хоол",
    },
    {
      img: icon9,
      slugin: "Ажилчдын хоолны газар",
    },
    {
      img: icon10,
      slugin: "Фүүд коурт, Буфет",
    },
    {
      img: icon11,
      slugin: "Зочид буудлын ресторан",
    },
    {
      img: icon12,
      slugin: "Амралтын газар, гэр кэмп",
    },
  ];
  const col2 = [];
  function handleOpenClose(item: any) {
    if (active.includes(item)) {
      setActive([]);
    } else {
      setActive([item]);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.headerText}>
            Та ямар төрлийн бизнес эрхэлдэг вэ?{" "}
          </h2>
        </div>
        <div className={styles.con}>
          <div className={styles.right}>
            <div className={styles.choices}>
              <div className={styles.smallChoices}>
                <ul className={styles.order}>
                  {col.map((item: any, index) => (
                    <li
                      className={styles.item}
                      onClick={() => handleOpenClose(index)}
                      key={index}
                    >
                      <div
                        className={
                          active.includes(index)
                            ? styles.orderItemActive
                            : styles.orderItem
                        }
                      >
                        <Image
                          className={styles.itemImg}
                          src={item.img}
                          alt="image"
                        />
                        <h4>{item.slugin}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
                <span className={styles.divider}></span>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.slug}>
              {col.map((item: any, index) => (
                <>
                  {active.includes(index) && (
                    <>
                      <Image
                        className={styles.itemTop}
                        src={item.img}
                        alt="image"
                      />
                      <p key={index} className={styles.text}>
                        {item.description}
                      </p>
                    </>
                  )}
                </>
              ))}
            </div>
            <button className={styles.choose}>Сонгох</button>
          </div>
        </div>
        <div className={styles.footer}>
          <Image className={styles.gift} src={gift} alt="gift" />
          <h4>
            Шинэ бизнесээ нээх гэж байгаа бол{" "}
            <strong className={styles.strong} onClick={() => router.push("/")}>
              ЭНД
            </strong>{" "}
            дарна уу.
          </h4>
        </div>
      </div>
    </div>
  );
}

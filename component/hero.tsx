import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import next_arrow from "../public/icons/next_arrow.svg";
import icon1 from "../public/icons/image1.jpg";
import icon2 from "../public/icons/image2.jpg";
import icon3 from "../public/icons/image3.jpg";
import icon4 from "../public/icons/image4.jpg";
import icon5 from "../public/icons/image5.svg";
import icon6 from "../public/icons/image6.svg";
import icon7 from "../public/icons/image7.svg";
import icon9 from "../public/icons/image9.svg";
import icon8 from "../public/icons/image8.svg";
import icon10 from "../public/icons/image10.svg";
import icon11 from "../public/icons/image11.svg";
import Banner from "../public/img/Banner.svg";
export default function Hero() {
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
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon5}
                      alt="restaurant"
                    />
                    <a>Ресторан, Кафе</a>
                  </li>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon1}
                      alt="restaurant"
                    />
                    <a>Лоунж, Паб</a>
                  </li>

                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon4}
                      alt="restaurant"
                    />
                    <a>Караоке</a>
                  </li>

                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon3}
                      alt="restaurant"
                    />
                    <a>Шөнийн клуб</a>
                  </li>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon2}
                      alt="restaurant"
                    />
                    <a>Түргэн хоол, пизза</a>
                  </li>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon6}
                      alt="restaurant"
                    />
                    <a>Цайны газар </a>
                  </li>
                </ul>
                <span className={styles.divider}></span>
                <ul className={styles.order}>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon7}
                      alt="restaurant"
                    />
                    <a>Кофе шоп, Бейкери</a>
                  </li>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon8}
                      alt="restaurant"
                    />
                    <a>Хүргэлтийн хоол</a>
                  </li>

                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon9}
                      alt="restaurant"
                    />
                    <a>Ажилчдын хоолны газар</a>
                  </li>

                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon11}
                      alt="restaurant"
                    />
                    <a>Фүүд коурт, Буфет</a>
                  </li>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon10}
                      alt="restaurant"
                    />
                    <a>Зочид буудлын ресторан</a>
                  </li>
                  <li className={styles.orderItem}>
                    <Image
                      className={styles.itemImg}
                      src={icon4}
                      alt="restaurant"
                    />
                    <a>Амралтын газар, гэр кэмп</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.slug}>
              <h2 className={styles.headerText}>
                Таны эрхэлж буй бизнест яг тохирсон <strong>ШИЙДЛИЙГ</strong>{" "}
                бид санал болгоно
              </h2>
            </div>
            <Image src={Banner} className={styles.Banner} alt="Banner" />
          </div>
        </div>
        {/* <div className={styles.navigator}>
          <h4> Шинэ ресторан нээх гэж байна уу?</h4>
          <button className={styles.next}>
            <strong>Эхлэх</strong>
            <Image src={next_arrow} alt="next arrow" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

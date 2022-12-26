import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import slugin_second from "../public/icons/second.svg";
import slugin_third from "../public/icons/third.svg";
import slugin_first from "../public/icons/first.svg";
import hero_pic from "../public/img/hero_pic.svg";
import Test from "./animations/check";
import Qr from "./animations/qr";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.corner}>
        <div className={styles.right_con}>
          <div>
            <h1 className={styles.hero_text}>
              Рестораны
              <br /> цахим шилжилт
            </h1>
          </div>
          <div className={styles.slugins}>
            {" "}
            <h1 className={styles.slugin_text}>
              Зайнаас захиалъя,
              <br /> төлье
            </h1>
            <ul>
              <li>
                {" "}
                <Qr />
                <h4>Цахим захиалга</h4>
              </li>
              <li>
                {" "}
                <Qr />
                <h4>Урьдчилсан захиалга</h4>
              </li>

              <li>
                {" "}
                <Qr />
                <h4>Хүргэлт</h4>
              </li>
            </ul>
          </div>
          <div className={styles.register_button}>
            <button>
              <h2 className={styles.register}>Ресторан бүртгүүлэх</h2>
            </button>
          </div>
        </div>
        <div className={styles.left_con}>
          {/* <h4>
            Ресторан болон хоолны салбарын амин зүрх бол АМТ чанартай хоол,
            эелдэг үйлчилгээ, тухтай орчин юм. Гэхдээ орчин үеийн үйлчилүүлэгчид
            эдгээрээс гадна нэмээд өөр нэг зүйлийг чухалчилдаг болсон нь
            ТЕХНОЛОГИИН ХЯЛБАР ШИЙДЭЛ юм.
          </h4> */}
          <Image alt="down" src={hero_pic} />
        </div>
      </div>
    </div>
  );
}

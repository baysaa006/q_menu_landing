import React, { useEffect, useState } from "react";
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
import { motion, Variants } from "framer-motion";
import Banner from "../public/img/Banner.svg";
import router from "next/router";
import useWindowDimensions from "./pricing/use_width";

function HighlightText(props: { text: any; highlight: any[] }) {
  const { text, highlight } = props;

  const words = text?.split(" ");

  return (
    <>
      {words?.map((word: any, index: any) => {
        if (highlight.includes(word)) {
          return <strong key={index}>{" " + word}</strong>;
        } else if (highlight.includes(word)) {
        } else {
          return " " + word;
        }
      })}
    </>
  );
}
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export default function Hero() {
  const [active, setActive] = useState<any>([-1]);
  const col = [
    {
      img: icon1,
      slugin: "Ресторан, Кафе",
      highlight: [
        "Ресторан,",
        "кафе",
        "төгс",
        "үйлчилгээг",
        "технологийн",
        "шийдэл",
        "цагийг",
        "хэмнэх",
        "Qmenu",
      ],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon2,
      slugin: "Лоунж, Паб",
      highlight: [
        "Лоунж,",
        "Паб,",
        "Барууд",
        "урамшуулал",
        "зарлах",
        "тооцоогоо",
        "хянах",
        "төлбөрөө",
        "хувааж",
        "төлөх",
        "зөөгч",
        "дуудахад",
        "хялбар",
        "байх",
        "Qmenu",
      ],
      description_1:
        "Лоунж, Паб, Барууд байнга шинийг санаачлан харилцагчдаа татаж байх хүндхэн даалгавар байдаг. Долоо хоног бүр, өдөр бүр, эсвэл  өдрийн тодорхой цагуудад төрөл бүрийн  урамшуулал зарлах нь таны бизнесийг олны анхааралд оруулж, байнга хөл хөдөлгөөн ихтэй байхад тусалдаг.",
      description_2:
        "Оройн цагаар суух үйлчилүүлэгчидэд тооцоогоо хянах, төлбөрөө хувааж төлөх, зөөгч дуудахад хялбар байх гэх мэт жижиг  боловч чухал асуудлууд байдаг.",
      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon3,
      slugin: "Караоке",
      highlight: [
        "Ресторан,",
        "кафе",
        "төгс",
        "үйлчилгээ",
        "технологийн",
        "шийдэл",
        "цагийг",
        "хэмнэх",
        "Qmenu",
      ],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээ үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon4,
      slugin: "Шөнийн клуб",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon5,
      slugin: "Түргэн хоол, Пизза",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon6,
      slugin: "Цайны газар ",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon7,
      slugin: "Кофе шоп, Бейкери",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon8,
      slugin: "Хүргэлтийн хоол",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon9,
      slugin: "Ажилчдын хоолны газар",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon10,
      slugin: "Фүүд коурт, Буфет",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon11,
      slugin: "Зочид буудлын ресторан",
      highlight: [""],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
    {
      img: icon12,
      slugin: "Амралтын газар, гэр кэмп",
      highlight: ["Ресторан,", " Кафе "],
      description_1:
        "Ресторан, Кафе зэрэг тав тухтай хооллох орчин бүрдүүлсэн үйлчилгээний  бизнес нь үйлчлүүлэгчдийн санаанд бүрэн нийцсэн, төгс  үйлчилгээг үзүүлэх шаардлагатай байдаг.",
      description_2:
        "Орчин үеийн рестораны үйлчилгээ нь зөвхөн сайн хоол, сайхан орчноос гадна технологийн шийдэл ашиглан хэрэглэгчийнбүрийн хүссэн буюу яг тухайн хэрэглэгчид тохирсон үйлчилгээг хүргэх нь чухал хэсэгболоод байна. Мөн захиалга авах, төлбөр тооцоо хийх гэх мэт зүйлс дээр хэрэглэгчийн цагийг хэмнэх хэрэгтэй.",

      description_3:
        "Qmenu орчин үеийн технологийн шийдэл ашиглан асуудлыг хялбар шийдлээ",
    },
  ];
  const { width } = useWindowDimensions();

  function handleOpenClose(item: any) {
    if (active.includes(item)) {
      setActive([-1]);
    } else {
      setActive([item]);
    }
  }

  return (
    <div className={styles.container}>
      <div className={active.includes(-1) ? styles.content : styles.content1}>
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

          <div
            className={active.includes(-1) ? styles.notActiveLeft : styles.left}
          >
            <div className={styles.slug}>
              {active.includes(-1) && (
                <>
                  <h2 className={styles.pic}>
                    Таны эрхэлж буй бизнест яг тохирсон
                    <br /> <strong>ШИЙДЛИЙГ</strong> бид санал болгоно
                  </h2>
                  <Image className={styles.Banner} src={Banner} alt="" />
                </>
              )}
              {col.map((item: any, index) => (
                <>
                  {active.includes(index) ? (
                    <div key={index}>
                      {width > 900 && (
                        <Image
                          className={styles.itemTop}
                          src={item.img}
                          alt="image"
                        />
                      )}
                      {width < 900 && (
                        <svg
                          className={styles.close}
                          onClick={() => {
                            setActive([-1]);
                          }}
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                        </svg>
                      )}

                      <motion.div animate={{ opacity: 1 }} className="card">
                        <p className={styles.text}>
                          <HighlightText
                            text={item.description_1}
                            highlight={item.highlight}
                          />
                        </p>
                      </motion.div>

                      <motion.div className="card" variants={cardVariants}>
                        <p className={styles.text}>
                          <HighlightText
                            text={item.description_2}
                            highlight={item.highlight}
                          />
                        </p>
                      </motion.div>
                      <motion.div className="card" variants={cardVariants}>
                        <p className={styles.text}>
                          <HighlightText
                            text={item.description_3}
                            highlight={item.highlight}
                          />
                        </p>
                      </motion.div>
                      {active.includes(index) && (
                        <>
                          {" "}
                          <button className={styles.choose}>
                            {" "}
                            <h4>Сонгох</h4>
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            {active.includes(-1) && <></>}
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

import React, { useState } from "react";
import styles from "../../styles/comment/comment.module.css";
import comment1 from "../../public/img/comment1.jpg";
import comment2 from "../../public/img/comment2.jpg";
import comment3 from "../../public/img/comment3.jpg";
import nextbutton from "../../public/icons/next_arrow.svg";
import prevbutton from "../../public/icons/next_arrow.svg";

import Image from "next/image";

export default function Comment() {
  const data: any = [
    {
      img: comment3,
      speech:
        "Орчин үеийн технологийн давуу талыг мэдрүүлж илуу хурдан шуурхай үйлчилгээг хэрэглэгчдэдээ хүргэж чадсан.",
      title: "Шангрила-FoodStudio захирал",
      name: "Л.Буняжаргал",
    },
    {
      img: comment2,
      speech:
        "Үйлчилгээний ажилчдын маань ажлыг 2 дахин хөнгөвчилсөн хэн хэндээ хялбар шийдэл байлаа. ",
      title: "Gate 4-захирал",
      name: "П.Мөнхсайхан",
    },
    {
      img: comment1,
      speech:
        "Q Menu кассын системийг суурилуулсан өдрөөсөө л манай кассын ачааллыг 50 хувь бууруулж чадсан.",
      title: "УИД - New York Empire захирал",
      name: "Ц.Цолмон",
    },
  ];
  const [active, setActive] = useState<any>([1]);
  const next = (item: any) => {
    console.log(active.length);
    if (item == 2) {
      setActive(0);
    } else setActive(item + 1);
  };
  const prev = (item: any) => {
    if (item == 0) {
      setActive(2);
    } else setActive(item - 1);
  };
  return (
    <div className={styles.con}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            {data.map((item: any, index: number) => (
              <>
                {active == index && (
                  <>
                    <li key={index} className={styles.cardContainer}>
                      <div className={styles.right}>
                        <Image
                          className={styles.commentImg}
                          src={item.img}
                          alt="pro"
                        />
                      </div>
                      <div className={styles.divider}></div>
                      <div className={styles.left}>
                        <div>
                          <h1 className={styles.speech}>"{item.speech}"</h1>
                        </div>
                        <div>
                          <h1>{item.name}</h1>
                          <h4>{item.title}</h4>
                        </div>
                      </div>
                    </li>
                    <div className={styles.buttons}>
                      <button onClick={() => prev(index)}>
                        <Image
                          className={styles.arrow1}
                          src={prevbutton}
                          alt="prev"
                        />
                      </button>
                      <button onClick={() => next(index)}>
                        <Image
                          className={styles.arrow}
                          src={nextbutton}
                          alt="next"
                        />
                      </button>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

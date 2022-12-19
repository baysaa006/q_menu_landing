import React, { useState } from "react";
import styles from "../../styles/pricing/pricing_detail.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";

export default function Pricing_desktop() {
  const [active, setActive] = useState(1);

  return (
    <section className={styles.container}>
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
      <table>
        <thead>
          <tr className={styles.pricing_detail}>
            <th className={styles.col}>Багц</th>
            <th className={styles.col}>
              {active === 1 && (
                <div className={styles.price}>
                  <h4>Lite</h4>
                  <h4>₮15.000</h4>
                </div>
              )}
              {active === 2 && (
                <div className={styles.price}>
                  <h4>Lite</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Улирлын төлөлт</h4>
                </div>
              )}
              {active === 3 && (
                <div className={styles.price}>
                  <h4>Lite</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Хагас жилийн төлөлт</h4>
                </div>
              )}
              {active === 4 && (
                <div className={styles.price}>
                  <h4>Lite</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Жилийн төлөлт</h4>
                </div>
              )}
            </th>
            <th className={styles.col}>
              {" "}
              {active === 1 && (
                <div className={styles.price}>
                  <h4>Standart</h4>
                  <h4>₮15.000</h4>
                </div>
              )}
              {active === 2 && (
                <div className={styles.price}>
                  <h4>Standart</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Улирлын төлөлт</h4>
                </div>
              )}
              {active === 3 && (
                <div className={styles.price}>
                  <h4>Standart</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Хагас жилийн төлөлт</h4>
                </div>
              )}
              {active === 4 && (
                <div className={styles.price}>
                  <h4>Standart</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Жилийн төлөлт</h4>
                </div>
              )}
            </th>
            <th className={styles.col}>
              {active === 1 && (
                <div className={styles.price}>
                  <h4>Advenced</h4>
                  <h4>₮15.000</h4>
                </div>
              )}{" "}
              {active === 2 && (
                <div className={styles.price}>
                  <h4>Advenced</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Улирлын төлөлт</h4>
                </div>
              )}
              {active === 3 && (
                <div className={styles.price}>
                  <h4>Advenced</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Хагас жилийн төлөлт</h4>
                </div>
              )}
              {active === 4 && (
                <div className={styles.price}>
                  <h4>Advenced</h4>
                  <h4>₮15.000</h4>
                  <h4>,/Жилийн төлөлт</h4>
                </div>
              )}
            </th>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <tr className={styles.pricing_detail}>
            <th className={styles.col}>Багцын хураангуй</th>
            <th className={styles.col}>
              <div className={styles.details}>
                {" "}
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>1</h4>
                </div>
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>2</h4>
                </div>
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>3</h4>
                </div>
                <a href="tel:+77772040" className={styles.button}>
                  Холбогдох
                </a>
              </div>
            </th>
            <th className={styles.col}>
              {" "}
              <div className={styles.details}>
                {" "}
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>1</h4>
                </div>
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>2</h4>
                </div>
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>3</h4>
                </div>
                <a href="tel:+77772040" className={styles.button}>
                  Холбогдох
                </a>
              </div>
            </th>
            <th className={styles.col}>
              {" "}
              <div className={styles.details}>
                {" "}
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>1</h4>
                </div>
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>2</h4>
                </div>
                <div className={styles.detail}>
                  <Image src={check} alt={""} />
                  <h4>3</h4>
                </div>
                <a href="tel:+77772040" className={styles.button}>
                  Холбогдох
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <section id="Хөнгөлөлт">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Хөнгөлөлт
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Хөнгөлөлт засварлах</td>
            <td className={styles.col}></td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Хөнгөлөлт тооцох</td>
            <td className={styles.col}></td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Хураамж">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Хураамж
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Хураамж засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Хураамж тооцох</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="НӨАТ">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              НӨАТ
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>НӨАТ холболт</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Гал тогоо">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Гал тогоо удирдлага
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}> Гал тогоо засварлах </td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Тогооч</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Бэлэн захиалгын дэлгэц</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Касс">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Касс
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Касс</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Захиалга буцаах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Бүтээгдэхүүн удирдлага">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Бүтээгдэхүүн удирдлага
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Бүтээгдэхүүн ангилал засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Бүтээгдэхүүн засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Бүтээгдэхүүн цэс засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Бүтээгдэхүүн захиалгыг зогсоох, нээх</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Ажилтны удирдлага">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Ажилтны удирдлага
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Роль засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Ажилтны мэдээлэл засварлах </td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Ширээ удирдлага">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Ширээ удирдлага
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Үйлчилгээний заал зохион байгуулах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Салбарын удирдлага">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Салбар удирдлага
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Салбар засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Байгууллага засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Суваг засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Төхөөрөмж засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Төлбөрийн суваг</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Баримт засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Багц лавлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Хувийн мэдээлэл">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Хувийн мэдээлэл
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}> Хувийн мэдээлэл засварлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Гишүүнчлэлийн удирдлага">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col}>
              Гишүүнчлэлийн удирдлага
            </td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Гишүүн лавлах</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Гишүүнчлэлийн бүлэг</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Санал хүсэлт">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Санал хүсэлт
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Санал хүсэлт</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Тайлан">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Тайлан
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Борлуулалтын тайлан</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Захиалгын тайлан</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Буцаалтын тайлан</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Гүйлгээний тайлан</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Нэгтгэл тайлан</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>НӨАТ тайлан</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Үндсэн дэлгэц">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Үндсэн дэлгэц
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Үндсэн дэлгэц</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <section id="Караоке">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col1}>
              Караоке
            </td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
            <td className={styles.col1}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>Караоке</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>
              {" "}
              <Image src={check} alt="check-mark" />
            </td>
          </tbody>
        </section>
        <tbody className={styles.pricing_detail}>
          <td className={styles.col}></td>
          <td className={styles.col}>
            {" "}
            <a href="tel:+77772040" className={styles.button}>
              Холбогдох
            </a>
          </td>
          <td className={styles.col}>
            {" "}
            <a href="tel:+77772040" className={styles.button}>
              Холбогдох
            </a>
          </td>
          <td className={styles.col}>
            {" "}
            <a href="tel:+77772040" className={styles.button}>
              Холбогдох
            </a>
          </td>
        </tbody>
      </table>
    </section>
  );
}

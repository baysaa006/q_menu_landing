import React, { useState } from "react";
import styles from "../../styles/pricing/pricing_desktop.module.css";
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
          Сараар
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? styles.switcher_on : styles.switcher_off}
        >
          Улиралаар
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? styles.switcher_on : styles.switcher_off}
        >
          Хагас жилээр
        </button>
        <button
          onClick={() => setActive(4)}
          className={active === 4 ? styles.switcher_on : styles.switcher_off}
        >
          Жилээр
        </button>
      </div>
      <table>
        <thead>
          <tr className={styles.pricing_detail}>
            <th className={styles.col}>Багц</th>
            <th className={styles.col}>
              {active === 1 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                </div>
              )}
              {active === 2 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Улирлын төлөлт</h4>
                </div>
              )}
              {active === 3 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Хагас жилийн төлөлт</h4>
                </div>
              )}
              {active === 4 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Жилийн төлөлт</h4>
                </div>
              )}
            </th>
            <th className={styles.col}>
              {" "}
              {active === 1 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                </div>
              )}
              {active === 2 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Улирлын төлөлт</h4>
                </div>
              )}
              {active === 3 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Хагас жилийн төлөлт</h4>
                </div>
              )}
              {active === 4 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Жилийн төлөлт</h4>
                </div>
              )}
            </th>
            <th className={styles.col}>
              {active === 1 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                </div>
              )}{" "}
              {active === 2 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Улирлын төлөлт</h4>
                </div>
              )}
              {active === 3 && (
                <div className={styles.price}>
                  <h4>₮15.000</h4>
                  <h4>,/Хагас жилийн төлөлт</h4>
                </div>
              )}
              {active === 4 && (
                <div className={styles.price}>
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
        <section id="qr">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col}>
              Ухаалаг QR цэс
            </td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
        </section>
        <section id="system">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col}>
              Кассын систем
            </td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
        </section>
        <section id="android">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col}>
              Андройд Касс
            </td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
        </section>
        <section id="kitchen">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col}>
              Киоск-Self ordering
            </td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
        </section>
        <section id="self">
          <tbody className={styles.pricing_detail}>
            <td id="first" className={styles.col}>
              Андройд Касс
            </td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
            <td className={styles.col}></td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
          <tbody className={styles.pricing_detail}>
            <td className={styles.col}>feature_name</td>
            <td className={styles.col}>2</td>
            <td className={styles.col}>3</td>
            <td className={styles.col}>3</td>
          </tbody>
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
        </section>
      </table>
    </section>
  );
}

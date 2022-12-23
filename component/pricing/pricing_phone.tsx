import React, { useState } from "react";
import styles from "../../styles/pricing/pricing_phone.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import useScrollPosition from "./use_scroll";
import Pricing_down from "./pricing_down";

export default function Pricing_phone() {
  const [active, setActive] = useState(1);
  const [priceActive, setPriceActive] = useState(1);
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;

  return (
    <>
      <div className={styles.container}>
        <div className={pageHeight > 224.5555 ? styles.fixed_nav : styles.nav}>
          <div className={styles.pricing_detail}>
            <div className={styles.price_navigator}>
              {active === 1 && (
                <a
                  onClick={() => setPriceActive(1)}
                  className={
                    priceActive === 1
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Lite
                </a>
              )}
              {active === 2 && (
                <a
                  onClick={() => setPriceActive(1)}
                  className={
                    priceActive === 1
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Lite
                </a>
              )}
              {active === 3 && (
                <a
                  onClick={() => setPriceActive(1)}
                  className={
                    priceActive === 1
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Lite
                </a>
              )}
              {active === 4 && (
                <a
                  onClick={() => setPriceActive(1)}
                  className={
                    priceActive === 1
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Lite
                </a>
              )}
            </div>
            <div className={styles.price_navigator}>
              {active === 1 && (
                <a
                  onClick={() => setPriceActive(2)}
                  className={
                    priceActive === 2
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Standart
                </a>
              )}
              {active === 2 && (
                <a
                  onClick={() => setPriceActive(2)}
                  className={
                    priceActive === 2
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Standart
                </a>
              )}
              {active === 3 && (
                <a
                  onClick={() => setPriceActive(2)}
                  className={
                    priceActive === 2
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Standart
                </a>
              )}
              {active === 4 && (
                <a
                  onClick={() => setPriceActive(2)}
                  className={
                    priceActive === 2
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Standart
                </a>
              )}
            </div>
            <div className={styles.price_navigator}>
              {active === 1 && (
                <a
                  onClick={() => setPriceActive(3)}
                  className={
                    priceActive === 3
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  {" "}
                  Advenced
                </a>
              )}
              {active === 2 && (
                <a
                  onClick={() => setPriceActive(3)}
                  className={
                    priceActive === 3
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  {" "}
                  Advenced
                </a>
              )}
              {active === 3 && (
                <a
                  onClick={() => setPriceActive(3)}
                  className={
                    priceActive === 3
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  Advenced
                </a>
              )}
              {active === 4 && (
                <a
                  onClick={() => setPriceActive(3)}
                  className={
                    priceActive === 3
                      ? styles.price_active
                      : styles.price_not_active
                  }
                >
                  {" "}
                  Advenced
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={styles.small_con}>
          <div className={styles.small_switch}>
            <div className={styles.switch}>
              <button
                onClick={() => setActive(1)}
                className={
                  active === 1 ? styles.switcher_on : styles.switcher_off
                }
              >
                Сар
              </button>
              <button
                onClick={() => setActive(2)}
                className={
                  active === 2 ? styles.switcher_on : styles.switcher_off
                }
              >
                Улирал
              </button>
              <button
                onClick={() => setActive(3)}
                className={
                  active === 3 ? styles.switcher_on : styles.switcher_off
                }
              >
                Хагас жил
              </button>
              <button
                onClick={() => setActive(4)}
                className={
                  active === 4 ? styles.switcher_on : styles.switcher_off
                }
              >
                Жил
              </button>
            </div>
            {priceActive === 1 && (
              <div className={styles.small_switch}>
                {active === 1 && <h4 className={styles.price}>₮30,000</h4>}
                {active === 2 && <h4 className={styles.price}>₮90,000</h4>}
                {active === 3 && <h4 className={styles.price}>₮180,000</h4>}
                {active === 4 && <h4 className={styles.price}>₮360,000</h4>}
                <a href="tel:+(976)77772040" className={styles.button}>
                  Холбогдох
                </a>
              </div>
            )}
            {priceActive === 2 && (
              <div className={styles.small_switch}>
                {active === 1 && <h4 className={styles.price}>₮60,000</h4>}
                {active === 2 && <h4 className={styles.price}>₮180,000</h4>}
                {active === 3 && <h4 className={styles.price}>₮360,000</h4>}
                {active === 4 && <h4 className={styles.price}>₮720,000</h4>}
                <a href="tel:+(976)77772040" className={styles.button}>
                  Холбогдох
                </a>
              </div>
            )}
            {priceActive === 3 && (
              <div className={styles.small_switch}>
                <h4 className={styles.price}>₮30,000</h4>
                <a href="tel:+(976)77772040" className={styles.button}>
                  Холбогдох
                </a>
              </div>
            )}
          </div>
          {priceActive === 1 && (
            <div className={styles.box}>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>НӨАТ</h4>
              </div>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Ширээ удирдлага</h4>
              </div>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Захиалга</h4>
              </div>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Үндсэн дэлгэц</h4>
              </div>
            </div>
          )}
          {priceActive === 2 && (
            <div className={styles.box}>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Lite багц</h4>
              </div>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Хөнгөлөлт</h4>
              </div>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Хураамж</h4>
              </div>
              <div className={styles.con}>
                <Image src={check} alt={""} />
                <h4>Гишүүнчлэлийн удирдлага</h4>
              </div>
            </div>
          )}
          {priceActive === 3 && (
            <div>
              <div className={styles.box}>
                <div className={styles.con}>
                  <Image src={check} alt={""} />
                  <h4>Standart багц</h4>
                </div>
                <div className={styles.con}>
                  <Image src={check} alt={""} />
                  <h4>Касс</h4>
                </div>
                <div className={styles.con}>
                  <Image src={check} alt={""} />
                  <h4>Гал тогоо удирдлага</h4>
                </div>
                <div className={styles.con}>
                  <Image src={check} alt={""} />
                  <h4>Тайлан</h4>
                </div>
              </div>
            </div>
          )}
          <div>
            <Pricing_down
              name={"Захиалга"}
              feature={{
                name: ["Захиалах"],
                check: [true],
              }}
            />
            <Pricing_down
              name={"НӨАТ"}
              feature={{
                name: ["НӨАТ холболт"],
                check: [true],
              }}
            />
            <Pricing_down
              name={"Бүтээгдэхүүн удирдлага"}
              feature={{
                name: [
                  "Бүтээгдэхүүн ангилал засварлах",
                  "Бүтээгдэхүүн засварлах",
                  "Бүтээгдэхүүн цэс засварлах",
                  "Бүтээгдэхүүн захиалгыг зогсоох, нээх",
                ],
                check: [true, true, true, true],
              }}
            />
            <Pricing_down
              name={"Ширээ удирдлага"}
              feature={{
                name: ["Үйлчилгээний заал зохион байгуулах"],
                check: [true],
              }}
            />
            <Pricing_down
              name={"Ажилтны удирдлага"}
              feature={{
                name: ["Роль засварлах", "Ажилтны мэдээлэл засварлах"],
                check: [true, true],
              }}
            />
            <Pricing_down
              name={"Салбар удирдлага"}
              feature={{
                name: [
                  "Салбар засварлах",
                  "Байгууллага засварлах",
                  "Суваг засварлах",
                  "Төхөөрөмж засварлах",
                  "Төлбөрийн суваг",
                  "Баримт засварлах",
                  "Багц лавлах",
                ],
                check: [true, true, true, true, true, true, true],
              }}
            />
            <Pricing_down
              name={"Хувийн мэдээлэл"}
              feature={{
                name: ["Хувийн мэдээлэл засварлах"],
                check: [true],
              }}
            />
            <Pricing_down
              name={"Үндсэн дэлгэц"}
              feature={{
                name: ["Үндсэн дэлгэц"],
                check: [true],
              }}
            />
            <Pricing_down
              name={"Хөнгөлөлт"}
              feature={{
                name: ["Хөнгөлөлт засварлах", "Хөнгөлөлт тооцох"],
                check: [priceActive > 1 && true, priceActive > 1 && true],
              }}
            />
            <Pricing_down
              name={"Хураамж"}
              feature={{
                name: ["Хураамж засварлах", "Хураамж тооцох"],
                check: [priceActive > 1 && true, priceActive > 1 && true],
              }}
            />
            <Pricing_down
              name={"Гишүүнчлэлийн удирдлага"}
              feature={{
                name: ["Гишүүн лавлах", "Гишүүнчлэлийн бүлэг"],
                check: [priceActive > 1 && true, priceActive > 1 && true],
              }}
            />
            <Pricing_down
              name={"Тайлан"}
              feature={{
                name: [
                  "Борлуулалтын тайлан",
                  "Захиалгын тайлан",
                  "Буцаалтын тайлан",
                  "Гүйлгээний тайлан",
                  "Нэгтгэл тайлан",
                  "НӨАТ тайлан",
                ],
                check: [
                  priceActive > 1 && true,
                  priceActive > 1 && true,
                  priceActive > 1 && true,
                  priceActive > 1 && true,
                  priceActive > 1 && true,
                  priceActive > 1 && true,
                ],
              }}
            />
            <Pricing_down
              name={"Касс"}
              feature={{
                name: ["Касс", "Захиалга буцаах"],
                check: [priceActive > 1 && true, priceActive > 1 && true],
              }}
            />
            <Pricing_down
              name={"Санал хүсэлт"}
              feature={{
                name: ["Санал хүсэлт"],
                check: [priceActive > 1 && true],
              }}
            />
            <Pricing_down
              name={"Гал тогоо удирдлага"}
              feature={{
                name: [
                  "Гал тогоо засварлах",
                  "Тогооч",
                  "Бэлэн захиалгын дэлгэц",
                ],
                check: [
                  priceActive > 2 && true,
                  priceActive > 2 && true,
                  priceActive > 2 && true,
                ],
              }}
            />
            <Pricing_down
              name={"Караоке"}
              feature={{
                name: ["Караоке"],
                check: [priceActive > 2 && true],
              }}
            />
          </div>
        </div>
      </div>
      {pageHeight > 0 && (
        <div className={styles.sticky}>
          <a href="tel:+(976)77772040" className={styles.sticky_button}>
            Холбогдох
          </a>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import styles from "../../styles/pricing/pricing_phone.module.css";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import useScrollPosition from "./use_scroll";
import Pricing_down from "./pricing_down";
interface data {
  active: number;
}
export default function Pricing_phone(props: data) {
  const { active, ...others } = props;
  const [priceActive, setPriceActive] = useState(1);
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;
  return (
    <div className={styles.container}>
      <div className={pageHeight > 230 ? styles.fixed_nav : styles.nav}>
        <div className={styles.pricing_detail}>
          <h4 className={styles.col1}>Багц</h4>
          <div className={styles.col1}>
            {active === 1 && (
              <a
                onClick={() => setPriceActive(1)}
                className={
                  priceActive === 1
                    ? styles.price_active
                    : styles.price_not_active
                }
              >
                Lite <br />
                ₮30,000
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
                <br />
                ₮90,000
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
                Lite <br />
                ₮180,000
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
                Lite <br />
                ₮360,000
              </a>
            )}
          </div>
          <div className={styles.col1}>
            {" "}
            {active === 1 && (
              <a
                onClick={() => setPriceActive(2)}
                className={
                  priceActive === 2
                    ? styles.price_active
                    : styles.price_not_active
                }
              >
                Standart <br />
                ₮60,000
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
                <br />
                ₮180,000
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
                Standart <br />
                ₮360,000
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
                {" "}
                Standart <br />
                ₮720,000
              </a>
            )}
          </div>
          <div className={styles.col1}>
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
                Advenced <br />
                ₮30,000
              </a>
            )}{" "}
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
                Advenced <br />
                ₮30,000
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
                Advenced <br />
                ₮30,000
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
                Advenced <br />
                ₮30,000
              </a>
            )}
          </div>
        </div>
      </div>
      {priceActive === 1 && (
        <div className={styles.small_con}>
          <h4>Багцын хураангуй</h4>
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
          <Pricing_down
            name={"Захиалга"}
            feature={{
              name: ["Захиалах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"НӨАТ"}
            feature={{
              name: ["НӨАТ холболт"],
              check: [true],
              ...others,
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
              ...others,
            }}
          />
          <Pricing_down
            name={"Ширээ удирдлага"}
            feature={{
              name: ["Үйлчилгээний заал зохион байгуулах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Ажилтны удирдлага"}
            feature={{
              name: ["Роль засварлах", "Ажилтны мэдээлэл засварлах"],
              check: [true, true],
              ...others,
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
              ...others,
            }}
          />
          <Pricing_down
            name={"Хувийн мэдээлэл"}
            feature={{
              name: ["Хувийн мэдээлэл засварлах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Үндсэн дэлгэц"}
            feature={{
              name: ["Үндсэн дэлгэц"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Хөнгөлөлт"}
            feature={{
              name: ["Хөнгөлөлт засварлах", "Хөнгөлөлт тооцох"],
              check: [false, false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Хураамж"}
            feature={{
              name: ["Хураамж засварлах", "Хураамж тооцох"],
              check: [false, false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Гишүүнчлэлийн удирдлага"}
            feature={{
              name: ["Гишүүн лавлах", "Гишүүнчлэлийн бүлэг"],
              check: [false, false],
              ...others,
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
              check: [false, false, false, false, false, false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Касс"}
            feature={{
              name: ["Касс", "Захиалга буцаах"],
              check: [false, false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Санал хүсэлт"}
            feature={{
              name: ["Санал хүсэлт"],
              check: [false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Гал тогоо удирдлага"}
            feature={{
              name: ["Гал тогоо засварлах", "Тогооч", "Бэлэн захиалгын дэлгэц"],
              check: [false, false, false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Караоке"}
            feature={{
              name: ["Караоке"],
              check: [false],
              ...others,
            }}
          />
        </div>
      )}
      {priceActive === 2 && (
        <div className={styles.small_con}>
          <h4>Багцын хураангуй</h4>
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

          <Pricing_down
            name={"Захиалга"}
            feature={{
              name: ["Захиалах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"НӨАТ"}
            feature={{
              name: ["НӨАТ холболт"],
              check: [true],
              ...others,
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
              ...others,
            }}
          />
          <Pricing_down
            name={"Ширээ удирдлага"}
            feature={{
              name: ["Үйлчилгээний заал зохион байгуулах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Ажилтны удирдлага"}
            feature={{
              name: ["Роль засварлах", "Ажилтны мэдээлэл засварлах"],
              check: [true, true],
              ...others,
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
              ...others,
            }}
          />
          <Pricing_down
            name={"Хувийн мэдээлэл"}
            feature={{
              name: ["Хувийн мэдээлэл засварлах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Үндсэн дэлгэц"}
            feature={{
              name: ["Үндсэн дэлгэц"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Хөнгөлөлт"}
            feature={{
              name: ["Хөнгөлөлт засварлах", "Хөнгөлөлт тооцох"],
              check: [true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Хураамж"}
            feature={{
              name: ["Хураамж засварлах", "Хураамж тооцох"],
              check: [true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Гишүүнчлэлийн удирдлага"}
            feature={{
              name: ["Гишүүн лавлах", "Гишүүнчлэлийн бүлэг"],
              check: [true, true],
              ...others,
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
              check: [true, true, true, true, true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Касс"}
            feature={{
              name: ["Касс", "Захиалга буцаах"],
              check: [true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Санал хүсэлт"}
            feature={{
              name: ["Санал хүсэлт"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Гал тогоо удирдлага"}
            feature={{
              name: ["Гал тогоо засварлах", "Тогооч", "Бэлэн захиалгын дэлгэц"],
              check: [false, false, false],
              ...others,
            }}
          />
          <Pricing_down
            name={"Караоке"}
            feature={{
              name: ["Караоке"],
              check: [false],
              ...others,
            }}
          />
        </div>
      )}
      {priceActive === 3 && (
        <div className={styles.small_con}>
          <h4>Багцын хураангуй</h4>
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
              <h4>Тайлан</h4>
            </div>
            <div className={styles.con}>
              <Image src={check} alt={""} />
              <h4>Гал тогоо удирдлага</h4>
            </div>
          </div>

          <Pricing_down
            name={"Захиалга"}
            feature={{
              name: ["Захиалах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"НӨАТ"}
            feature={{
              name: ["НӨАТ холболт"],
              check: [true],
              ...others,
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
              ...others,
            }}
          />
          <Pricing_down
            name={"Ширээ удирдлага"}
            feature={{
              name: ["Үйлчилгээний заал зохион байгуулах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Ажилтны удирдлага"}
            feature={{
              name: ["Роль засварлах", "Ажилтны мэдээлэл засварлах"],
              check: [true, true],
              ...others,
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
              ...others,
            }}
          />
          <Pricing_down
            name={"Хувийн мэдээлэл"}
            feature={{
              name: ["Хувийн мэдээлэл засварлах"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Үндсэн дэлгэц"}
            feature={{
              name: ["Үндсэн дэлгэц"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Хөнгөлөлт"}
            feature={{
              name: ["Хөнгөлөлт засварлах", "Хөнгөлөлт тооцох"],
              check: [true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Хураамж"}
            feature={{
              name: ["Хураамж засварлах", "Хураамж тооцох"],
              check: [true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Гишүүнчлэлийн удирдлага"}
            feature={{
              name: ["Гишүүн лавлах", "Гишүүнчлэлийн бүлэг"],
              check: [true, true],
              ...others,
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
              check: [true, true, true, true, true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Касс"}
            feature={{
              name: ["Касс", "Захиалга буцаах"],
              check: [true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Санал хүсэлт"}
            feature={{
              name: ["Санал хүсэлт"],
              check: [true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Гал тогоо удирдлага"}
            feature={{
              name: ["Гал тогоо засварлах", "Тогооч", "Бэлэн захиалгын дэлгэц"],
              check: [true, true, true],
              ...others,
            }}
          />
          <Pricing_down
            name={"Караоке"}
            feature={{
              name: ["Караоке"],
              check: [true],
              ...others,
            }}
          />
        </div>
      )}
    </div>
  );
}

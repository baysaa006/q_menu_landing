import React from "react";
import Image from "next/image";
import check from "../../public/icons/Check-mark.svg";
import styles from "../../styles/pricing/pricing_detail.module.css";
import useScrollPosition from "./use_scroll";
interface data {
  active: any;
}
export default function Pricing_features(props: data) {
  const { active, ...other } = props;
  const scrollPos = useScrollPosition();
  let pageHeight = scrollPos;
  return (
    <div>
      <div className={pageHeight > 230 ? styles.fixed_nav : styles.nav}>
        <div className={styles.pricing_detail}>
          <div className={styles.col1}>Багц</div>
          <div className={styles.col1}>
            <h4>Lite</h4>
          </div>
          <div className={styles.col1}>
            <h4>Standart</h4>
          </div>
          <div className={styles.col1}>
            <h4>Advenced</h4>
          </div>
        </div>
      </div>
      <div className={styles.pricing_detail}>
        <h4 className={styles.col}>Багцын хураангуй</h4>
        <div className={styles.col}>
          <div className={styles.details}>
            <div className={styles.font}>
              {active === 1 && <h4>₮30,000</h4>}
              {active === 2 && <h4>₮90,000</h4>}
              {active === 3 && <h4>₮180,000</h4>}
              {active === 4 && <h4>₮360,000</h4>}
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Үндсэн дэлгэц</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>НӨАТ</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Ширээ захиалга</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Захиалга</h4>
            </div>
            <a href="tel:+77772040" className={styles.button}>
              Холбогдох
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.details}>
            <div className={styles.font}>
              {active === 1 && <h4>₮60,000</h4>}
              {active === 2 && <h4>₮180,000</h4>}
              {active === 3 && <h4>₮360,000</h4>}
              {active === 4 && <h4>₮720,000</h4>}
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Lite багц</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Хөнгөлөлт</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Хураамж</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Гишүүнчлэлийн удирдлага</h4>
            </div>
            <a href="tel:+77772040" className={styles.button}>
              Холбогдох
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.details}>
            <div className={styles.font}>
              {active === 1 && <h4>1</h4>}
              {active === 2 && <h4>2</h4>}
              {active === 3 && <h4>3</h4>}
              {active === 4 && <h4>4</h4>}
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Standart багц</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Касс</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Тайлан</h4>
            </div>
            <div className={styles.detail}>
              <Image src={check} alt={""} />
              <h4>Гал тогоо удирдлага</h4>
            </div>
            <a href="tel:+77772040" className={styles.button}>
              Холбогдох
            </a>
          </div>
        </div>
      </div>
      <div id="Захиалга">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Захиалга
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}> Захиалга лавлах</div>
          <div className={styles.col}>
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="НӨАТ">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            НӨАТ
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>НӨАТ холболт</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Бүтээгдэхүүн удирдлага">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Бүтээгдэхүүн удирдлага
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Бүтээгдэхүүн ангилал засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Бүтээгдэхүүн засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Бүтээгдэхүүн цэс засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Бүтээгдэхүүн захиалгыг зогсоох, нээх</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Ширээ удирдлага">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Ширээ удирдлага
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Үйлчилгээний заал зохион байгуулах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Ажилтны удирдлага">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Ажилтны удирдлага
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Роль засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Ажилтны мэдээлэл засварлах </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Салбарын удирдлага">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Салбар удирдлага
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Салбар засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Байгууллага засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Суваг засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Төхөөрөмж засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Төлбөрийн суваг</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Баримт засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Багц лавлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Хувийн мэдээлэл">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Хувийн мэдээлэл
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}> Хувийн мэдээлэл засварлах</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Үндсэн дэлгэц">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Үндсэн дэлгэц
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Үндсэн дэлгэц</div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Хөнгөлөлт">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Хөнгөлөлт
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Хөнгөлөлт засварлах</div>
          <div className={styles.col}>
            {" "}
            <div className={styles.dot}></div>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Хөнгөлөлт тооцох</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Хураамж">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Хураамж
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Хураамж засварлах</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}> </span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Хураамж тооцох</div>
          <div className={styles.col}>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Гишүүнчлэлийн удирдлага">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Гишүүнчлэлийн удирдлага
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Гишүүн лавлах</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Гишүүнчлэлийн бүлэг</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Тайлан">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Тайлан
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Борлуулалтын тайлан</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Захиалгын тайлан</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Буцаалтын тайлан</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Гүйлгээний тайлан</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Нэгтгэл тайлан</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>НӨАТ тайлан</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Касс">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Касс
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Касс</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Захиалга буцаах</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Санал хүсэлт">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Санал хүсэлт
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Санал хүсэлт</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Гал тогоо">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Гал тогоо удирдлага
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}> Гал тогоо засварлах </div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Тогооч</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Бэлэн захиалгын дэлгэц</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div id="Караоке">
        <div className={styles.pricing_detail}>
          <div id="first" className={styles.col1}>
            Караоке
          </div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
          <div className={styles.col1}></div>
        </div>
        <div className={styles.pricing_detail}>
          <div className={styles.col}>Караоке</div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <span className={styles.dot}></span>
          </div>
          <div className={styles.col}>
            {" "}
            <Image src={check} alt="check-mark" />
          </div>
        </div>
      </div>
      <div className={styles.pricing_detail}>
        <div className={styles.col}></div>
        <div className={styles.col}>
          {" "}
          <a href="tel:+77772040" className={styles.button}>
            Холбогдох
          </a>
        </div>
        <div className={styles.col}>
          {" "}
          <a href="tel:+77772040" className={styles.button}>
            Холбогдох
          </a>
        </div>
        <div className={styles.col}>
          {" "}
          <a href="tel:+77772040" className={styles.button}>
            Холбогдох
          </a>
        </div>
      </div>
    </div>
  );
}

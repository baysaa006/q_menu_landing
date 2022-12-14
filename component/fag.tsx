import React, { useState } from "react";
import styles from "../styles/fag.module.css";
import downarrow from "../public/icons/down.svg";
import Image from "next/image";

export default function Fag() {
  const [down, setDown] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const downPlus = () => {
    setDown({ first: false, second: false, third: false, fourth: false });
  };
  return (
    <div className={styles.container}>
      <h1>Нийтлэг асуултууд болон хариултууд</h1>
      <div className={styles.small_con}>
        <div
          onClick={() => {
            down.first
              ? downPlus()
              : setDown({
                  first: true,
                  second: false,
                  third: false,
                  fourth: false,
                });
          }}
          className={styles.col}
        >
          <div className={styles.upper}>
            <h4 className={styles.header}>Q-Menu гэж юу вэ?</h4>
            <Image
              src={downarrow}
              alt="down"
              className={down.first ? styles.rotate : styles.down}
            />
          </div>
          <h4 className={down.first ? styles.show : styles.lower}>
            Ресторан, бар, зочид буудал, амралтын газруудад зориулсан дижитал
            меню юм. Үйлчлүүлэгчид өөрсдийн гар утасны камераар тухайн
            байгууллагын ширээн дээр байрлах QR кодыг уншуулсанаар тухайн
            байгууллагын меню гарч ирнэ. Үйлчлүүлэгч дижитал меню дээрээс
            захиалгаа илгээх, төлбөр тооцоогоо онлайн төлөх боломжтой.
          </h4>
        </div>
        <div
          onClick={() => {
            down.second
              ? downPlus()
              : setDown({
                  first: false,
                  second: true,
                  third: false,
                  fourth: false,
                });
          }}
          className={styles.col}
        >
          <div className={styles.upper}>
            <h4 className={styles.header}>Кассын системтэй юу?</h4>
            <Image
              src={downarrow}
              alt="down"
              className={down.second ? styles.rotate : styles.down}
            />
          </div>
          <h4 className={down.second ? styles.show : styles.lower}>
            Рестораны кассын програмыг сайжруулан боловсруулсан системтэй.
            Зөөгчийн шаардлагагүйгээр захиалга автоматаар системд бүртгэгдэнэ.
            Мөн бараа материалын удирлагын модультай тул байгууллагын үйл
            ажиллагаа, тайлан бүртгэлийг хөнгөвчилнө.
          </h4>
        </div>
        <div
          onClick={() => {
            down.third
              ? downPlus()
              : setDown({
                  first: false,
                  second: false,
                  third: true,
                  fourth: false,
                });
          }}
          className={styles.col}
        >
          <div className={styles.upper}>
            <h4 className={styles.header}>Таблет меню байгаа юу? </h4>
            <Image
              src={downarrow}
              alt="down"
              className={down.third ? styles.rotate : styles.down}
            />{" "}
          </div>
          <h4 className={down.third ? styles.show : styles.lower}>
            Байгууллага хүсвэл рестораны ширээ бүр дээр таблет меню байрлуулж
            болох бөгөөд заавал QR код уншуулах шаардлагагүйгээр захиалгаа
            илгээх болон төлбөр тооцоогоо хийх боломжтой систем юм.
          </h4>
        </div>
        <div
          onClick={() => {
            down.fourth
              ? downPlus()
              : setDown({
                  first: false,
                  second: false,
                  third: false,
                  fourth: true,
                });
          }}
          className={styles.col}
        >
          <div className={styles.upper}>
            <h4 className={styles.header}>Хэрхэн харилцагч болох вэ?</h4>
            <Image
              src={downarrow}
              alt="down"
              className={down.fourth ? styles.rotate : styles.down}
            />{" "}
          </div>
          <h4 className={down.fourth ? styles.show : styles.lower}>
            77772040 info@qmenu.mn имэйл хаягаар бидэнтэй холбогдож гэрээ
            байгуулсанаар тус системүүдийг ашиглах боломжтой.
          </h4>
        </div>
      </div>
    </div>
  );
}

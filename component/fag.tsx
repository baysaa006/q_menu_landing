import React, { useState } from "react";
import styles from "../styles/fag.module.css";

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
      <h3>Асуулт,хариулт</h3>
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
            <h1 className={styles.header}>Q-Menu гэж юу вэ?</h1>
            <h1 className={down.first ? styles.rotate : styles.down}>+</h1>
          </div>
          <p className={down.first ? styles.show : styles.lower}>
            Ресторан, бар, зочид буудал, амралтын газруудад зориулсан дижитал
            меню юм. Үйлчлүүлэгчид өөрсдийн гар утасны камераар тухайн
            байгууллагын ширээн дээр байрлах QR кодыг уншуулсанаар тухайн
            байгууллагын меню гарч ирнэ. Үйлчлүүлэгч дижитал меню дээрээс
            захиалгаа илгээх, төлбөр тооцоогоо онлайн төлөх боломжтой.
          </p>
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
            <h1 className={styles.header}>Кассын системтэй юу?</h1>
            <h1 className={down.second ? styles.rotate : styles.down}>+</h1>
          </div>
          <p className={down.second ? styles.show : styles.lower}>
            Рестораны кассын програмыг сайжруулан боловсруулсан системтэй.
            Зөөгчийн шаардлагагүйгээр захиалга автоматаар системд бүртгэгдэнэ.
            Мөн бараа материалын удирлагын модультай тул байгууллагын үйл
            ажиллагаа, тайлан бүртгэлийг хөнгөвчилнө.
          </p>
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
            <h1 className={styles.header}>Таблет меню байгаа юу? </h1>
            <h1 className={down.third ? styles.rotate : styles.down}>+</h1>
          </div>
          <p className={down.third ? styles.show : styles.lower}>
            Байгууллага хүсвэл рестораны ширээ бүр дээр таблет меню байрлуулж
            болох бөгөөд заавал QR код уншуулах шаардлагагүйгээр захиалгаа
            илгээх болон төлбөр тооцоогоо хийх боломжтой систем юм.
          </p>
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
            <h1 className={styles.header}>Хэрхэн харилцагч болох вэ?</h1>
            <h1 className={down.fourth ? styles.rotate : styles.down}>+</h1>
          </div>
          <p className={down.fourth ? styles.show : styles.lower}>
            77772040 info@qmenu.mn имэйл хаягаар бидэнтэй холбогдож гэрээ
            байгуулсанаар тус системүүдийг ашиглах боломжтой.
          </p>
        </div>
      </div>
    </div>
  );
}

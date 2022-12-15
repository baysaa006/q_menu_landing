import React from "react";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import img from "../public/img/contact.svg";
export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Бидэнтэй холбогдоорой</h1>
      <div className={styles.main}>
        <div className={styles.img}>
          <Image src={img} alt="Холбогдох" />
        </div>

        <form className={styles.form}>
          {" "}
          <input
            className={styles.input}
            type="text"
            placeholder="Нэр"
            data-required="true"
            data-type="text"
            data-error-message="Цахим хаягаа оруулана уу!"
          />
          <div className={styles.row}>
            {" "}
            <input
              className={styles.input}
              type="text"
              placeholder="Утасны дугаар"
              data-required="true"
              data-type="phone-number"
              data-error-message="Утасны дугаар оруулана уу!"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Цахим хаяг"
              name="email"
              data-required="true"
              data-type="email"
              data-error-message="Нэрээ оруулана уу!"
            />
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Таны мэссэж"
            data-required="true"
            data-type="text"
            data-error-message="Та мэссэжээ оруулана уу!"
          />
          <button className={styles.button}>Илгээх</button>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/contact/contact.module.css";
import img from "../../public/img/contact.svg";
import Contact_sent from "./contact_sent";
import Contact_loader from "./contact_loader";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState({
    userName: "",
    phoneNumber: "",
    senderEmail: "",
    message: "",
  });
  const send = () => {
    setSent(true);
  };
  // const sendEmail = () => {
  //   if (email) {
  //     try {
  //       console.log(email);
  //     } catch (error) {}
  //   } else {
  //     console.log("Empty");
  //   }
  // };
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
            value={email.userName}
            onChange={(e) => {
              setEmail({ ...email, userName: e.target.value });
            }}
            placeholder="Нэр"
            data-required="true"
            data-type="text"
            data-error-message="Цахим хаягаа оруулана уу!"
          />
          <div className={styles.row}>
            {" "}
            <input
              className={styles.input}
              type="number"
              onChange={(e) => {
                setEmail({ ...email, phoneNumber: e.target.value });
              }}
              value={email.phoneNumber}
              placeholder="Утасны дугаар"
              data-required="true"
              data-type="phone-number"
              data-error-message="Утасны дугаар оруулана уу!"
            />
            <input
              className={styles.input}
              type="email"
              value={email.senderEmail}
              placeholder="Цахим хаяг"
              onChange={(e) => {
                setEmail({ ...email, senderEmail: e.target.value });
              }}
              data-required="true"
              data-type="email"
              data-error-message="Нэрээ оруулана уу!"
            />
          </div>
          <input
            className={styles.input}
            type="text"
            value={email.message}
            onChange={(e) => {
              setEmail({ ...email, message: e.target.value });
            }}
            placeholder="Таны мэссэж"
            data-required="true"
            data-type="text"
            data-error-message="Та мэссэжээ оруулана уу!"
          />
          {sent && <Contact_sent />}
          <input
            disabled
            aria-label="send"
            onClick={send}
            value="Илгээх"
            className={styles.button}
          />
        </form>
      </div>
    </div>
  );
}

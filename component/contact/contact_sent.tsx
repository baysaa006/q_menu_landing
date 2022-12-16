import React from "react";
import Image from "next/image";
import styles from "../../styles/contact/contact_sent.module.css";
import sent from "../../public/icons/sent.svg";
export default function Contact_sent() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {" "}
        <Image src={sent} alt="sent" />
        <h4>Aмжилттай илгээгдлээ</h4>
      </div>
    </div>
  );
}

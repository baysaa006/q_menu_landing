import React from "react";
import Image from "next/image";
import star from "../../public/icons/star.svg";
import styles from "../../styles/comment/comment_card.module.css";
interface data {
  title: string;
  name: string;
  description: string;
  photo: any;
}
export default function Comments_card(props: data) {
  const { title, name, description, photo, ...other } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.star}>
          {" "}
          <Image src={star} alt="" />
          <Image src={star} alt="" />
          <Image src={star} alt="" />
          <Image src={star} alt="" />
          <Image src={star} alt="" />
        </div>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
      <div className={styles.main}>
        <Image className={styles.img} src={photo} alt={"partner"} />
        <h4>{name}</h4>
      </div>
    </div>
  );
}

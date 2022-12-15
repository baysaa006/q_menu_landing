import React from "react";
import Comments_card from "./comments_card";
import styles from "../../styles/comment/comment.module.css";
export default function Comment() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Харигцагчдийн сэтгэгдэл</h3>
        <h1>Харигцагчид бидний талаар</h1>
      </div>
      <div className={styles.main}>
        {/* <Comments_card
          title={"Гайхалтай шийдэл"}
          name={"GAN"}
          description={""}
          photo={""}
        />
        <Comments_card
          title={"Гайхалтай шийдэл"}
          name={"GAN"}
          description={""}
          photo={""}
        />
        <Comments_card
          title={"Гайхалтай шийдэл"}
          name={"DAO"}
          description={""}
          photo={""}
        />
        <Comments_card
          title={"Гайхалтай шийдэл"}
          name={"GAN"}
          description={""}
          photo={""}
        /> */}
      </div>
    </div>
  );
}

import React from "react";
import Comments_card from "./comments_card";
import styles from "../../styles/comment/comment.module.css";
import partner1 from "../../public/img/partners1.jpg";
import partner2 from "../../public/img/partners2.jpg";
import partner3 from "../../public/img/partners3.jpg";
import partner4 from "../../public/img/partners4.jpg";
import partner5 from "../../public/img/partners5.jpg";
import partner6 from "../../public/img/partners6.jpg";
import partner7 from "../../public/img/partners7.jpg";
export default function Comment() {
  return (
    <section className={styles.carousel}>
      <div className={styles.container_fluid}>
        <div className={styles.row}>
          <div className={styles.header}>
            <h3>Хамтрагчидийн сэтгэгдэл</h3>
            <h1>Бидний талаар</h1>
          </div>
          <div className={styles.col_12}>
            <div className={styles.carousel__wrapper}>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"DAO"}
                    description={""}
                    photo={partner1}
                  />{" "}
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"BLUEFIN"}
                    description={""}
                    photo={partner2}
                  />{" "}
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"THE BLUE SKY"}
                    description={""}
                    photo={partner3}
                  />{" "}
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"Улаанбаатал зочид буудал"}
                    description={""}
                    photo={partner4}
                  />{" "}
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"GAN"}
                    description={""}
                    photo={partner5}
                  />{" "}
                </div>
              </div>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"GAN"}
                    description={""}
                    photo={partner6}
                  />{" "}
                </div>
              </div>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"GAN"}
                    description={""}
                    photo={partner7}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Comments_card from "./comments_card";
import styles from "../../styles/comment/comment.module.css";
export default function Comment() {
  return (
    <section className={styles.carousel}>
      <div className={styles.container_fluid}>
        <div className={styles.row}>
          <div className={styles.header}>
            <h3>Хамтрагчид</h3>
            <h1>Итгэл хүлээлгэсэн хамтрагчид</h1>
          </div>
          <div className={styles.col_12}>
            <div className={styles.carousel__wrapper}>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  <Comments_card
                    title={"Гайхалтай шийдэл"}
                    name={"GAN"}
                    description={""}
                    photo={""}
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
                    photo={""}
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
                    photo={""}
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
                    photo={""}
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
                    photo={""}
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
                    photo={""}
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
                    photo={""}
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
                    photo={""}
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

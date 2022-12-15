import React from "react";
import styles from "../styles/partners.module.css";
import Image from "next/image";
import partner1 from "../public/img/partners1.jpg";
import partner2 from "../public/img/partners2.jpg";

import partner3 from "../public/img/partners3.jpg";

import partner4 from "../public/img/partners4.jpg";

import partner5 from "../public/img/partners5.jpg";

import partner6 from "../public/img/partners6.jpg";

import partner7 from "../public/img/partners7.jpg";

export default function Partners() {
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
                  <Image src={partner1} alt="partner" />
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner2} alt="partner" />
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner3} alt="partner" />
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner4} alt="partner" />
                </div>
              </div>

              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner5} alt="partner" />
                </div>
              </div>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner6} alt="partner" />
                </div>
              </div>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner7} alt="partner" />
                </div>
              </div>
              <div className={styles.carousel__slide}>
                <div className={styles.carousel__image}>
                  {" "}
                  <Image src={partner1} alt="partner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

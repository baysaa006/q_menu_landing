import React from "react";
import styles from "../../styles/pricing/pricing_desktop.module.css";
export default function Pricing_desktop() {
  return (
    <section className={styles.container}>
      <thead className={styles.pricing_detail}>
        <tr className={styles.pricing_detail}>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>3</th>
        </tr>
      </thead>
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody className={styles.pricing_detail}>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
        </tbody>
      </table>
    </section>
  );
}

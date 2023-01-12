import React from "react";
import { product, product2 } from "../../assets";
import styles from "./StorePage.module.css";

const SingleProduct = () => {
  return (
    <div className={styles.storepage__product}>
      <div className={styles.storepage__image}>
        <img src={product2} alt="bottle of serum" />
      </div>
      <p>Blue Calming Serum</p>
      <div className={styles.storepage__price}>
        <p>$7.99</p>
        <p>$7.99 (30% off)</p>
      </div>
    </div>
  );
};

export default SingleProduct;

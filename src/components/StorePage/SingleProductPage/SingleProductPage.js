import React from "react";
import styles from "./SingleProductPage.module.css";
import { useLocation } from "react-router-dom";
import { checkMark } from "../../../assets/";

const SingleProductPage = () => {
  const location = useLocation();
  const state = location.state;
  const {
    productName,
    productOnSale,
    productPrice,
    productSalePrice,
    productImage,
    productColor,
    productSalePercent,
    productType,
  } = state.attributes;
  return (
    <main className={styles.single}>
      <h2>{productName}</h2>
      <div
        className={styles.single__imagecontainer}
        style={productColor && { backgroundColor: productColor }}
      >
        <img
          className={styles.single__image}
          src={process.env.REACT_APP_URL + productImage.data.attributes.url}
          alt={productName}
        />
        <p>150ml</p>
      </div>
      <div className={styles.single__info}>
        <h2 className={styles.single__infoh2}>{productName}</h2>
        <div className={styles.single__infoprice}>
          <div className={styles.single__infoskin}>
            <p>SKIN TYPE</p>
            <p>All</p>
          </div>
          <p>${productPrice}</p>
        </div>
        <ul className={styles.single__benefits}>
          <li className={styles.single__li}>
            <img src={checkMark} alt="check mark" />
            <p>Brightening</p>
          </li>
          <li className={styles.single__li}>
            <img src={checkMark} alt="check mark" />
            <p>Moisturizing</p>
          </li>
          <li className={styles.single__li}>
            <img src={checkMark} alt="check mark" />
            <p>Antioxidant</p>
          </li>
        </ul>
        <div className={styles.single__amount}>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button className={styles.single__btn}>ADD TO CART</button>
      </div>
    </main>
  );
};

export default SingleProductPage;

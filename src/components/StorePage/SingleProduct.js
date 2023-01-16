import React from "react";
import { product, product2 } from "../../assets";
import styles from "./StorePage.module.css";

const SingleProduct = ({ productInfo }) => {
  const {
    productName,
    productOnSale,
    productPrice,
    productSalePrice,
    productImage,
    productColor,
    productSalePercent,
    productType,
  } = productInfo.attributes;
  return (
    <div className={styles.storepage__product}>
      <div
        className={`${styles.storepage__image} ${
          productType === "cream" ? styles.storepage__cream : ""
        } `}
        style={productColor && { backgroundColor: productColor }}
      >
        <img
          src={process.env.REACT_APP_URL + productImage.data.attributes.url}
          alt={productName}
          style={productColor && { backgroundColor: productColor }}
        />
      </div>
      <p>{productName}</p>
      <div className={styles.storepage__price}>
        <p>${productPrice}</p>
        {productOnSale ? (
          <p>
            $ {productSalePrice} ({productSalePercent}% off)
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;

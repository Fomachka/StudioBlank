import React from "react";
import styles from "./StorePage.module.css";
import { Link } from "react-router-dom";

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
      <Link to={`/store/${productInfo.id}`} state={productInfo}>
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
            className={styles.storepage__productimage}
          />
        </div>
      </Link>
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

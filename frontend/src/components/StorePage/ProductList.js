import React from "react";
import SingleProduct from "./SingleProduct";
import styles from "./StorePage.module.css";

const ProductList = ({ productList, loading }) => {
  if (loading) {
    return <h2 className={styles.loading}>Loading Data...</h2>;
  }
  return (
    <ul className={styles.storepage__section}>
      {productList.map((product) => {
        return (
          <li key={product.id}>
            <SingleProduct key={product.id} productInfo={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;

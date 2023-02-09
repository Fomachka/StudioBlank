import React from "react";
import styles from "./SingleCartItem.module.css";
import { menuCloseIcon } from "../../../assets";
import { removeItem, incrementCart, decrementCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleCartItem = ({ productInfo }) => {
  const dispatch = useDispatch();
  const image = productInfo.attributes.productImage.data.attributes.url;

  const { productColor, productType, productName, productPrice } = productInfo.attributes;

  return (
    <li>
      <div className={styles.cartpage__container}>
        <div className={styles.cartpage__imagediv} style={{ backgroundColor: productColor }}>
          <img
            className={`${
              productType === "cream" ? styles.cartpage__cream : styles.cartpage__serum
            }`}
            src={image}
            alt="bottle of a serum"
            style={{ backgroundColor: productColor }}
          />
          <div
            className={styles.cartpage__iconbg}
            onClick={() => dispatch(removeItem(productInfo.id))}
          >
            <img src={menuCloseIcon} alt="closing icon" />
          </div>
        </div>
        <div className={styles.cartpage__info}>
          <p>{productName}</p>
          <p>{productType === "cream" ? "Cream / 200ml" : "Serum / 150ml"} </p>
          <div className={styles.cartpage__infoprice}>
            <p>${productPrice}</p>
            <div className={styles.single__amount}>
              <button onClick={() => dispatch(decrementCart(productInfo.id))}>-</button>
              <p>{productInfo.quantity}</p>
              <button onClick={() => dispatch(incrementCart(productInfo.id))}>+</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleCartItem;

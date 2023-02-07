import React, { useState } from "react";
import styles from "./SingleProductPage.module.css";
import { useLocation } from "react-router-dom";
import { checkMark } from "../../../assets/";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = location.state;
  const { productName, productPrice, productImage, productColor, productType } = state.attributes;

  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleQuantity = (state) => {
    if (state === "increase") {
      setCurrentQuantity((prev) => prev + 1);
    } else {
      if (currentQuantity === 1) {
        setCurrentQuantity(1);
      } else if (currentQuantity > 1) {
        setCurrentQuantity((prev) => prev - 1);
      }
    }
  };

  const handleCart = () => {
    dispatch(
      addToCart({
        attributes: { ...state.attributes },
        id: state.id,
        quantity: currentQuantity,
      })
    );
    toast(productName + " added to cart", {
      style: {
        border: `2px solid ${productColor}`,
        borderRadius: "10px",
      },
      icon: "✅",
    });
    setCurrentQuantity(1);
  };

  return (
    <main className={styles.single}>
      <h2>{productName}</h2>
      <div
        className={styles.single__imagecontainer}
        style={productColor && { backgroundColor: productColor }}
      >
        <img
          className={`${styles.single__image} ${productType === "cream" && styles.single__cream}`}
          src={process.env.REACT_APP_URL + productImage.data.attributes.url}
          alt={productName}
        />
        <p>{productType === "cream" ? "200ml" : "150ml"}</p>
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
          <button onClick={() => handleQuantity("decrease")}>-</button>
          <p>{currentQuantity}</p>
          <button onClick={() => handleQuantity("increase")}>+</button>
        </div>
        <button className={styles.single__btn} onClick={handleCart}>
          ADD TO CART
        </button>
      </div>
      <Toaster position="top-center" containerClassName={styles.single__toaster} gutter={24} />
    </main>
  );
};

export default SingleProductPage;

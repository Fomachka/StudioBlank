import React from "react";
import styles from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartpageIcon, warningIcon } from "../../assets";
import SingleCart from "./SingleCartItem/SingleCartItem";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      await fetch("https://stripe-backend-one.vercel.app/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [...cart] }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.url) {
            window.location.assign(response.url);
          }
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    for (let item of cart) {
      let price = item.quantity * item.attributes.productPrice;
      total += price;
    }
    return total.toFixed(2);
  };

  return (
    <main
      className={`${styles.cartpage} ${cart.length === 0 ? styles.cartpage__none : null}`}
    >
      {cart.length === 0 ? (
        <div className={styles.cartpage__empty}>
          <img src={warningIcon} alt="warning icon" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className={styles.cartpage__media}>
          <div className={styles.cartpage__amount}>
            <img src={cartpageIcon} alt="cart icon" />
            <p>
              You have {cart.length > 0 && cart.length}{" "}
              {cart.length > 1 ? "items " : "item"} in your cart
            </p>
          </div>
          <div className={styles.cartpage__table}>
            <div className={`${styles.cartpage__amount} ${styles.cartpage__amount2}`}>
              <img src={cartpageIcon} alt="cart icon" />
              <p>
                You have {cart.length > 0 && cart.length}{" "}
                {cart.length > 1 ? "items " : "item"} in your cart
              </p>
            </div>
            <div className={styles.cartpage__pricesinfo}>
              <div className={styles.cartpage__prices}>
                <hr />
                <div className={styles.cartpage__prices1}>
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className={styles.cartpage__prices1}>
                  <p>Subtotal:</p>
                  <p>${cart.length > 0 ? calculateTotal() : 0}</p>
                </div>
              </div>
              <div className={styles.cartpage__pricestotal}>
                <hr />
                <div className={styles.cartpage__pricestotal1}>
                  <p>
                    Total ({cart.length === 0 ? 0 : cart.length}{" "}
                    {cart.length > 1 || cart.length === 0 ? "items " : "item"}):
                  </p>
                  <p>${cart.length > 0 ? calculateTotal() : 0}</p>
                </div>
              </div>
            </div>
            <button className={styles.cartpage__btn} onClick={handlePayment}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <ul className={styles.cartpage__containers}>
            {" "}
            {cart?.map((item, index) => {
              return <SingleCart productInfo={item} key={index} />;
            })}
          </ul>
        </div>
      )}
      <div
        className={`${styles.cartpage__pricesinfo} ${
          cart.length !== 0 ? styles.cartpage__pricesinfo2 : null
        }`}
      >
        <div className={styles.cartpage__prices}>
          <hr />
          <div className={styles.cartpage__prices1}>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className={styles.cartpage__prices1}>
            <p>Subtotal:</p>
            <p>${cart.length > 0 ? calculateTotal() : 0}</p>
          </div>
        </div>
        <div className={styles.cartpage__pricestotal}>
          <hr />
          <div className={styles.cartpage__pricestotal1}>
            <p>
              Total ({cart.length === 0 ? 0 : cart.length}{" "}
              {cart.length > 1 || cart.length === 0 ? "items " : "item"}):
            </p>
            <p>${cart.length > 0 ? calculateTotal() : 0}</p>
          </div>
        </div>
        {cart.length === 0 ? (
          <button className={styles.cartpage__btn} onClick={() => navigate("/store")}>
            BACK TO STORE
          </button>
        ) : (
          <button className={styles.cartpage__btn} onClick={handlePayment}>
            PROCEED TO CHECKOUT
          </button>
        )}
      </div>
    </main>
  );
};

export default CartPage;

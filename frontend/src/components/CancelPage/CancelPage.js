import React, { useEffect } from "react";
import styles from "./CancelPage.module.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CancelPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast("Payment Cancelled", {
      style: {
        border: `2px solid red`,
        borderRadius: "10px",
      },
      icon: "❌",
      duration: 1000,
    });
    setTimeout(() => toast.remove(), 1000);
  }, []);
  return (
    <main className={styles.success}>
      <div>
        <p>Your payment was cancelled.</p>
        <p>You can cancel or add items below.</p>
      </div>
      <button onClick={() => navigate("/cart")}>GO TO MY CART</button>
      <Toaster
        position="top-center"
        containerClassName={styles.success__toaster}
        gutter={24}
      />
    </main>
  );
};

export default CancelPage;

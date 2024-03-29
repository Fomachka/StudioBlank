import React, { useEffect } from "react";
import styles from "./SuccessPage.module.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast("Form Submitted Successfully", {
      style: {
        border: `2px solid green`,
        borderRadius: "10px",
      },
      icon: "✅",
      duration: 1000,
    });
    setTimeout(() => toast.remove(), 1000);
  }, []);

  return (
    <main className={styles.success}>
      <div>
        <p>THANK YOU FOR CONTACTING US!</p>
        <p>We will contact you very soon</p>
      </div>
      <button onClick={() => navigate("/")}>BACK HOME</button>
      <Toaster
        position="top-center"
        containerClassName={styles.success__toaster}
        gutter={24}
      />
    </main>
  );
};

export default SuccessPage;

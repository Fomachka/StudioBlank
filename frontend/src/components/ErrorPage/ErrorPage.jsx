import React from "react";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.error}>
      <p>404</p>
      <p>PAGE NOT FOUND...</p>
      <button onClick={() => navigate("/store")}>GO BACK TO STORE</button>
    </main>
  );
};

export default ErrorPage;

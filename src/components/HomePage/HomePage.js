import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={styles.homepage}>
      <section className={styles.homepage__top}>
        <h1>SERUMS</h1>
        <p>Fully organic ingredients to keep your skin clean and moisturized.</p>
      </section>
      <section className={styles.homepage__images}>
        <div className={`${styles.homepage__img} ${styles.homepage__img1}`}></div>
        <div className={styles.homepage__imageDiv}>
          <div className={`${styles.homepage__img} ${styles.homepage__img3}`}></div>
          <button className={styles.homepage__btn}>SHOP NOW</button>
        </div>
        <div className={`${styles.homepage__img} ${styles.homepage__img2}`}></div>
      </section>
    </main>
  );
};

export default HomePage;

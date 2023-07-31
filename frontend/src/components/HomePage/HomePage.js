import React from "react";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

import womanImage from "../../assets/images/womanImage.png";
import womanImageSmall from "../../assets/images/womanImageSmall.png";
import womanImageWebp from "../../assets/images/webp/womanImage.webp";
import womanImageSmallWebp from "../../assets/images/webp/womanImageSmall.webp";

import serumsImage from "../../assets/images/serumsImage.png";
import serumsImageSmall from "../../assets/images/serumsImageSmall.png";
import serumsImageWebp from "../../assets/images/webp/serumsImage.webp";
import serumsImageSmallWebp from "../../assets/images/webp/serumsImageSmall.webp";

import applyImage from "../../assets/images/applyImage.png";
import applyImageSmall from "../../assets/images/applyImageSmall.png";
import applyImageWebp from "../../assets/images/webp/applyImage.webp";
import applyImageSmallWebp from "../../assets/images/webp/applyImageSmall.webp";

import ImageWebPConverter from "../../util/ImageWebPConverter";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.homepage}>
      <section className={styles.homepage__top}>
        <h1>SERUMS</h1>
        <p>Fully organic ingredients to keep your skin clean and moisturized.</p>
      </section>
      <section className={styles.homepage__images}>
        <ImageWebPConverter
          className={`${styles.homepage__imgopt} ${styles.homepage__img1}`}
          src={womanImageWebp}
          srcSmall={womanImageSmallWebp}
          pngSmall={womanImageSmall}
          fallback={womanImage}
          alt="woman applying serum"
          width={540}
          height={364}
        />
        <div className={styles.homepage__imageDiv}>
          <ImageWebPConverter
            className={`${styles.homepage__img} ${styles.homepage__img2}`}
            src={applyImageWebp}
            srcSmall={applyImageSmallWebp}
            pngSmall={applyImageSmall}
            fallback={applyImage}
            alt="dropping serum"
            width={1080}
            height={1080}
          />
          <button className={styles.homepage__btn} onClick={() => navigate("/store")}>
            SHOP NOW
          </button>
        </div>
        <ImageWebPConverter
          className={`${styles.homepage__imgopt} ${styles.homepage__img3}`}
          src={serumsImageWebp}
          srcSmall={serumsImageSmallWebp}
          pngSmall={serumsImageSmall}
          fallback={serumsImage}
          alt="collection of serums"
          width={768}
          height={586}
        />
      </section>
    </main>
  );
};

export default HomePage;

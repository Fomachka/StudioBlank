import React from "react";
import styles from "./AboutPage.module.css";
import { aboutMeSmall, aboutMeMedium, aboutMeBig, aboutMeCream, aboutMeSerum } from "../../assets";

const AboutPage = () => {
  return (
    <main className={styles.about}>
      <section className={styles.about__section}>
        <picture>
          <source media="(max-width: 425px)" srcSet={`${aboutMeSmall} 425w`} sizes="425px" />
          <source media="(max-width: 1439px)" srcSet={`${aboutMeMedium} 1439w`} sizes="1440px" />
          <source srcSet={`${aboutMeBig}`} />
          <img src={aboutMeSmall} alt="serum splashed around" className={styles.about__bgimage} />
        </picture>
        <div className={styles.about__onimage}>
          <h1>ABOUT US</h1>
          <p>We are passionate about skincare, providing serums and creams for beautiful skin.</p>
        </div>
        <div className={styles.about__images}>
          <img src={aboutMeSerum} alt="bottle of serum" className={styles.about__serumimage} />
          <img src={aboutMeCream} alt="bottle of serum" className={styles.about__creamimage} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

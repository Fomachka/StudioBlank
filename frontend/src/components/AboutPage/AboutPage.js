import React from "react";
import styles from "./AboutPage.module.css";
import {
  aboutMeSmall,
  aboutMeMedium,
  aboutMeBig,
  aboutMeCream,
  aboutMeSerum,
  aboutMeSmallWebp,
  aboutMeMediumWebp,
  aboutMeBigWebp,
  aboutMeCreamWebp,
  aboutMeSerumWebp,
} from "../../assets";

const AboutPage = () => {
  return (
    <main className={styles.about}>
      <section className={styles.about__section}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${aboutMeSmallWebp} 425w, ${aboutMeMediumWebp} 1439w, ${aboutMeBigWebp} 1440w`}
            sizes="(max-width: 425px) 425px, (max-width: 1439px) 1439px, 1440px"
          />
          <source
            type="image/png"
            srcSet={`${aboutMeSmall} 425w, ${aboutMeMedium} 1439w, ${aboutMeBig} 1440w`}
            sizes="(max-width: 425px) 425px, (max-width: 1439px) 1439px, 1440px"
          />
          <img
            src={aboutMeSmall}
            alt="serum splashed around"
            className={styles.about__bgimage}
            width={426}
            height={750}
          />
        </picture>
        <div className={styles.about__onimage}>
          <h1>ABOUT US</h1>
          <p>
            We are passionate about skincare, providing serums and creams for beautiful
            skin.
          </p>
        </div>
        <div className={styles.about__images}>
          <picture>
            <source type="image/webp" srcSet={aboutMeSerumWebp} />
            <img
              src={aboutMeSerum}
              alt="bottle of serum"
              className={styles.about__serumimage}
              width={279}
              height={430}
            />
          </picture>
          <picture>
            <source type="image/webp" srcSet={aboutMeCreamWebp} />
            <img
              src={aboutMeCream}
              alt="tube of cream"
              className={styles.about__creamimage}
              width={339}
              height={467}
            />
          </picture>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import { contactImage, contactImageWebp } from "../../assets/";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }));
  };

  const isFormValid = (form) => {
    if (form.firstName.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (isFormValid(form)) {
      navigate("/submitted");
    }
  }, [form, navigate]);

  return (
    <main className={styles.contact}>
      <div>
        <div className={styles.contact__top}>
          <h1>CONTACT US</h1>
          <p>Our friendly team would love to hear from you!</p>
        </div>
        <form id="form" className={styles.contact__form} onSubmit={handleSubmit}>
          <div className={styles.contact__formcol}>
            <div className={styles.contact__formcol1}>
              <label htmlFor="fname">First Name</label>
              <input
                minLength="3"
                required
                type="text"
                id="fname"
                name="firstName"
                placeholder="First Name..."
              />
            </div>
            <div className={styles.contact__formcol2}>
              <label htmlFor="lname">Last Name</label>
              <input
                required
                type="text"
                id="lname"
                name="lastName"
                placeholder="Last Name..."
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input required type="email" id="email" name="email" placeholder="Email..." />
          <label htmlFor="message">Message</label>
          <textarea
            required
            maxLength="50"
            minLength="10"
            id="message"
            name="message"
            placeholder="Your Message..."
          />
        </form>
        <button className={styles.contact__formbtn} type="submit" form="form">
          SEND EMAIL
        </button>
      </div>
      <div>
        <picture className={styles.contact__img}>
          <source type="image/webp" srcSet={`${contactImageWebp} 1920w`} />
          <img
            src={contactImage}
            alt="serum bottle with a logo name below"
            width={1472}
            height={1512}
          />
        </picture>
      </div>
    </main>
  );
};

export default ContactPage;

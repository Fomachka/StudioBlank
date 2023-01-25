import React from "react";
import styles from "./SideMenu.module.css";
import { menuCloseIcon, cartIcon } from "../../assets/";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideMenu = ({ setToggleMenu }) => {
  const cart = useSelector((state) => state.cart);

  const setToggle = () => {
    return setToggleMenu((prev) => !prev);
  };

  const totalCartItems = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });

    if (total > 99) {
      return "99+";
    }

    return total;
  };

  return (
    <nav className={styles.sidenav}>
      <nav className={styles.sidenav__top}>
        <Link to="/" onClick={setToggle} className={styles.sidenav__logo}>
          STUDIO<span>BLANK</span>
        </Link>
        <div className={styles.sidenav__cart}>
          <p>Hi, Fomachka</p>
          <Link to="/cart">
            <img src={cartIcon} alt="cart icon" />
            <span className={styles.sidenav__iconbubble}>{totalCartItems() || 0}</span>
          </Link>
        </div>
      </nav>
      <img
        onClick={setToggle}
        className={styles.sidenav__icon}
        src={menuCloseIcon}
        alt="menu closing icon"
      />
      <ul>
        <li>
          <Link to="/" onClick={setToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" onClick={setToggle}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={setToggle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={setToggle}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;

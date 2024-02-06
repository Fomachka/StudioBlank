import React from "react";
import styles from "./SideMenu.module.css";
import { menuCloseIcon, cartIcon } from "../../assets/";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideMenu = ({ setToggleMenu }) => {
  const cart = useSelector((state) => state.cart);

  const handleToggle = () => {
    setToggleMenu(false);
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
        <Link to="/" onClick={handleToggle} className={styles.sidenav__logo}>
          STUDIO<span>BLANK</span>
        </Link>
        <div>
          <Link to="/cart">
            <div className={styles.sidemenu__cart}>
              <p>My Cart</p>
              <img src={cartIcon} alt="cart icon" width={12} height={13} />
              <span className={styles.sidemenu__iconbubble}>{totalCartItems() || 0}</span>
            </div>
          </Link>
        </div>
      </nav>
      <nav className={styles.sidenav__menu} onClick={handleToggle}>
        <img
          className={styles.sidemenu__icon}
          src={menuCloseIcon}
          alt="menu closing icon"
          height={48}
          width={48}
        />
      </nav>
      <ul className={styles.sidenav__ul}>
        <li>
          <Link to="/" onClick={handleToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" onClick={handleToggle}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleToggle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleToggle}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;

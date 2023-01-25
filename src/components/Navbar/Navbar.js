import { useState } from "react";
import styles from "./Navbar.module.css";
import { cartIcon, menuIcon } from "../../assets/index";
import SideMenu from "../SideMenu/SideMenu";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const cart = useSelector((state) => state.cart);

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
    <header className={styles.header}>
      <nav className={styles.navigation__top}>
        <Link to="/" className={styles.navbar__logo}>
          STUDIO<span>BLANK</span>
        </Link>
        <ul className={styles.navigation__links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <nav className={styles.navigation__cart}>
          <p>Hi, Fomachka</p>
          <Link to="/cart" className={styles.navigation__icon}>
            <img src={cartIcon} alt="cart icon" />
          </Link>
          <span className={styles.navigation__iconbubble}>{totalCartItems() || 0}</span>
        </nav>
      </nav>
      <nav className={styles.navigation__menu} onClick={() => setToggleMenu((prev) => !prev)}>
        <img src={menuIcon} alt="menu icon" />
      </nav>
      {toggleMenu && <SideMenu setToggleMenu={setToggleMenu} />}
    </header>
  );
};

export default Navbar;

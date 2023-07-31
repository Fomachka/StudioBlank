import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { cartIcon, menuIcon } from "../../assets/index";
import SideMenu from "../SideMenu/SideMenu";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location?.pathname || "/");

  useEffect(() => {
    handleActiveNav(location.pathname);
  }, [location.pathname]);

  const handleActiveNav = (path) => {
    setActive(path);
  };

  console.log(location.pathname);

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
            <Link
              to="/"
              onClick={() => setActive("/")}
              className={active === "/" && styles.navigation__active}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              onClick={() => setActive(location.pathname)}
              className={active?.includes("store") && styles.navigation__active}
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setActive(location.pathname)}
              className={active?.includes("about") && styles.navigation__active}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setActive(location.pathname)}
              className={active?.includes("contact") && styles.navigation__active}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/cart">
            <div className={styles.navigation__cart}>
              <p>My Cart</p>
              <img src={cartIcon} alt="cart icon" width={12} height={13} />
              <span className={styles.navigation__iconbubble}>
                {totalCartItems() || 0}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <nav
        className={styles.navigation__menu}
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <img
          className={styles.navigation__icon}
          src={menuIcon}
          alt="menu icon"
          width={26}
          height={26}
        />
      </nav>
      {toggleMenu && <SideMenu setToggleMenu={setToggleMenu} />}
    </header>
  );
};

export default Navbar;

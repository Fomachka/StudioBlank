import React from "react";
import styles from "./Pagination.module.css";
import { rightArrow, leftArrow } from "../../../assets";
import { Link } from "react-router-dom";

const Pagination = ({ productsPerPage, totalProducts, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; Math.ceil(i <= totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <nav>
      <ul className={styles.pagination}>
        <li>
          <img src={leftArrow} alt="left arrow icon" className={styles.pagination__icons} />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${styles.page} ${currentPage === number ? styles.page__active : ""}`}
          >
            <Link onClick={() => setCurrentPage(number)} to="#">
              {number}
            </Link>
          </li>
        ))}
        <li>
          <img src={rightArrow} alt="right arrow icon" className={styles.pagination__icons} />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

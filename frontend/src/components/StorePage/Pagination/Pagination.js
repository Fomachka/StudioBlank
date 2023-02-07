import React from "react";
import styles from "./Pagination.module.css";
import { rightArrow, leftArrow } from "../../../assets";
import { Link } from "react-router-dom";

const Pagination = ({ productsPerPage, totalProducts, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  if (Math.ceil(totalProducts / productsPerPage) <= 1) {
    pageNumbers.push(1);
  } else {
    for (let i = 1; Math.ceil(i <= totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const setPage = (currentPage) => {
    const amountOfPages = Math.ceil(totalProducts / productsPerPage);
    if (currentPage > amountOfPages) {
      return setCurrentPage(1);
    } else if (currentPage < 1) {
      return setCurrentPage(amountOfPages);
    } else {
      return setCurrentPage(currentPage);
    }
  };

  return (
    <nav>
      <ul className={styles.pagination}>
        <li onClick={() => setPage(currentPage - 1)}>
          <img src={leftArrow} alt="left arrow icon" className={styles.pagination__icons} />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${styles.page} ${
              currentPage === number ? styles.page__active : styles.page__inactive
            }`}
          >
            <Link onClick={() => setCurrentPage(number)} to="#">
              {number}
            </Link>
          </li>
        ))}
        <li onClick={() => setPage(currentPage + 1)}>
          <img src={rightArrow} alt="right arrow icon" className={styles.pagination__icons} />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
